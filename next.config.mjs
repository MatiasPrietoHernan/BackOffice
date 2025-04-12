// next.config.mjs
import nextI18NextConfig from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextI18NextConfig,
  reactStrictMode: true,
};

export default nextConfig;
