/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['laudable-armadillo-52.convex.cloud'],
        remotePatterns: [
            {
                hostname: 'wandering-rook-95.convex.cloud',
            },
        ],
    },
};

export default nextConfig;
