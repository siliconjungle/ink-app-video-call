# Video Call

Make a two-person audio/video call using native WebRTC and ephemeral Ink signaling.

## Install

Requires a running [Ink OS](https://github.com/siliconjungle/ink-os-platform) instance and its `ink-os` CLI. Use Node.js 24 or later for development.

```sh
git clone https://github.com/siliconjungle/ink-app-video-call.git
cd ink-app-video-call
npm test
# Select your Ink instance using its CLI connection profile.
ink-os deploy .
```

The CLI deploys committed source from your checkout. Commit any edits before deploying them. No credentials or personal instance configuration belong in this repository.

## Behaviour and limits

Camera and microphone require browser permission. Restrictive networks may need an operator-configured TURN server; direct-only connectivity is not guaranteed.

## License

MIT for app code. Bundled third-party components retain their own licenses and notices.
