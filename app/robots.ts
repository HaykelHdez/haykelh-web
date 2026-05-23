import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Todos los bots permitidos
      { userAgent: "*", allow: "/" },
      // Crawlers de IA — explícitamente permitidos
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "Cohere-AI", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://haykelh.com/sitemap.xml",
    host: "https://haykelh.com",
  };
}
