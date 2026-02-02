import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static exports if needed
  // output: 'export',
  
  // Ensure public folder is served correctly
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
  
  // Add redirects
  async redirects() {
    return [
      {
        source: '/compare',
        destination: '/resources/compare',
        permanent: true,
      },
      // Old Engineer Assist pages redirect to consolidated page
      {
        source: '/apps/engineer-assist-connectwise',
        destination: '/apps/engineer-assist',
        permanent: true,
      },
      {
        source: '/apps/engineer-assist-halo',
        destination: '/apps/engineer-assist',
        permanent: true,
      },
      {
        source: '/apps/engineer-assist-servicenow',
        destination: '/apps/engineer-assist',
        permanent: true,
      },
      // Old Manager App pages redirect to consolidated page
      {
        source: '/apps/engineer-app-v4',
        destination: '/apps/manager-app',
        permanent: true,
      },
      {
        source: '/apps/engineer-manager-halo',
        destination: '/apps/manager-app',
        permanent: true,
      },
      {
        source: '/apps/engineer-manager-servicenow',
        destination: '/apps/manager-app',
        permanent: true,
      },
      // Old chatbot page redirect to new page
      {
        source: '/apps/msp-branded-client-chatbot',
        destination: '/apps/end-user-chatbot',
        permanent: true,
      },
    ];
  },
  
  // Optional: Add headers for better security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;