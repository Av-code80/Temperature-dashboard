/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    OPEN_WEATHER_MAP_API_URL: process.env.OPEN_WEATHER_MAP_API_URL,
    OPEN_WEATHER_MAP_API_KEY: process.env.OPEN_WEATHER_MAP_API_KEY,
  },
};

export default nextConfig;
