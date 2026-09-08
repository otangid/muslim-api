/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  // Proxy API calls to backend during development
  async rewrites() {
    return [
      {
        source: "/muslim/v1/:path*",
        destination: `${process.env.BACKEND_URL}/muslim/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
