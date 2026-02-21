# KIN Mint Release Baseline (2026-02-21)

## Snapshot
- Repository: `kr8tiv-io/Kinbykr8tiv-website`
- Baseline git SHA (start of stabilization): `e9714d8ee1a2dea67fb6e57c2113a42b4036e20d`
- Active mint page: `mint/index.html`
- Active mint bundle: `mint/kin-mint.797fb33b.js`
- Rollback mint bundle: `mint/kin-mint.176fd40e.js`

## On-chain Configuration
- Candy Machine: `CC3nsKDxKgkS5uZwoFLRaDkL4pCfSxLvVRNnFt8F8JWU`
- Candy Guard: `BnAUBBg7Un9iwg2S2hrdoRr8B6uEnRw2Bx2SUYH4jC99`
- Treasury: `7BLHKsHRGjsTKQdZYaC3tRDeUChJ9E2XsMPpg2Tv23cf`

## Production Tier Pricing
- `egg`: `2_500_000_000` lamports (`2.5 SOL`)
- `hatch`: `5_300_000_000` lamports (`5.3 SOL`)
- `elder`: `8_300_000_000` lamports (`8.3 SOL`)

## Runtime Controls
Defined in `window.KIN_RUNTIME_CONFIG`:
- `publicMintEnabled`
- `pauseReason`
- `preRevealMode`
- `diagnosticsEnabled`
- `rpcPrimary` (default `/rpc`)
- `rpcFallback` (default `https://api.mainnet-beta.solana.com`)

## Immediate Hardening Included
- Confirmed signature is treated as mint success.
- Post-confirm asset checks are non-blocking.
- Per-tier click lock and short dedupe window implemented.
- Dynamic availability text (total remaining fallback).
- CSP added on mint page.
- Status link rendering moved to safe DOM API.
