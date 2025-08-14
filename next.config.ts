import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
    reactStrictMode: false,

    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
                ],
            },
        ];
    },

    trailingSlash: false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.freepik.com",
            },
            {
                protocol: "https",
                hostname: "media.shipster.se",
            },
        ],
    },

    webpack(config: Configuration) {
        config.resolve = {
            ...config.resolve,
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        };
        return config;
    },

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;