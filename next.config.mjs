/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
            'posters.cdn.klikfilm.net',
            'aceternity.com' 
        ],
    },
};

export default nextConfig;
