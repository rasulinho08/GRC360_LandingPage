import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain site to `out/` that any web server or CDN can host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
