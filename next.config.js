/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        // SET PATTERN FOR YOUR FIREBASE IMAGE HOST
        protocol: "https",
        hostname: "**.**.**",
      },
    ],
  },
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};
