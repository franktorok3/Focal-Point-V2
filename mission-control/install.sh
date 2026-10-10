#!/usr/bin/env bash
# FP//01 HELICARRIER Mission Control v0.1 — verified install, then launch.
set -euo pipefail
command -v python3 >/dev/null || { echo "Python 3 is required"; exit 1; }
python3 - <<'PY'
import base64, hashlib, io, pathlib, urllib.request, zipfile

url = "https://raw.githubusercontent.com/franktorok3/Focal-Point-V2/fp01-mission-control-v0.1/mission-control/v0.1.zip.b64"
expected = "6ff5b817c9bb48d87af005ebd18e704240a82233eee8d04a3503c50be9e5e143"
print("Fetching FP//01 v0.1 from your GitHub repository...")
with urllib.request.urlopen(url, timeout=30) as response:
    raw = base64.b64decode(response.read())
actual = hashlib.sha256(raw).hexdigest()
if actual != expected:
    raise SystemExit("Package checksum did not match: refusing to install.")

home = pathlib.Path.home()
target = home / "focalpoint-mission-control"
if target.exists() and any(target.iterdir()):
    raise SystemExit(f"Existing files at {target}; refusing to overwrite. Inspect the directory first.")
target.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(io.BytesIO(raw)) as bundle:
    for item in bundle.infolist():
        parts = pathlib.PurePosixPath(item.filename).parts
        if not parts or parts[0] != "focalpoint-mission-control" or ".." in parts:
            raise SystemExit("Unexpected archive entry; refusing to extract.")
        relative = parts[1:]
        if not relative:
            continue
        destination = target.joinpath(*relative)
        if item.is_dir():
            destination.mkdir(parents=True, exist_ok=True)
        else:
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(bundle.read(item))
(target / "start-lan.sh").chmod(0o755)
print(f"Checksum verified. Installed at {target}.")
PY
echo "Running local smoke tests..."
python3 -m unittest discover -s "$HOME/focalpoint-mission-control" -p "test_server.py"
echo "Starting read-only LAN cockpit (Ctrl+C stops it)..."
exec bash "$HOME/focalpoint-mission-control/start-lan.sh"
