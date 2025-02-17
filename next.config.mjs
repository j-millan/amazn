/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AMAZN_API_URL: process.env.AMAZN_API_URL,
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
