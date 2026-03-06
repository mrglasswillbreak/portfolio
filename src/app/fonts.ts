import localFont from "next/font/local";

// Inter for all paragraph text and body content (locally hosted for offline builds)
export const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["Inter", "system-ui", "sans-serif"],
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// Mono for subheadings and smaller descriptive text
export const mono = localFont({
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  src: [
    {
      path: "../../node_modules/@fontsource/cutive-mono/files/cutive-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

// Nasalization for all main headings
export const nasalization = localFont({
  src: [
    {
      path: "../assets/fonts/nasalization.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasalization",
  display: "swap",
});

// Quentine specifically for my name
export const quentine = localFont({
  src: [
    {
      path: "../assets/fonts/quentin.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-quentine",
  display: "swap",
});
