export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}
export interface Project {
  slug: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  tech: string[];
  demo: string;
  github_link?: string;
  color: string;
  images: ProjectImage[];
  overview: string;
  features: { title: string; description: string }[];
  approach: string;
  note?: string;
}
export const projectsData: Project[] = [
  {
    slug: "turnright",
    name: "TurnRight",
    category: "GIS · Navigation · PWA",
    headline: "Explore a campus. Build a better map.",
    description:
      "A multi-campus map and GIS platform for LASU Ojo and UNILAG Akoka, with walking and driving directions, verified offline downloads, and a private team editor.",
    tech: [
      "React",
      "TypeScript",
      "MapLibre",
      "Three.js",
      "Python",
      "Supabase / PostGIS",
      "Vite",
    ],
    demo: "https://turnright.vercel.app/",
    color: "#8db8ef",
    images: [
      {
        src: "/images/projects/turnright-map-2026-10.webp",
        alt: "Published TurnRight LASU campus map with 3D buildings and a Senate Building photograph",
        caption:
          "LASU Ojo’s published 3D campus map, captured on 18 October 2026 with landmark details and reference photography.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/images/projects/turnright-editor-2026-10.webp",
        alt: "TurnRight GIS editor with numeric rectangle construction, reference snapping, and a drawing preview",
        caption:
          "Precision drawing in the team editor, captured on 18 October 2026 with isolated demonstration accounts and API fixtures.",
        width: 1440,
        height: 1000,
      },
    ],
    overview:
      "TurnRight has grown from a LASU walking map into a platform for exploring and maintaining multiple campuses. Visitors can switch between LASU Ojo and UNILAG Akoka, inspect buildings and photographs, plan journeys, and prepare for offline use. Behind the public map, campus teams have a shared workspace for importing data, editing geometry, reviewing changes, and publishing approved releases.",
    features: [
      {
        title: "Two campuses, one explorer",
        description:
          "A globe and campus directory connect separate LASU and UNILAG maps. Search, saved places, shared destinations, visitor layers, and 2D/3D views retain the selected campus’s identity.",
      },
      {
        title: "Walking and driving, connected",
        description:
          "On-device routing supports walking and driving, foreground GPS, spoken instructions, and deviation handling. Driving accounts for mapped vehicle restrictions, parking, and a walking handoff where available.",
      },
      {
        title: "Offline, with a way back",
        description:
          "Each campus has a verified download for maps, search, routing, and recorded guidance. Resumable updates preserve the active journey and the last valid package until the replacement is ready.",
      },
      {
        title: "A complete GIS workspace",
        description:
          "Data, Edit, Analyze, Review, and Publish workspaces bring together GIS imports, attribute tables, precision drawing, spatial analysis, and map exports, with campus-scoped roles and draft recovery.",
      },
      {
        title: "Buildings backed by references",
        description:
          "Building authoring combines footprints, roofs, façades, mesh components, and reference photographs. Local photo editing and private walking surveys help teams prepare visual and field evidence for review.",
      },
      {
        title: "Review before release",
        description:
          "Source comparisons preserve editor corrections and hold proposed changes for review. Immutable snapshots, independent approval, and campus-specific restore keep working drafts separate from published maps.",
      },
    ],
    approach:
      "React and TypeScript connect the public PWA and private editor. MapLibre and Three.js render maps and building models; IndexedDB and the service worker manage recovery and verified offline packages. Supabase/PostGIS stores campus work, roles, and review records, while isolated Python workers process GIS imports and analysis. A shared npm workspace, pinned development containers, and unit, browser, and native GIS checks support ongoing maintenance.",
    note: "An independent project, not an official university service. Routes and entrances still require field verification; modeled dimensions may be estimated or illustrative. Navigation runs in the foreground, without cross-campus routing, indoor navigation, or a verified step-free guarantee. Editor screenshots show local demonstrations; some source-import workflows still require staged production enablement.",
  },
  {
    slug: "rjwf",
    name: "RJWF",
    category: "Nonprofit · Website & CMS",
    headline: "A digital home for care and community.",
    description:
      "A nonprofit website with a guided content studio and private submissions inbox, helping RemmyJ Wellness Foundation publish its work and manage community enquiries.",
    tech: ["React", "Vite", "PostgreSQL", "Vercel Blob"],
    demo: "https://remmyjwellnessfoundation.org",
    color: "#e7ca87",
    images: [
      {
        src: "/images/projects/rjwf-home.webp",
        alt: "RemmyJ Wellness Foundation homepage presenting its community care mission",
        caption:
          "The foundation’s public homepage brings its mission and community work together.",
        width: 1234,
        height: 712,
      },
      {
        src: "/images/projects/rjwf-programs.webp",
        alt: "RJWF programs page with community health, elderly care, and empowerment programs",
        caption:
          "A dedicated programs page helps visitors understand the foundation’s areas of work.",
        width: 1234,
        height: 712,
      },
    ],
    overview:
      "RJWF brings the foundation’s programs, community work, and participation routes into one public website. Its redesigned Content Studio gives administrators a guided way to edit pages, maintain collections, and follow up on contact, partnership, beneficiary, and volunteer submissions from a private inbox.",
    features: [
      {
        title: "A clear public journey",
        description:
          "Dedicated pages cover programs, projects, galleries, volunteering, partnerships, donations, and transparency. Prerendered HTML and a generated sitemap make public information discoverable.",
      },
      {
        title: "A guided content studio",
        description:
          "Labelled section fields, responsive previews, drag or button-based ordering, and reusable text, image, CTA, and card blocks make page editing approachable on desktop and mobile.",
      },
      {
        title: "Content with a publishing workflow",
        description:
          "Autosaved drafts, explicit publishing, revision restore, searchable collections, and reusable media let administrators maintain content and recover earlier versions.",
      },
      {
        title: "Enquiries with a place to go",
        description:
          "A private inbox collects contact, partnership, beneficiary, and volunteer submissions, with statuses, internal notes, recoverable trash, and duplicate-request protection.",
      },
    ],
    approach:
      "React and Vite power the public site and editing canvas. Serverless endpoints connect the content studio to Neon PostgreSQL and Vercel Blob. Bundled fallback content keeps public pages useful when CMS data is unavailable, while protected sessions separate editing from public browsing.",
  },
  {
    slug: "photography-portfolio",
    name: "Photography Portfolio",
    category: "Creative · Portfolio & CMS",
    headline: "The work in focus. The tools behind it.",
    description:
      "An image-led photography portfolio with a filterable gallery, editable services and visual identity, and first-party visitor analytics in a private CMS.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel Blob",
    ],
    demo: "https://photography-portfolio-amber-nine.vercel.app",
    github_link: "https://github.com/mrglasswillbreak/photographyPortfolio",
    color: "#c7b59d",
    images: [
      {
        src: "/images/projects/photography-home.webp",
        alt: "Photography Portfolio homepage with a vintage camera background and photography introduction",
        caption:
          "An image-led introduction gives the photography room to speak.",
        width: 1234,
        height: 712,
      },
      {
        src: "/images/projects/photography-gallery.webp",
        alt: "Photography Portfolio selected works gallery with landscape, portrait, and wedding images",
        caption:
          "The public gallery presents selected work across photography categories.",
        width: 1234,
        height: 712,
      },
    ],
    overview:
      "A photography site needs to do more than display a beautiful landing page. This project pairs an expressive public portfolio with the tools to upload work, update services, edit content, and understand how visitors use the site.",
    features: [
      {
        title: "A gallery made for browsing",
        description:
          "A database-backed masonry gallery supports category filtering and a zoomable lightbox, with loading states for arriving images.",
      },
      {
        title: "A working content system",
        description:
          "An authenticated admin interface manages photos, alt text, services, and page copy, including drag-and-drop uploads to Vercel Blob.",
      },
      {
        title: "An editable visual identity",
        description:
          "Typography controls include live previews for weights, emphasis, and spacing. Administrators can replace the favicon and update login credentials without a new code deployment.",
      },
      {
        title: "A view of visitor activity",
        description:
          "First-party analytics report page views, sessions, device types, and a seven-day activity trend in the admin dashboard.",
      },
    ],
    approach:
      "Next.js connects the public portfolio and admin tools to PostgreSQL-backed content and Blob image storage. JWT sessions in HTTP-only cookies protect management routes, while Nodemailer delivers contact enquiries. Responsive imagery, a simplified hero image structure, theme controls, and loading states support the public experience.",
  },
  {
    slug: "fidarsi",
    name: "Fidarsi",
    category: "Corporate · Web platform",
    headline: "A considered presence. A connected platform.",
    description:
      "A corporate website and registration platform with verified email, role-based workspaces, private document handling, and administrator review for trader and academy applications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Resend", "Vercel Blob"],
    demo: "https://fidarsica.org",
    color: "#a7c6be",
    images: [
      {
        src: "/images/projects/fidarsi-home.webp",
        alt: "Fidarsi corporate homepage with its institutional introduction in navy and gold",
        caption:
          "The public homepage introduces the firm’s purpose, capabilities, and operating principles.",
        width: 1234,
        height: 712,
      },
      {
        src: "/images/projects/fidarsi-news.webp",
        alt: "Fidarsi insights and newsroom page",
        caption:
          "A dedicated insights and newsroom area extends the firm’s public presence.",
        width: 1234,
        height: 712,
      },
    ],
    overview:
      "Fidarsi brings a corporate narrative and account workflows into one application. The public website presents the firm’s purpose, governance, capabilities, newsroom, and careers, while a separate protected platform handles trader and academy registration.",
    features: [
      {
        title: "A coherent corporate presence",
        description:
          "Shared layouts and a restrained visual system connect the firm’s public pages, contact channels, and newsroom.",
      },
      {
        title: "Registration with clear boundaries",
        description:
          "Trader and academy registration use email verification, protected sessions, and role-based workspaces. Administrator access uses time-limited invitations, with separate registration-review workflows.",
      },
      {
        title: "Private document workflows",
        description:
          "The academy workflow is designed around private object storage and access controlled by the relevant account role.",
      },
      {
        title: "Public pages, ready to share",
        description:
          "Canonical metadata, structured data, social previews, and newsroom article routes support discovery. Keyboard focus, a skip link, and reduced-motion support improve navigation; private account routes stay out of the sitemap.",
      },
    ],
    approach:
      "Next.js App Router provides public pages and server-side account workflows. PostgreSQL stores registrations and sessions, Resend handles verification and invitation emails, and private Blob storage supports academy documents. Cloudflare Turnstile protects contact enquiries, while public content and protected account actions have separate access and indexing rules.",
  },
  {
    slug: "kinsous",
    name: "KinSous",
    category: "Marketplace · Food & community",
    headline: "A taste of home. A helping hand nearby.",
    description:
      "A Nigeria-first culinary marketplace taking food requests through helper bids, private conversations, and order milestones, with NGN checkout workflows and an installable PWA.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel Blob",
      "Flutterwave",
    ],
    demo: "https://kinsous2.vercel.app",
    github_link: "https://github.com/mrglasswillbreak/kinSous2",
    color: "#e7aa73",
    images: [
      {
        src: "/images/projects/kinsous-home.webp",
        alt: "KinSous marketplace homepage with a culinary introduction, account welcome, and sample marketplace activity",
        caption:
          "The marketplace homepage, captured locally with seeded demonstration accounts and sample activity.",
        width: 1234,
        height: 712,
      },
      {
        src: "/images/projects/kinsous-bounties.webp",
        alt: "KinSous bounty board with searchable food requests, category filters, budgets, and bid counts",
        caption:
          "The bounty board presents food requests and category filters. Listings shown are local demonstration data.",
        width: 1234,
        height: 712,
      },
    ],
    overview:
      "KinSous explores how a marketplace can connect people looking for familiar food with people who can help prepare or source it. Seekers post requests, helpers discover opportunities and submit bids, and both sides can coordinate the work through private conversations and order milestones.",
    features: [
      {
        title: "From a craving to a request",
        description:
          "A searchable bounty board supports food requests, category filters, budgets, and helper bids, alongside profiles for discovering culinary help.",
      },
      {
        title: "Conversations around the work",
        description:
          "Private messaging connects seekers and helpers, with attachment support, typing indicators, and tools for blocking and reporting.",
      },
      {
        title: "An order with clear stages",
        description:
          "Order milestones track progress through delivery and confirmation. Server-side payment workflows include NGN checkout, verified payment events, and operator review for payouts, refunds, and disputes.",
      },
      {
        title: "A marketplace that travels with you",
        description:
          "An installable PWA provides an offline fallback and account-scoped draft recovery. Responsive navigation, theme options, and explicit loading and error states support everyday use.",
      },
    ],
    approach:
      "Next.js App Router connects the interface to Neon PostgreSQL, authenticated sessions, and transactional order rules. Explicit, versioned migrations keep database setup out of user requests. Flutterwave handles checkout and verified payment events, with Resend for email and private Blob storage for attachments. The PWA caches approved public assets while keeping private pages and APIs network-only; account-scoped drafts clear on logout.",
    note: "A marketplace project with a hosted sign-in experience. Screenshots use local demonstration data, not customer activity. Live payments and delayed payouts require provider configuration and approval; audio/video calls and live GPS are deferred.",
  },
];
export function getProject(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
