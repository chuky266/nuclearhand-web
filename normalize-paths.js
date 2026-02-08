import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

function normalizeDir(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            normalizeDir(filePath);
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
            console.log(`Normalizing: ${filePath}`);
            let content = fs.readFileSync(filePath, 'utf8');

            // Reemplazar assets\ por assets/
            // Y otras variantes comunes de rutas de Windows
            const original = content;
            content = content.replace(/assets\\/g, 'assets/');
            content = content.replace(/images\\/g, 'images/');
            content = content.replace(/js\\/g, 'js/');
            content = content.replace(/css\\/g, 'css/');

            // También normalizar cualquier ruta relativa que empiece con .\
            content = content.replace(/\.\\assets/g, './assets');

            if (content !== original) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`  Fixed paths in ${file}`);
            }
        }
    });
}

console.log('--- STARTING PATH NORMALIZATION ---');
normalizeDir(distDir);
console.log('--- NORMALIZATION COMPLETE ---');
