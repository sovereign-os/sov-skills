/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable turbopack warning since we rely on webpack for pa11y/puppeteer externals
    webpack: (config) => {
        config.externals.push('pa11y', 'puppeteer');
        return config;
    },
}

module.exports = nextConfig
