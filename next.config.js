/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        API_SERVICES: process.env.SERVICES,
        API_TEMPLATE: process.env.TEMPLATE,
        API_PUBLIC_KEY: process.env.PUBLIC_KEY,
    },
};
module.exports = nextConfig;
