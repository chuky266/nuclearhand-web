import { defineConfig } from 'vite'

export default defineConfig({
    base: '/nh5/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                vision: 'nuclear-vision-x.html',
                band: 'nuclearband-x.html',
                blog: 'blog.html',
                canon: 'CanonGillBlog.html',
                blog1: 'blog-1.html',
                privacy: 'privacy.html',
                terms: 'terms.html'
            }
        }
    }
})
