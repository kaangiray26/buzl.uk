import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "feed";
import { defineConfig, createContentLoader, type SiteConfig } from "vitepress";

const hostname: string = "www.buzl.uk";

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
    buildEnd: async (config: SiteConfig) => {
        const feed = new Feed({
            title: "buzl.uk",
            description: "My personal website",
            id: hostname,
            link: hostname,
            language: "en",
            favicon: `${hostname}/favicon.svg`,
            copyright: "Copyright © 2025 Kaan Giray Buzluk",
        });

        // You might need to adjust this if your Markdown files
        // are located in a subfolder
        const posts = await createContentLoader("./posts/*.md").load();

        posts.sort(
            (a, b) =>
                +new Date(b.frontmatter.date as string) -
                +new Date(a.frontmatter.date as string),
        );

        for (const { url, excerpt, frontmatter, html } of posts) {
            feed.addItem({
                title: frontmatter.title,
                id: `${hostname}${url}`,
                link: `${hostname}${url}`,
                author: [
                    {
                        name: "Kaan Giray Buzluk",
                        email: "hey@buzl.uk",
                        link: "https://buzl.uk",
                    },
                ],
                date: frontmatter.date,
            });
        }

        writeFileSync(path.join(config.outDir, "feed.rss"), feed.rss2());
    },
});
