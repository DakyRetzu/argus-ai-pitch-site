import type { NextConfig } from "next";

// Static export: the pitch is a public showcase with no server, no ARGUS backend and no API.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
