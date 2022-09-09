import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	site: "https://sam.devpage.me/",
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
		sitemap(),
	],
});
