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
    category: "Maps · Navigation · PWA",
    headline: "A little less lost. A lot more campus.",
    description:
      "An offline-capable walking companion for LASU Ojo. Campus search, directions, and detailed 3D buildings — right in your browser.",
    tech: ["React", "TypeScript", "MapLibre", "Three.js", "Vite"],
    demo: "https://turnright.vercel.app/",
    github_link: "https://github.com/mrglasswillbreak/TurnRight",
    color: "#8db8ef",
    images: [
      {
        src: "/images/projects/turnright-map.webp",
        alt: "TurnRight campus map showing the LASU Senate Building in 3D and its place details",
        caption:
          "The public campus map, with place details and enhanced building models.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/images/projects/turnright-editor.webp",
        alt: "TurnRight owner editor with the campus map and feature explorer",
        caption:
          "Owner workspace demonstration, captured with local authentication and API fixtures; no private reports or production drafts are shown.",
        width: 1440,
        height: 1000,
      },
    ],
    overview:
      "Finding a building should be the easy part of a day on campus. TurnRight brings LASU Ojo’s places, walking paths, and building models into one browser-based map, with on-device search and routing and a downloadable campus package for offline use.",
    features: [
      {
        title: "Navigation that stays on the device",
        description:
          "Local place search and worker-based A* routing support walking directions, route alternatives, foreground GPS guidance, and spoken maneuvers.",
      },
      {
        title: "A campus with depth",
        description:
          "MapLibre and Three.js bring together paths, place details, and enhanced building models, with simpler rendering available when needed.",
      },
      {
        title: "Offline, with a way back",
        description:
          "Verified package downloads, resumable updates, and integrity repair make the offline experience explicit and recoverable.",
      },
      {
        title: "An editor behind the map",
        description:
          "A private owner workspace supports geometry and building edits, undo/redo, conflict review, and reviewed map releases.",
      },
    ],
    approach:
      "The public map and owner editor share campus data and rendering rules. Search, navigation audio, and route calculation run on the device; background workers keep heavier routing and model work away from the interface. Published campus packages are separate from working drafts, so an edit does not silently become a public map change.",
    note: "An independent, non-commercial project, not an official LASU service. Campus routes have not been field-verified; modeled details may include illustrative estimates, and a mapped approach is not a confirmed entrance.",
  },
  {
    slug: "rjwf",
    name: "RJWF",
    category: "Nonprofit · Website & CMS",
    headline: "A digital home for care and community.",
    description:
      "A public website and private content studio for RemmyJ Wellness Foundation, connecting its programs, community work, and ways to get involved.",
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
      "RJWF needed a place to explain its work and help people find the right way to participate. The project combines a responsive nonprofit website with a private content studio, giving the foundation a structured way to maintain its public information.",
    features: [
      {
        title: "A clear public journey",
        description:
          "Dedicated pages cover programs, projects, galleries, volunteering, partnerships, donations, transparency, and contact information.",
      },
      {
        title: "Editing in context",
        description:
          "The private content studio includes a visual page builder with responsive previews, section ordering, reusable blocks, and click-to-edit content.",
      },
      {
        title: "Content with a publishing workflow",
        description:
          "Draft and published states, revision restore, media records, and visibility controls support ongoing website maintenance.",
      },
      {
        title: "Built to be discoverable",
        description:
          "Prerendered public pages and a generated sitemap provide crawlable HTML alongside the interactive React experience.",
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
      "An image-led photography website with a database-backed gallery, content management, and first-party analytics for the person behind the lens.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
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
          "Typography, site styling, and favicon settings can be managed through the dashboard without a new code deployment.",
      },
      {
        title: "A view of visitor activity",
        description:
          "First-party analytics report page views, sessions, device types, and a seven-day activity trend in the admin dashboard.",
      },
    ],
    approach:
      "Next.js connects the public portfolio and admin tools to PostgreSQL-backed content and Blob image storage. JWT sessions in HTTP-only cookies protect the management interface. The public experience uses responsive imagery, light and dark themes, and motion that supports the visual presentation.",
  },
  {
    slug: "fidarsi",
    name: "Fidarsi",
    category: "Corporate · Web platform",
    headline: "A considered presence. A connected platform.",
    description:
      "A corporate website and registration platform for an African-founded proprietary trading firm, bringing its public story and protected workflows together.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Resend"],
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
          "Trader and academy registration use email verification, protected sessions, and role-based workspaces. Administrator access follows a separate invitation flow.",
      },
      {
        title: "Private document workflows",
        description:
          "The academy workflow is designed around private object storage and access controlled by the relevant account role.",
      },
      {
        title: "Public pages, ready to share",
        description:
          "Page metadata, canonical URLs, structured data, and social previews support the public website; private account routes stay out of the sitemap.",
      },
    ],
    approach:
      "Next.js App Router provides the public pages and server-side platform flows. PostgreSQL stores registration and session data, Resend handles transactional email, and private Blob storage supports verification documents. Public content and protected account actions have separate access and indexing rules.",
  },
  {
    slug: "kinsous",
    name: "KinSous",
    category: "Marketplace · Food & community",
    headline: "A taste of home. A helping hand nearby.",
    description:
      "A Nigeria-first culinary marketplace connecting food requests with local helpers, bringing discovery, bidding, private conversations, and order progress into one place.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel Blob",
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
      "Next.js App Router connects the React interface to Neon PostgreSQL, authenticated sessions, and transactional order rules. Flutterwave integration handles checkout and payment verification, with Resend for email and private Vercel Blob storage for attachments. The service worker caches approved public assets while keeping private pages and APIs network-only.",
    note: "A marketplace project with a hosted sign-in experience. Screenshots use local demonstration data, not customer activity. Live payments and delayed payouts require provider configuration and approval; audio/video calls and live GPS are deferred.",
  },
];
export function getProject(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
