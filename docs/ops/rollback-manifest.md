# Mint Rollback Manifest

## Current Live Target
- HTML: `mint/index.html`
- JS bundle: `mint/kin-mint.797fb33b.js`

## Rollback Target
- JS bundle: `mint/kin-mint.176fd40e.js`

## Fast Rollback Steps
1. Edit `mint/index.html`.
2. Replace script source:
   - from: `kin-mint.797fb33b.js`
   - to: `kin-mint.176fd40e.js`
3. Deploy only:
   - `mint/index.html`
4. Purge CDN cache for `/mint/index.html`.
5. Re-test:
   - connect wallet
   - one mint simulation path
   - one signed transaction path

## Deployment Record (fill per deploy)
- Git SHA:
- FTP upload timestamp (UTC):
- Active bundle filename:
- Verified tx signatures (2):
