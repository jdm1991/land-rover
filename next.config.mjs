/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.netdirector.co.uk",
      "upload.wikimedia.org",
      "smgmedia.blob.core.windows.net",
      "www.revogarage.com",
      "cdn.shopify.com",
      "www.tweakedautomotive.com",
      "media.jlrms.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
