# Muhammed Abdulhadi — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-enabled-black?logo=vercel)](https://vercel.com/analytics)

A recruiter-focused portfolio built with Next.js App Router to showcase projects, engineering strengths, and a clear contact path.

## Live Demo
- https://mrglasswillbreak.vercel.app

## Screenshot Previews

### Current Homepage Preview
![Homepage preview](https://image.thum.io/get/width/1400/noanimate/https://mrglasswillbreak.vercel.app)

### About/Profile Visual
![About/profile preview](public/images/me.png)

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript + React 19
- **Styling & UI:** Tailwind CSS, Motion, React Icons, Radix Slot
- **Infra/Observability:** Vercel Analytics
- **Backend utilities:** Nodemailer, Validator

## Short Case-Study Snapshots

### 1) Personal Brand Landing Experience
**Challenge:** Present technical depth and personality in one clean, fast-loading experience.  
**Approach:** Built modular sections (Hero, About, Skills, Experience, Projects, Contact) with responsive layout and subtle motion.  
**Outcome:** Recruiters get a stronger first impression with clearer narrative flow and easier profile scanning.

### 2) Recruiter Conversion Signals
**Challenge:** Reduce friction for hiring teams evaluating availability and fit.  
**Approach:** Centralized profile content and surfaced practical hiring details in the contact section.  
**Outcome:** Faster screening and clearer outreach expectations.

### 3) SEO & Discovery Foundation
**Challenge:** Improve discoverability and social preview quality.  
**Approach:** Added robust metadata, Open Graph/Twitter support, robots/sitemap, and structured data helpers.  
**Outcome:** Better indexing readiness and more professional share cards.

## Project Structure
```text
.
├── public/
│   ├── docs/
│   └── images/
├── src/
│   ├── app/           # routes, layouts, metadata, API handlers
│   ├── components/    # UI primitives, cards, sections, templates
│   ├── constant/      # profile, projects, skills, experience data
│   ├── lib/           # utils, schema, helper functions
│   └── assets/        # local SVG/assets used by components
├── README.md
├── package.json
└── tailwind.config.js
```

## Local Development
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Build & Quality Checks
```bash
npm run lint
npm run build
npm run start
```

## Customize Content
- `src/constant/self.ts`
- `src/constant/experience.ts`
- `src/constant/projects.ts`
- `src/constant/skills.ts`
