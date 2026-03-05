# Muhammed Abdulhadi — Portfolio

[![Live](https://img.shields.io/badge/Live-mrglasswillbreak.vercel.app-000000?logo=vercel)](https://mrglasswillbreak.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-enabled-black?logo=vercel)](https://vercel.com/analytics)

A modern, recruiter-focused developer portfolio built with **Next.js App Router**, designed to highlight project quality, technical depth, and hiring-ready contact signals.

---

## Live Demo

**Production deployment:**
- https://mrglasswillbreak.vercel.app

---

## Screenshot Previews

### Homepage Preview

![homepage preview](public/images/thumbnail.png)

### Author Image
![Author Image](public/images/me.png)

---

## ✨ What This Portfolio Focuses On

- Clear personal branding and role targeting
- Outcome-driven project summaries
- Recruiter conversion details (availability, response expectations)
- Strong metadata and SEO/social preview foundation
- Smooth, modern UI with responsive sections

---

## Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS

### UI / UX
- Motion animations (`motion`)
- React Icons
- Radix Slot utilities
- Custom component architecture (`src/components`)

### Platform / Services
- Vercel Analytics
- Nodemailer (contact delivery)
- QuickEmailVerification API integration (contact validation)

---

## Case-Study Style Highlights

### 1) Personal Brand Landing Experience
- **Challenge:** Present technical depth and personality in one cohesive, high-quality browsing flow.

- **Approach:** Structured the portfolio into modular sections (Hero, About, Skills, Experience, Projects, Contact) with responsive composition and subtle animations.

- **Outcome:** Improved first impression quality and faster recruiter scan-ability.

### 2) Recruiter Conversion Signals
- **Challenge:** Reduce friction for hiring teams evaluating fit and availability.
  
- **Approach:** Centralized profile content and surfaced practical hiring details directly in the contact experience.

- **Outcome:** Cleaner handoff from “portfolio viewer” to “outreach-ready candidate.”

### 3) SEO & Discovery Foundation
- **Challenge:** Ensure the site is discoverable and looks professional when shared.  

- **Approach:** Implemented metadata, Open Graph + Twitter cards, robots/sitemap routes, and structured data helpers.  

- **Outcome:** Better indexing readiness and stronger link-sharing previews.

---

## 🗂️ Project Structure

```text
.
├── public/
│   ├── docs/
│   │   └── Aarab_Nishchal_Resume.pdf
│   └── images/
│       ├── logo.svg
│       ├── logo.png
│       ├── me.png
│       ├── thumbnail.png
├── src/
│   ├── app/
│   │   ├── api/send/            # contact form API route
│   │   ├── resume/              # resume page + metadata
│   │   ├── layout.tsx           # global metadata + app shell
│   │   ├── page.tsx             # homepage
│   │   ├── robots.ts            # robots config
│   │   └── sitemap.ts           # sitemap generation
│   ├── components/
│   │   ├── common/
│   │   ├── sections/
│   │   ├── Cards/
│   │   └── ui/
│   ├── constant/                # self, projects, experience, skills
│   ├── lib/                     # helpers + structured data
│   └── assets/                  # local SVG/assets
├── README.md
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Build & Quality Checks

```bash
npm run lint
npm run build
npm run start
```

---

## ⚙️ Environment Variables

For contact form/email features (`src/app/api/send/route.ts`), configure:

```bash
email_from=your@email.com
email_password=your_app_password
QEV_API_KEY=your_quickemailverification_key
```

---

## Personalization Guide

Update these files to adapt the portfolio to your own profile:

- `src/constant/self.ts` → identity, role, bio, socials, availability
- `src/constant/experience.ts` → work/training timeline
- `src/constant/projects.ts` → featured project cards and links
- `src/constant/skillsData.tsx` → grouped skill set visuals

---

## Contact

- GitHub: https://github.com/mrglasswillbreak
- LinkedIn: https://www.linkedin.com/in/muhammed-abdulhadi-7b9ba2278
- X: https://x.com/mrglaswontbreak

