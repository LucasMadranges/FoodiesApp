/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lucasmadranges-nextjs-demo-users-image.s3.eu-west-3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig
