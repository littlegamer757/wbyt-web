// const { join } = require("path");
// const withImages = require("next-images");
// const withPlugins = require("next-compose-plugins");

// const nextConfig = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: "@svgr/webpack",
//         });
//         return config;
//     },
//     reactStrictMode: true,
//     plugins: {
//         tailwindcss: {
//             config: join(__dirname, "tailwind.config.js"),
//         },
//         autoprefixer: {},
//     },
//     images: {
//         domains: ["*"],
//         unoptimized: true,
//         formats: ["image/avif", "image/webp"],
//     },
// };

// // module.exports = withPlugins([withImages], nextConfig);

// module.exports = withCSS(
//     withSass(
//         withImages({
//             webpack(config, options) {
//                 return config;
//             },
//         })
//     )
// );

const { join } = require("path");

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: "@svgr/webpack",
        });
        return config;
    },
};

module.exports = {
    ...nextConfig,
    plugins: {
        tailwindcss: {
            config: join(__dirname, "tailwind.config.js"),
        },
        autoprefixer: {},
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: "secret",
        secondSecret: process.env.SUPABASE_KEY, // Pass through env variables
    },
    env: {
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },

    images: {
        loader: "akamai",
        path: "",
        domains: [
            "images.unsplash.com",
            "images.obi.at",
            "imgur.com",
            "avatars.githubusercontent.com",
            "ca.slack-edge.com",
        ],
    },
};
