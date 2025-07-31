/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.adidas.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.nike.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'shop.realmadrid.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'store.fcbarcelona.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
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
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
