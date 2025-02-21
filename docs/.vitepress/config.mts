import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "buzl.uk",
    description: "My personal website",
    head: [["link", { rel: "icon", href: "/favicon.svg" }]],
    themeConfig: {
        logo: "/favicon.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "/blog" },
            { text: "Gallery", link: "/gallery" },
            { text: "Now", link: "/now" },
            { text: "Links", link: "/links" },
        ],
        sidebar: [
            {
                text: "Posts",
                items: [],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/kaangiray26" },
        ],
        footer: {
            message:
                'Licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0 License</a>.',
            copyright: "Copyright © 2025 Kaan Giray Buzluk",
        },
        search: {
            provider: "local",
        },
    },
});
