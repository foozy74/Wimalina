# Wimalina Limited — Boutique Advisory Services

Independent corporate finance and strategic advisory platform for selected mandates across the United Kingdom, Continental Europe, the United States, and beyond.

---

## 🏛️ Corporate Profile & Strategic Focus

Wimalina Limited is a boutique advisory firm specializing in:
* **Corporate Finance**: Capital raising, strategic funding concepts, acquisition and divestment support, restructuring, and balance sheet preparation.
* **Mergers & Acquisitions (M&A)**: Buy-side, sell-side, and partnership support across positioning, materials, due diligence, negotiation, and closing preparation.
* **Strategic Advisory**: Principal-level sparring on commercial direction, financing options, growth pathways, and stakeholder settings.
* **Special Situations**: Assignments involving heightened complexity, confidential settings, or cross-border sensitivities.
* **Project & Process Management**: Workstream oversight, timing discipline, adviser and counterparty coordination, and execution continuity.

---

## 🎨 Design & Visual Aesthetic

* **Paper & Navy Base**: Clean, executive typography using Inter and classic serif elements over a refined paper background (`#f6f4f1`) with deep navy (`#102237`) and subtle gold accent lines (`#c7a576`).
* **Responsive Layout**: Built with semantic HTML5 and modern CSS3 for seamless browsing across mobile, tablet, and desktop devices.
* **Corporate Download**: Includes direct PDF profile download (`assets/wimalina-corporate-profile-2026.pdf`).

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
├── index.html                # Semantic HTML5 entrypoint
├── styles.css                # Classic executive CSS design system
├── assets/                   # Corporate profile PDF, favicon & branding graphics
├── Dockerfile                # Nginx Alpine container image configuration
├── docker-compose.yml        # Local multi-container execution setup
├── .dockerignore             # Docker build exclusion rules
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD deployment pipeline
└── README.md                 # Project documentation
```

---

## 🔒 License & Copyright

&copy; 2026 Wimalina Limited. All rights reserved.
