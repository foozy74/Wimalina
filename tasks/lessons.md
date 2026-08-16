# Lessons Learned: Wimalina.uk Project

1. **Original Brand Integrity**: Always respect client/user feedback regarding visual identity. When a project folder like `Website/` contains the authoritative original design (paper/navy palette), prioritize adopting that exact design system rather than forcing alternative dark mode themes.
2. **Privacy & Contact Directives**: Strictly follow explicit user instructions regarding contact details (e.g. omitting personal phone numbers/names) while maintaining a functional corporate contact section.
3. **Container-Native Infrastructure**: Keeping `Dockerfile` and `docker-compose.yml` static serving configurations in the root directory ensures seamless GitHub integration without exposing infrastructure code to end-users browsing the public consulting site.
4. **Edge CDN Caching & HTML Cache-Control**: Ensure Nginx includes explicit `Cache-Control: no-cache, must-revalidate` headers for `index.html` in container deployments. Without explicit no-cache headers for root HTML routes, reverse proxies and CDNs (such as Cloudflare) may cache stale HTML builds, preventing newly deployed updates from rendering until cache purge.
