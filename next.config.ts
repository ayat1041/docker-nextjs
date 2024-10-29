import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.ts
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [], // if external images are used, add domains here
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
