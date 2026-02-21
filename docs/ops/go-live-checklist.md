# KIN Mint Go-Live Checklist

## 1) Payment Routing
- Mint one `egg`, one `hatch`, one `elder` from a non-treasury wallet.
- Verify each tx sends SOL to treasury:
  - `7BLHKsHRGjsTKQdZYaC3tRDeUChJ9E2XsMPpg2Tv23cf`
- Record signatures.

## 2) Per-Tier Mint Behavior
- Confirm exact charged amounts:
  - `egg`: `2.5 SOL`
  - `hatch`: `5.3 SOL`
  - `elder`: `8.3 SOL`
- Confirm insufficient SOL path shows:
  - `Mint failed: Not enough SOL ...`

## 3) Returned NFT Media/Metadata Mapping
- For each tier test mint, verify:
  - metadata name/attributes match expected tier or pre-reveal rule
  - media URI resolves to expected placeholder/asset set
- If mismatch:
  - mark as `content mapping issue`
  - do not classify payment/mint as failed

## 4) Mint Truthfulness
- Confirm no case where:
  - confirmed signature is shown as failed
  - failed tx is shown as minted
- Confirm post-confirm verification lag shows:
  - `Verification delayed` (not failure)

## 5) Phantom Warning Mitigation
- Wallet flow:
  - single wallet signer
  - pre-sign simulation enabled
  - no post-sign simulation path
- Submit Phantom domain/app review with:
  - domain: `https://www.meetyourkin.com`
  - Candy Machine/Candy Guard addresses
  - sample successful signatures
  - mint flow summary

## 6) Artifact Integrity
- Live HTML references only approved bundle hash.
- Old bundle URLs removed or not referenced.
- Confirm active hash:
  - `mint/kin-mint.797fb33b.js`

## 7) Security
- No private keys/secrets in repo HEAD.
- CSP is present on `mint/index.html`.
- RPC primary path set to `/rpc` with restricted fallback.
