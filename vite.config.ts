import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',       // Carpeta final
        emptyOutDir: true,    // Limpia antes de build
        sourcemap: false,     // No necesitas .map para producción
    }
})
