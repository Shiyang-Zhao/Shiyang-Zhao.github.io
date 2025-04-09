import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // enables static HTML export
  distDir: "out",                 // output directory for export
  images: {
    unoptimized: true,           // disables next/image optimization for static export
  },
  trailingSlash: true,           // optional: ensures paths like /about/ not /about
};

export default nextConfig;
