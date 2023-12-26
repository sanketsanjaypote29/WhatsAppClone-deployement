/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1669671907,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "8c6d441e40039f91a91f8e6bfaddbd73"
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
