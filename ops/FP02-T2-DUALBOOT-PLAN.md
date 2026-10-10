# FP//02 | 2019 MacBook Air T2 | Ubuntu dual-boot preparation

Status: PREPARATION ONLY. No disk changes have been made.

## Confirmed configuration
- FP//02: Apple MacBookAir8,2, dual-core Intel Core i5, 8 GB RAM.
- macOS account: focalpoint.5.
- FP//01 (Lenovo) has SSH-key access over LAN to focalpoint.5@192.168.68.50 using ~/.ssh/fp01_to_fp02.
- FP//02 is reachable by SSH on the LAN; direct SSH on the Tailscale address previously timed out. Do not claim direct Tailscale SSH works until tested.
- FP//02's internal SSD is approximately 113 GiB, with roughly 87 GiB shown free on the boot filesystem before this audit. Actual partition layout must be confirmed.
- The SSH link will be lost temporarily once FP//02 boots an installer or Ubuntu; SSH server and Tailscale must be configured afresh inside Ubuntu.

## Installation target
Use an official **t2linux T2-patched Ubuntu installer**, preferably Ubuntu 24.04 LTS for a conservative first deployment on this older 8 GB machine (current T2-Ubuntu release checked Oct 10, 2026: v7.1.8-1). Ubuntu 26.04 is also offered in the same release.
Download directly from https://github.com/t2linux/T2-Ubuntu/releases/latest and use the project's checksum assets.
Do not use a vanilla Ubuntu ISO for the initial install.

## Disk allocation (TENTATIVE)
Aim for ~50-55 GB retained for macOS and recovery, and ~55-60 GB for Ubuntu. Exact numbers depend on the disk map, APFS snapshots, and what macOS requires for updates. Do not force a ~40 GB macOS allocation without confirming sufficient headroom.

## Required gates before repartitioning
1. Complete an independent backup, confirm recent backups are readable, and keep the recovery key if FileVault is on. An SSH connection is not a backup.
2. Review the read-only audit output: diskutil physical partitions, APFS capacity, FileVault status, and Time Machine status.
3. Obtain an 8 GB+ USB drive (16 GB recommended) and USB-C adapter; writing an installer will erase the USB.
4. Download the correct ISO parts from the official T2-Ubuntu release, assemble, verify SHA256, and write to USB after identifying the USB device exactly.
5. Use macOS Disk Utility to shrink the APFS partition and create a NEW partition for Linux (NOT merely an APFS volume), as directed by t2linux.
6. In macOS Recovery, authenticate using the Mac administrator password. For external Linux boot, t2linux documents setting Secure Boot to **No Security** and permitting external boot. These settings reduce device boot protection; do not make them before the verified-backup checkpoint.
7. Reboot physically holding Option, boot T2 installer, select MANUAL partitioning. Format only the newly created Linux target as ext4 mounted at /. Do NOT choose erase disk or format existing macOS APFS or EFI partitions.
8. Install and validate Ubuntu, T2 drivers, networking, SSH public key, and Tailscale. Confirm FP//01 can reach the Ubuntu node before setting any automatic boot policy. Retain working macOS startup as a fallback.

## Important known risks
- T2 Ubuntu documentation notes a GRUB blank-screen issue affecting some users; rEFInd can be a workaround.
- T2 internal Wi-Fi may need Apple firmware extracted from retained macOS (get-apple-firmware get_from_macos).
- Do not automate low-level partitioning, Secure Boot changes, USB-device selection, or first boot; require operator verification at each destructive stage.

## References
- https://wiki.t2linux.org/guides/preinstall/
- https://wiki.t2linux.org/distributions/ubuntu/installation/
- https://wiki.t2linux.org/roadmap/
- https://support.apple.com/en-us/102522
- https://github.com/t2linux/T2-Ubuntu/releases/latest

## Preflight run from FP//01 (after reviewing script)
- Read-only script location: ops/fp02-t2-preflight.sh
- Recommended execution: download to FP//01 with curl, inspect, then pipe via SSH with the dedicated key: ssh -i ~/.ssh/fp01_to_fp02 focalpoint.5@192.168.68.50 'bash -s' < /tmp/fp02-t2-preflight.sh
- This audit does not ask for sudo and makes no mutations.
