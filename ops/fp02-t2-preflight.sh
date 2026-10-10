#!/usr/bin/env bash
# FP//02 T2 dual-boot preflight: READ ONLY.
# Run on FP//02 (MacBookAir8,2). No sudo, installs, repartitioning, or reboot.
set -u
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:${PATH:-}"
section() { printf '\n==== %s ====\n' "$1"; }

section "IDENTITY"
printf 'macOS: '; sw_vers -productVersion 2>/dev/null || true
printf 'Architecture: '; uname -m
printf 'Model: '; sysctl -n hw.model 2>/dev/null || true
printf 'RAM bytes: '; sysctl -n hw.memsize 2>/dev/null || true
if [ "$(sysctl -n hw.model 2>/dev/null)" != "MacBookAir8,2" ]; then
  printf 'WARNING: Model differs from the expected 2019 MacBook Air. Stop before installation.\n'
fi

section "BOOT VOLUME SPACE"
df -h /

section "INTERNAL PHYSICAL DISK PARTITIONS"
diskutil list internal physical 2>&1 || diskutil list 2>&1

section "APFS CONTAINER SUMMARY"
diskutil apfs list 2>&1 | grep -E 'APFS Container Reference:|Size \(Capacity Ceiling\):|Capacity In Use By Volumes:|Capacity Not Allocated:|Physical Store |APFS Volume Disk|Name:|FileVault:' || true

section "FILEVAULT ENCRYPTION"
fdesetup status 2>&1 || true

section "TIME MACHINE VISIBILITY"
if tmutil destinationinfo >/dev/null 2>&1; then
  printf 'Time Machine configuration command responded; this does NOT prove a current backup.\n'
else
  printf 'Time Machine destination unavailable, unconfigured, or not readable.\n'
fi
if tmutil latestbackup >/dev/null 2>&1; then
  printf 'A Time Machine backup is listed; verify that it is recent and restorable.\n'
else
  printf 'No Time Machine backup was found from this account. Verify an independent backup before partitioning.\n'
fi

section "POWER"
pmset -g batt 2>&1 || true

section "CHECKPOINT"
printf 'READ-ONLY preflight complete. No disk or boot settings were changed.\n'
printf 'Do not resize APFS or boot an installer until the backup and partition map are reviewed.\n'
