# KIN Fresh 60 Egg-Only Relaunch (2026-02-21)

## Baseline (before relaunch)
- Baseline commit: `f86c886ba36b741d45da28b739a2cb310bad1db2`
- Legacy Candy Machine: `CC3nsKDxKgkS5uZwoFLRaDkL4pCfSxLvVRNnFt8F8JWU`
- Legacy Candy Guard: `BnAUBBg7Un9iwg2S2hrdoRr8B6uEnRw2Bx2SUYH4jC99`
- Treasury: `7BLHKsHRGjsTKQdZYaC3tRDeUChJ9E2XsMPpg2Tv23cf`

## New Production Issuance (strict 20/20/20)
- Egg tier
  - Candy Machine: `5T1krpsDZRuiSGRJD66AjRsi7wfA7VgGNaukmTQU3LNe`
  - Candy Guard: `K2eMqjz5JVFGLhEY58m7FHmVYmnccyMfntzXeS9NPZn`
  - Guard label: `egg`
  - Price: `2.5 SOL`
  - Metadata URI (placeholder): `https://gateway.irys.xyz/04r5PRhE0_gJpPu52x4UXe8CQ9uB3n4HHayP0QAFQ64`

- Hatchling tier
  - Candy Machine: `DY2owgAYja3xjuwKqLQnizHQpR3jKhPVJhKWtutfZLS4`
  - Candy Guard: `Cq8zEi6d4UHogmmFgfdACoenLsyC2DT1SnGeYNL51GLJ`
  - Guard label: `hatch`
  - Price: `5.3 SOL`
  - Metadata URI (placeholder): `https://gateway.irys.xyz/oVygvLJcPX0ZQFxjbS2tpLQB21tC2YbZ0TGcpwRrhPE`

- Elder tier
  - Candy Machine: `7DeYqQKxM1ivwK8YNPibHUsfBYbPfbXLX8Aeeh7eYv6b`
  - Candy Guard: `7WGeMkZWZdBfjnU9YjM47zrYLXgRyA8htJWhk2Sx8KsS`
  - Guard label: `elder`
  - Price: `8.3 SOL`
  - Metadata URI (placeholder): `https://gateway.irys.xyz/E2YhKY_ObHJvR4HNt8B8UV9MZtxGwnvRxGvmKig009k`

## Verification snapshot
- All three machines verified on-chain with:
  - `itemsAvailable = 20`
  - `itemsRedeemed = 0`
  - `mintAuthority = corresponding Candy Guard`
  - guard `solPayment.destination = treasury`
  - guard lamports exactly `2_500_000_000 / 5_300_000_000 / 8_300_000_000`
  - guard `redeemedAmount.maximum = 20`

## Cost snapshot
- Treasury before deploy attempt: `0.065778248 SOL`
- Treasury after deployment: `0.024404368 SOL`
- Net observed deployment spend: `0.041373880 SOL`

## Frontend rollout changes
- `mint/index.html`
  - Runtime config now defines tier-specific machine/guard routing.
  - Mint bundle reference updated to `kin-mint.360fc73e.js`.
- `mint/kin-mint.797fb33b.js`
  - Refactored to validate and mint per-tier machine/guard instead of a single machine.
  - Dynamic availability now reflects each tier machine.
- `mint/egg-mapping-manifest.json`
  - Locked mapping manifest for 20 items per tier (egg placeholders only).

## Deployment manifest source
- `C:\Users\lucid\Desktop\Jarvis\temp\kin-by-kr8tiv-2\mint-api\data\fresh-egg-relaunch-20260221213621795.json`
