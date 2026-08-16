# TODO List: Wimalina Limited Web Project Adaptation

- [x] Analyze `/Website` directory and assets
- [x] Adopt original `Website/` design system (paper background, navy/gold palette)
- [x] Adapt root `index.html` with Corporate Finance & Strategic Advisory content
- [x] Omit personal contact/phone numbers as requested by user
- [x] Copy all corporate assets (PDF profile, branding images) to root `assets/`
- [x] Verify Docker build (`docker build -t wimalina-web:latest .`)
- [x] Generate walkthrough document (`walkthrough.md`)
- [x] Diagnose live site `https://wimalina.thesolution.at/` mismatch (Cloudflare HTML caching issue)
- [x] Update `Dockerfile` Nginx config to set `Cache-Control: no-cache, must-revalidate` for `index.html`
- [ ] Commit & push updated Dockerfile to GitHub to trigger fresh deployment and purge cache

