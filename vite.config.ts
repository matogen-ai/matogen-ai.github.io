import { resolve } from 'path';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname,'src', 'partials'),
    }) as any,
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        socialResponsibility: resolve(root, 'social-responsibility', 'index.html'),
        emailDisclaimers: resolve(root, 'email-disclaimers', 'index.html'),
        termsOfService: resolve(root, 'terms-of-service', 'index.html')
      }
    }
  }
})