import { resolve } from 'path';
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  root,
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