import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 5173,
        host: '127.0.0.1',
        strictPort: true,
        open: false
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                vision: 'nuclear-vision-x.html',
                band: 'nuclearband-x.html',
                blog1: 'blog-1.html',
                privacy: 'privacy.html',
                terms: 'terms.html'
            }
        }
    },
    preview: {
        port: 5173,
        host: '127.0.0.1',
        strictPort: true,
        open: false
    }
})
