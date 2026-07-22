# Wimalina & Partners — Public Affairs, Political Strategy & Arena Analysis

High-performance, containerized, animated corporate web platform for **Wimalina & Partners**. Built with semantic HTML5, modern vanilla CSS3 (Monochrome + Crimson Red design system), Vanilla JavaScript ES2024, Docker, and GitHub Actions CI/CD workflows.

---

## 🏛️ Corporate Profile & Strategic Focus

Wimalina & Partners is a premier strategic advisory firm specializing in:
* **Public Affairs & Policy Advocacy**: Legislative monitoring, political risk assessment, and policy representation across the UK, DACH, and EU markets.
* **Arena Analysis (Emerging Issues)**: Proprietary foresight methodology identifying socio-political trends and regulatory shifts long before they reach headline status.
* **Stakeholder Engagement & Wicked Problems**: Executive roundtables and multi-stakeholder mediation for complex, high-stakes environments.
* **Regulatory Governance**: Ethical advocacy compliant with statutory transparency registries and international codes of conduct.

---

## 🎨 Visual Design System

* **Monochrome Base Palette**: Deep Black (`#050507`), Charcoal (`#121216`), Dark Slate (`#1a1a20`), Muted Silver (`#a1a1aa`), and Pure White (`#ffffff`).
* **Vibrant Red Accent**: Crimson Red (`#ff2a3b`) used exclusively for badges, buttons, active states, pulse rings, and interactive particle mesh.
* **Interactive Canvas Physics**: Ambient canvas background rendering real-time node mesh connections and mouse parallax response.

---

## 🐳 Quick Start with Docker

### 1. Build & Run Container Locally
```bash
docker compose up --build -d
```
Access the application immediately at: **`http://localhost:8080`**

### 2. Stop Container
```bash
docker compose down
```

---

## 💻 Local Development (Without Docker)

Serve the repository root using any local static HTTP server:
```bash
# Using Node.js
npx serve .

# Using Python 3
python3 -m http.server 8000
```
Open **`http://localhost:8000`** in your web browser.

---

## 📦 Repository Structure

```text
├── index.html                # Semantic HTML5 entrypoint (English, Public Affairs focus)
├── styles.css                # Monochrome & Crimson Red CSS design system
├── app.js                    # Canvas particle physics, showreel modal & stats logic
├── Dockerfile                # Nginx Alpine container image configuration
├── docker-compose.yml        # Local multi-container execution setup
├── .dockerignore             # Docker build exclusion rules
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD deployment pipeline
└── README.md                 # Project documentation
```

---

## 🚀 GitHub Deployment Pipeline

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`:
1. **GitHub Pages**: Automatically builds and deploys static assets to GitHub Pages on pushes to `main` or `master`.
2. **Container Registry**: Validates Docker image compilation and multi-stage builds.

---

## 🔒 License & Copyright

&copy; 2026 Wimalina & Partners. All rights reserved.
