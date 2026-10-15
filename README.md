# Kumkum Sharma — B.Tech Biotechnology Academic Portfolio

A modern, responsive, recruiter-ready, and academically honest personal portfolio website for **Kumkum Sharma**, a first-year Bachelor of Technology (B.Tech) Biotechnology student at **Lovely Professional University (LPU)**.

Built directly around her **Career Aspiration Report**, this website showcases her academic background, passion for molecular biology, genetic engineering, and bioinformatics, developing laboratory skills, proposed academic projects, and long-term ambition to become a **Senior Research Scientist** in biotechnology research and development.

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [Project Folder Structure](#project-folder-structure)
5. [How to Run the Website Locally](#how-to-run-the-website-locally)
6. [How to Customize Placeholders](#how-to-customize-placeholders)
   - [Replace Profile Photo](#1-replace-profile-photo)
   - [Add Actual Resume File](#2-add-actual-resume-file)
   - [Update Social Media Links](#3-update-social-media-links)
   - [Update Skills & Goals](#4-update-skills--goals)
   - [Update Projects (From Proposed to Completed)](#5-update-projects)
   - [Update Certifications (From Planned to Completed)](#6-update-certifications)
   - [Connect the Contact Form to a Backend](#7-connect-the-contact-form)
7. [Publishing on GitHub Pages](#publishing-on-github-pages)
8. [Troubleshooting Common Issues](#troubleshooting-common-issues)
9. [Pre-Launch Verification Checklist](#pre-launch-verification-checklist)

---

## 🧬 Project Overview

- **Student:** Kumkum Sharma
- **Degree:** B.Tech in Biotechnology
- **University:** Lovely Professional University (LPU), Punjab, India
- **Status:** First Year, First Semester
- **Career Goal:** Senior Research Scientist — Research & Development (R&D)
- **Target Fields:** Molecular Biology, Genetic Engineering, Bioinformatics, Bioprocess & Quality Control (GLP)

This website is tailored for college assignments, academic presentations, faculty project proposals, summer research internship applications (CSIR, ICMR, DBT labs), and future master's/doctoral admissions.

---

## ✨ Key Features

- **Scientific Design Aesthetic**: Pale mint green, teal, soft white, and subtle blue gradients reflecting modern biotechnology.
- **Academically Transparent**: Clearly distinguishes foundational skills possessed today from skills currently in development or planned for the future.
- **Proposed Projects Showcase**: Highlights realistic initial research concepts (NCBI/BLAST gene studies, plant DNA isolation, microbial kinetics) without claiming unearned experimental results.
- **Interactive Career Roadmap**: 5-stage timeline from undergraduate fundamentals to senior scientist leadership.
- **Open Science & Research Resources**: Curated links to NCBI, BLAST, PubMed, and Google Scholar.
- **Client-Side Validated Contact Form**: Validates inputs with clear error messages and transparent feedback.
- **Light & Dark Theme Toggle**: Seamless mode switching with persistent theme memory via `localStorage`.
- **Fully Responsive & Accessible**: Mobile hamburger drawer, smooth scrolling, active section spy, and reduced-motion support.
- **Print / PDF Friendly**: Formats cleanly for 1-click printing or saving as a PDF resume.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document structure, accessibility attributes (`aria-*`), and SEO meta tags.
- **CSS3**: Custom design tokens, CSS variables, flexbox, CSS grid, media queries, print styles, and dark-mode theming.
- **JavaScript (ES6+)**: Sticky navbar scroll listener, scroll reading progress, mobile menu drawer, scrollspy, form validation, and theme persistence.
- **Font Awesome 6.5**: Crisp vector icons for biological and laboratory elements.
- **Google Fonts**: *Plus Jakarta Sans* (headings), *Inter* (body text), and *JetBrains Mono* (scientific labels).

---

## 📁 Project Folder Structure

```
biotechnology-portfolio/
├── index.html                    # Master semantic HTML page
├── css/
│   └── style.css                 # Responsive stylesheet with theme variables
├── js/
│   └── script.js                 # Navigation, theme, scrollspy & form validation
├── assets/
│   ├── images/
│   │   └── profile-avatar.svg    # Vector avatar placeholder (replace with photo)
│   ├── icons/                    # Custom SVG/icon assets
│   └── documents/
│       └── resume-placeholder.txt # Initial resume document placeholder
├── .gitignore                    # Git exclusion rules
└── README.md                     # Documentation and deployment manual
```

---

## 🚀 How to Run the Website Locally

### Method 1: Instant Direct Launch (No Server Needed)
Double-click `index.html` or right-click `index.html` and select **Open with Google Chrome** (or Edge/Firefox/Safari).

### Method 2: Localhost HTTP Server (Recommended)
Running through an HTTP server ensures correct local path resolution:

**Using Python (Pre-installed on most systems):**
```bash
# Navigate to the portfolio folder
cd path/to/kumkum-sharma-portfolio

# Start a local web server on port 8080
python -m http.server 8080
```
Open your browser and navigate to:  
👉 **`http://localhost:8080`**

**Using Node.js / npx:**
```bash
npx serve .
```

---

## ✏️ How to Customize Placeholders

Kumkum should update the following placeholders as she progresses through her degree:

### 1. Replace Profile Photo
1. Save Kumkum's professional headshot as `profile-photo.jpg` (or `.png`) inside `assets/images/`.
2. Open `index.html`, locate line ~110:
   ```html
   <!-- Replace: -->
   <img src="assets/images/profile-avatar.svg" alt="Kumkum Sharma Student Profile Avatar Placeholder" class="profile-avatar-img">
   <!-- With: -->
   <img src="assets/images/profile-photo.jpg" alt="Kumkum Sharma - Biotechnology Student" class="profile-avatar-img">
   ```

### 2. Add Actual Resume File
1. Export Kumkum's verified CV as a PDF file: `Kumkum_Sharma_Resume.pdf`.
2. Place it in `assets/documents/Kumkum_Sharma_Resume.pdf`.
3. In `index.html`, search for `resume-placeholder.txt` and replace with `Kumkum_Sharma_Resume.pdf`:
   ```html
   <a href="assets/documents/Kumkum_Sharma_Resume.pdf" download="Kumkum_Sharma_Resume.pdf" class="btn btn-outline">
   ```

### 3. Update Social Media Links
In `index.html`, locate the social link elements in the hero and contact sections:
```html
<!-- Replace '#' with actual URLs: -->
<a href="https://www.linkedin.com/in/kumkum-sharma" target="_blank" rel="noopener noreferrer">...</a>
<a href="https://github.com/kumkum-sharma" target="_blank" rel="noopener noreferrer">...</a>
```

### 4. Update Skills & Goals
As laboratory practicals are completed in Semester 2 and beyond, move items in `index.html` from `<span class="badge-tag badge-goal">Learning Goal</span>` to `<span class="badge-tag badge-beginner">Acquired</span>`.

### 5. Update Projects (From Proposed to Completed)
When Kumkum finishes an actual project or publishes a poster:
1. Change `<span class="project-status-badge">Planned Project</span>` to `<span class="project-status-badge">Completed Lab Project</span>`.
2. Add a GitHub repository link or a downloadable PDF report link.

### 6. Update Certifications (From Planned to Completed)
When a course (e.g., NPTEL, Coursera, or LPU workshop) is completed:
1. Change `Not Yet Completed` to `Verified Certificate`.
2. Replace `[Planned Provider]` with the actual provider (e.g., `IIT Kharagpur / NPTEL`).
3. Add the credential verification URL.

### 7. Connect the Contact Form to a Backend
To receive actual email notifications from visitors, connect the form to [Formspree](https://formspree.io/) (free):
1. Sign up on Formspree and obtain your form endpoint URL (e.g., `https://formspree.io/f/xyzabcde`).
2. In `index.html`, update the `<form>` tag:
   ```html
   <form id="portfolio-contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
   ```
3. Set input `name` attributes: `name="name"`, `name="email"`, `name="subject"`, `name="message"`.

---

## 🌐 Publishing on GitHub Pages (Step-by-Step)

Follow these steps to publish the portfolio live for free with HTTPS:

1. **Create a GitHub Account & Repository**:
   - Log into [GitHub](https://github.com/).
   - Click **New Repository**.
   - Name it `biotechnology-portfolio` (or `<your-username>.github.io`).
   - Choose **Public**, leave "Add a README" unchecked, and click **Create repository**.

2. **Initialize Git & Push from Terminal**:
   ```bash
   cd path/to/kumkum-sharma-portfolio
   git init
   git add .
   git commit -m "Initial release of Kumkum Sharma Biotechnology Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/biotechnology-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your repository, go to **Settings** &rarr; **Pages** (under Code and automation).
   - Under **Build and deployment** &rarr; **Branch**, select `main` and root `/ (root)`.
   - Click **Save**.
   - After 1–2 minutes, your website will be live at:  
     `https://<your-username>.github.io/biotechnology-portfolio/`

---

## ❓ Troubleshooting Common Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| Styles not loading | Incorrect CSS link path | Ensure `css/style.css` is in the `css` folder relative to `index.html`. |
| Icons not displaying | CDN blocked or offline | Verify internet connection for FontAwesome CDN in `<head>`. |
| Resume download fails | Missing target file | Ensure the file exists in `assets/documents/` with matching filename. |
| Mobile menu won't open | JavaScript not executing | Check browser console (F12) to ensure `js/script.js` loads with no errors. |
| Dark mode doesn't persist | Cookies/storage disabled | Enable local storage in browser privacy settings. |

---

## ✅ Pre-Launch Verification Checklist

- [x] **Page Title & Meta**: Title contains "Kumkum Sharma" and correct academic program.
- [x] **Responsive Layout**: Tested across mobile (375px), tablet (768px), and desktop (1200px).
- [x] **Navigation Bar**: All 9 links (`#hero`, `#about`, `#interests`, `#skills`, `#projects`, `#education`, `#certifications`, `#roadmap`, `#contact`) scroll smoothly to target sections.
- [x] **Mobile Menu**: Hamburger icon opens menu on small screens and closes on link click.
- [x] **Theme Switcher**: Toggles smoothly between Light and Dark themes and remembers choice on reload.
- [x] **Academic Honesty**: All projects clearly marked as *Proposed/Planned*; skills separated into *Current* vs *Goals*; no fake credentials.
- [x] **External Links**: NCBI, BLAST, PubMed, and Google Scholar open in new tabs (`target="_blank" rel="noopener noreferrer"`).
- [x] **Contact Form**: Rejects empty fields, validates email format, and displays feedback.
- [x] **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility.
- [x] **Print Mode**: `@media print` cleanly hides UI controls and prepares layout for PDF resume export.

---

*Academic Portfolio developed for Kumkum Sharma &bull; Lovely Professional University*  
*"Curiosity today, discoveries tomorrow."*
