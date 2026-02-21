# KIN by KR8TIV Website

Public static website and Solana mint frontend for KIN Genesis.

## Purpose

This repository hosts:
- Main marketing site (`index.html`)
- Live mint page (`mint/index.html`)
- Client-side Candy Machine mint logic (`mint/kin-mint.*.js`)

The mint flow is fully client-side and runs on static hosting (no Node backend required in production).

## Mint Architecture

- Network: Solana mainnet
- Wallet UX: Phantom (injected wallet and Phantom browser SDK support)
- Mint protocol: Metaplex Candy Machine v3 + Candy Guard
- Program IDs:
  - Candy Machine Core: `CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR`
  - Candy Guard: `Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g`
  - Token Metadata: `metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s`

On-chain mint accounts used by this deployment:
- Candy Machine: `CC3nsKDxKgkS5uZwoFLRaDkL4pCfSxLvVRNnFt8F8JWU`
- Candy Guard: `BnAUBBg7Un9iwg2S2hrdoRr8B6uEnRw2Bx2SUYH4jC99`
- Treasury destination: `7BLHKsHRGjsTKQdZYaC3tRDeUChJ9E2XsMPpg2Tv23cf`

## Tier Configuration

Guard groups and prices:
- `egg`: `2_500_000_000` lamports (`2.5 SOL`)
- `hatch`: `5_300_000_000` lamports (`5.3 SOL`)
- `elder`: `8_300_000_000` lamports (`8.3 SOL`)

## Client-Side Mint Flow

1. Validate on-chain Candy Machine and Guard config at startup.
2. Build mint transaction for selected group.
3. Pre-sign simulation with `sigVerify:false`.
4. Request Phantom signature.
5. Send raw transaction with `skipPreflight:false`.
6. Confirm signature on-chain.
7. Run non-blocking post-confirm verification.

Success policy:
- Confirmed on-chain signature is treated as mint success.
- Post-confirm verification issues are surfaced as delayed/content warnings, not false mint failures.

## Runtime Controls

`window.KIN_RUNTIME_CONFIG` supports live operations:
- `publicMintEnabled`
- `pauseReason`
- `preRevealMode`
- `diagnosticsEnabled`
- `rpcPrimary` (default: `/rpc`)
- `rpcFallback` (default: `https://api.mainnet-beta.solana.com`)

## Security Model

- No private keys are stored in frontend code.
- Treasury private key must never be committed.
- CSP is set on the mint page.
- Mint status links are rendered with safe DOM APIs (no `innerHTML` tx injection path).
- Dedupe lock and short localStorage replay window reduce duplicate-click mint attempts.

## RPC Hardening

Recommended production setup:
- Use `/rpc` Cloudflare Worker proxy (see `infra/cloudflare/`)
- Restrict upstream private RPC key by origin/rate limits
- Keep direct fallback endpoint restricted and monitored

## Operations Docs

- Release baseline: `docs/ops/2026-02-21-mint-release-baseline.md`
- Rollback manifest: `docs/ops/rollback-manifest.md`
- Go-live checklist: `docs/ops/go-live-checklist.md`

## Local Development

Static site only:

```bash
python -m http.server 8080
```

Open:
- `http://localhost:8080/`
- `http://localhost:8080/mint/`

## Deployment

Deploy static files to your host (GitHub Pages, Hostinger, FTP, etc). For mint releases, always deploy:
- `mint/index.html`
- active `mint/kin-mint.<hash>.js`
- related media assets if changed

## License

All rights reserved by KR8TIV AI unless otherwise stated.
