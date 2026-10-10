#!/usr/bin/env bash
# FP//02: stage (download + verify) official T2 Ubuntu 24.04 installer.
# Non-destructive: does NOT resize partitions, use sudo, reboot, or write USB/external disks.
set -euo pipefail

RELEASE="v7.1.8-1"
BASE="https://github.com/t2linux/T2-Ubuntu/releases/download/${RELEASE}"
PREFIX="ubuntu-24.04-7.1.8-t2-noble.iso"
DIR="$HOME/Downloads/FP02-T2-Ubuntu"
MANIFEST="sha256-ubuntu-24.04"
mkdir -p "$DIR"

available_kib="$(df -Pk "$HOME" | awk 'NR==2 { print $4 }')"
if ! [[ "$available_kib" =~ ^[0-9]+$ ]] || [ "$available_kib" -lt 8388608 ]; then
  printf 'STOP: Need at least 8 GiB free on the Mac internal drive for safe staging.\n' >&2
  exit 1
fi

fetch_verified() {
  local name="$1" expected="$2" actual tmp
  local destination="$DIR/$name"
  if [ -e "$destination" ]; then
    actual="$(shasum -a 256 "$destination" | awk '{print $1}')"
    if [ "$actual" = "$expected" ]; then
      printf 'Verified existing: %s\n' "$name"
      return
    fi
    printf 'STOP: Existing file failed checksum, not overwriting: %s\n' "$destination" >&2
    exit 1
  fi

  printf 'Downloading %s\n' "$name"
  tmp="$(mktemp "$DIR/.partial.XXXXXXXX")"
  if ! curl --fail --location --retry 3 --connect-timeout 30 --progress-bar \
      --output "$tmp" "$BASE/$name"; then
    printf 'Download interrupted; partial file retained for inspection at %s\n' "$tmp" >&2
    exit 1
  fi
  actual="$(shasum -a 256 "$tmp" | awk '{print $1}')"
  if [ "$actual" != "$expected" ]; then
    printf 'STOP: Checksum failed for %s; partial kept at %s\n' "$name" "$tmp" >&2
    exit 1
  fi
  mv -n "$tmp" "$destination"
  printf 'SHA256 verified: %s\n' "$name"
}

fetch_verified "$PREFIX.00" "34be7fff5454ce5402d9b5e90a30549dd407dd5b56f7e892771755174fc3281f"
fetch_verified "$PREFIX.01" "a2bcd0436b94fae5416d642c7d8579c2e177ced87ef2e1657b7d50080ede6f9f"
fetch_verified "$PREFIX.02" "205f20cbe6ebebf487be30ac421686f0b381adff4111885273982afbe869e8c1"
fetch_verified "$PREFIX.03" "cee043f115bf8b8ab68ed81c0e5f9d1272a62a96713e28d9568485869368f624"
fetch_verified "$MANIFEST" "79062fbc9a1928477f2aa0250849c02f8c68deb5173bd19e0fc22a2b7edeacea"

output="$DIR/$PREFIX"
if [ ! -e "$output" ]; then
  printf 'Assembling verified image parts (may take a few minutes)...\n'
  tmp="$(mktemp "$DIR/.iso.XXXXXXXX")"
  cat "$DIR/$PREFIX.00" "$DIR/$PREFIX.01" "$DIR/$PREFIX.02" "$DIR/$PREFIX.03" > "$tmp"
  expected="$(awk 'NR==1 {print $1}' "$DIR/$MANIFEST")"
  actual="$(shasum -a 256 "$tmp" | awk '{print $1}')"
  if [ "$expected" != "$actual" ]; then
    printf 'STOP: Combined ISO checksum mismatch. No ISO was installed.\n' >&2
    exit 1
  fi
  mv -n "$tmp" "$output"
fi
expected="$(awk 'NR==1 {print $1}' "$DIR/$MANIFEST")"
actual="$(shasum -a 256 "$output" | awk '{print $1}')"
if [ "$expected" != "$actual" ]; then
  printf 'STOP: Combined ISO checksum mismatch.\n' >&2
  exit 1
fi

printf '\nREADY: Installer image staged and SHA256 verified.\n'
printf 'File: %s\n' "$output"
du -h "$output"
printf 'NO USB media, disk partitions, macOS volumes, or Passport files changed.\n'
printf 'Next: choose a separate >=8GB USB flash drive; writing it WILL ERASE THAT USB ONLY.\n'
