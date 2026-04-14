# Gabriel de Rezende Gonçalves - Software Engineer

[![Website](https://img.shields.io/badge/Website-gabireze.com.br-blue?style=for-the-badge&logo=safari)](https://gabireze.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-gabireze-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/gabireze)
[![GitHub](https://img.shields.io/badge/GitHub-gabireze-181717?style=for-the-badge&logo=github)](https://github.com/gabireze)
[![Email](https://img.shields.io/badge/Email-contato@gabireze.com.br-D14836?style=for-the-badge&logo=gmail)](mailto:contato@gabireze.com.br)

> **Full stack software engineer · Angular, Laravel, Python · MBA in Solution Architecture (FIAP) · scalable systems and integrations**

## About This Repository

This repository contains the source code for my **personal website and professional portfolio**, built with **Jekyll** and hosted on **GitHub Pages**. The website serves as my interactive digital resume, showcasing my experience, projects, and technical skills in a modern and responsive way.

### Website Access
**Portuguese:** [gabireze.com.br](https://gabireze.com.br)  
**English:** [gabireze.com.br/en](https://gabireze.com.br/en)

---

## About Me

**Full stack software engineer** focused on **Angular**, **Laravel**, **Python**, integrations with legacy systems, and solution architecture.

- **Frontend:** Angular, Vue 3, React, TypeScript
- **Backend:** Python (FastAPI), PHP (Laravel), Node.js
- **Cloud & DevOps:** AWS, Azure, Docker, Kubernetes, CI/CD

### Education
- **MBA in Solution Architecture** — FIAP (2025–2026)
- **Bachelor’s in Software Engineering** — PUC Campinas (2019–2023)
- **Academic exchange** — Vancouver, Canada (2022)

### Current role
**Software Engineer** at [Levva](https://levva.com.br) (Jul/2025 — present): consulting projects including **financial-sector** frontend (Angular, landing pages) and prior **full stack** delivery (e.g. Laravel, APIs, Azure CI/CD).

---

## Tech Stack

### Framework & Technologies
- **Jekyll** - Static site generator
- **Liquid** - Template engine
- **Sass (Dart Sass)** - CSS with `@use` modules (no legacy `@import` in the main pipeline)
- **JavaScript (ES6+)** - Interactivity
- **Markdown** - Content

### Features
- **Responsive** - Optimized design for all devices
- **Dark/Light Theme** - Automatic switching with localStorage
- **Bilingual** - Portuguese and English
- **SEO Optimized** - Meta tags, Open Graph, Schema.org
- **Performance** - HTML compression, lazy loading
- **Accessibility** - ARIA labels, keyboard navigation
- **PWA Ready** - Service Worker configured

### Hosting & Deploy
- **GitHub Pages** - Free and reliable hosting
- **Custom Domain** - gabireze.com.br
- **HTTPS** - Automatic SSL certificate
- **GitHub Actions** - CI workflow runs `jekyll build` on push/PR (`/.github/workflows/jekyll.yml`)

---

## How to Run Locally

### Prerequisites
```bash
# Ruby 2.7+
ruby --version

# Bundler
gem install bundler
```

### Installation
```bash
# Clone the repository
git clone https://github.com/gabireze/gabireze.github.io.git
cd gabireze.github.io

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Access at http://localhost:4000
```

### Useful Commands
```bash
# Build for production
bundle exec jekyll build

# Development mode with live reload
bundle exec jekyll serve --livereload

# Clean cache
bundle exec jekyll clean
```

---

## Project Structure

```
gabireze.github.io/
├── index.md                 # Main page (PT)
├── en.md                    # English home (EN)
├── en/                      # Extra EN pages (legal, etc.)
├── _config.yml              # Jekyll configuration
├── _layouts/                # HTML templates
│   ├── default.html         # Base layout
│   ├── home.html           # Home layout
│   ├── page.html           # Simple inner pages (legal)
│   └── 404.html            # Error page
├── _includes/               # Reusable components
│   ├── header.html         # Meta tags and SEO
│   ├── navbar.html         # Navigation menu
│   └── anchor_headings.html # Automatic anchors
├── _sass/                   # SCSS styles
│   ├── main.scss           # Main file (@use)
│   ├── _variables.scss     # Theme variables + shared placeholders
│   └── klise/              # Theme components
├── assets/                  # Static resources
│   ├── css/                # Compiled CSS
│   ├── js/                 # JavaScript
│   ├── img/                # Images
│   ├── pdf/                # PDF resumes
│   └── favicons/           # Site icons
├── redirects/               # Social media redirects
└── _data/                   # Structured data
    └── menus.yml           # Menu configuration
```

---

## Customization

### Themes
The site supports **light theme** and **dark theme** with automatic switching:
- Detects operating system preference
- Saves user choice in localStorage
- Smooth transitions between themes

### Internationalization
- **Portuguese (default):** `/`
- **English:** `/en`
- Friendly URLs with automatic redirects

### SEO & Analytics
- Google Analytics 4 integrated
- Optimized meta tags
- Open Graph for social media
- Schema.org structured data
- Automatic sitemap

---

## Performance & Optimization

### Core Web Vitals
- **LCP:** < 1.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

### Implemented Optimizations
- Automatic HTML compression
- CSS/JS minification
- Image lazy loading
- Service Worker for caching
- Critical resource preloading

---

## Technologies Used

![Jekyll](https://img.shields.io/badge/Jekyll-CC0000?style=flat-square&logo=jekyll&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white)

---

## Contact & Networking

**Let's connect!** I'm always open to opportunities, collaborations, and technology discussions.

### Professional Links
- **Website:** [gabireze.com.br](https://gabireze.com.br)
- **LinkedIn:** [linkedin.com/in/gabireze](https://linkedin.com/in/gabireze)
- **GitHub:** [github.com/gabireze](https://github.com/gabireze)
- **Email:** [contato@gabireze.com.br](mailto:contato@gabireze.com.br)

---

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

<div align="center">

**If this project helped you, consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/gabireze/gabireze.github.io?style=social)](https://github.com/gabireze/gabireze.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/gabireze/gabireze.github.io?style=social)](https://github.com/gabireze/gabireze.github.io/network/members)

**Made with love by [Gabriel de Rezende Gonçalves](https://gabireze.com.br)**

</div>
