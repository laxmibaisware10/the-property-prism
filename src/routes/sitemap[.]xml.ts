import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/buy", "/rent", "/commercial", "/new-projects", "/plots",
          "/home-loans", "/nri", "/insights", "/builders", "/channel-partners",
          "/post-property", "/about", "/contact",
        ];
        const propertyIds = [
          "azure-penthouse-worli","casa-olea-assagao","skyline-residence-gurgaon",
          "amrita-bungalow-lutyens","heritage-manor-sadashivanagar","thalassa-estate-alibaug",
        ];
        const all = [...paths, ...propertyIds.map(id => `/property/${id}`)];
        const urls = all.map(p => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
