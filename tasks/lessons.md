# Lessons Learned: Wimalina.uk Project

1. **Domain Alignment**: When modernizing a corporate site inspired by an existing brand (e.g. Kovar & Partners), ensure text copy accurately reflects pure strategic/business consulting without cluttering with internal technical/DevOps jargon.
2. **Color Palette Design System**: Using modern CSS variables for a monochrome dark base with a single high-contrast accent (like Crimson Red `#ff2a3b`) creates a striking, executive visual presence while maintaining high readability.
3. **Container-Native Infrastructure**: Keeping `Dockerfile` and `docker-compose.yml` static serving configurations in the root directory ensures seamless GitHub integration without exposing infrastructure code to end-users browsing the public consulting site.
