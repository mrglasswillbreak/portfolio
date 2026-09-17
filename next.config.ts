import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/email",
        destination: "mailto:mrglasswillbreak@gmail.com",
        permanent: true,
      },
      {
        source: "/directresume",
        destination: "/docs/Aarab_Nishchal_Resume.pdf",
        permanent: true,
      },
      {
        source: "/direct-resume",
        destination: "/docs/Aarab_Nishchal_Resume.pdf",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/mrglasswillbreak",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
