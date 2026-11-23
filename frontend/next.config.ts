/** @type {import('next').NextConfig} */
const backendUrl = (process.env.BACKEND_URL || "http://localhost:3001").replace(/\/$/, "");

const nextConfig: import("next").NextConfig = {
  // Proxy API calls to backend during development
  async rewrites() {
    return [
      {
        source: "/muslim/v1/:path*",
        destination: `${backendUrl}/muslim/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
