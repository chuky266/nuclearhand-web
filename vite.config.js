import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                tecnologia: 'tecnologia.html',
                manifiesto: 'manifiesto.html',
                investor: 'investor-access.html',
                vision: 'nuclear-vision-x.html',
                band: 'nuclearband-x.html',
                blog: 'blog.html',
                blog1: 'blog-1.html',
                privacy: 'privacy.html',
                terms: 'terms.html'
            }
        }
    }
})
