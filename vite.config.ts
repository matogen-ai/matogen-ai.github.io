import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src", "partials"),
    }) as any,
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        contactUs: resolve(root, "contact-us", "index.html"),
        altair: resolve(root, "partners/altair", "index.html"),
        praexia: resolve(root, "partners/praexia", "index.html"),
        databricks: resolve(root, "partners/databricks", "index.html"),
        insights: resolve(root, "insights", "index.html"),
        emailDisclaimers: resolve(root, "email-disclaimers", "index.html"),
        termsOfService: resolve(root, "terms-of-service", "index.html"),
        agritech: resolve(root, "industries/agritech", "index.html"),
        fintech: resolve(root, "industries/fintech", "index.html"),
        healthcare: resolve(root, "industries/healthcare", "index.html"),
      },
    },
  },
});
