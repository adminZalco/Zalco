import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL, PAGE_META } from './src/pageMeta.js';

/*
 * GitHub Pages only serves real files. Without this, opening /about or /services
 * directly (or refreshing) returns a 404. After the build we write:
 *   dist/<route>/index.html  - a copy of the app with that page's title/description/canonical
 *   dist/404.html            - SPA fallback for any other URL
 */
function staticRoutePages() {
    let outDir;
    return {
        name: 'zalco-static-route-pages',
        apply: 'build',
        configResolved(config) {
            outDir = path.resolve(config.root, config.build.outDir);
        },
        closeBundle() {
            const indexPath = path.join(outDir, 'index.html');
            const base = fs.readFileSync(indexPath, 'utf-8');

            const withMeta = (html, route, meta) => {
                const url = `${SITE_URL}${route}`;
                const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
                return html
                    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
                    .replace(/(<meta name="title" content=")[^"]*/, `$1${esc(meta.title)}`)
                    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(meta.title)}`)
                    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(meta.title)}`)
                    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(meta.description)}`)
                    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(meta.description)}`)
                    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(meta.description)}`)
                    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
                    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
            };

            for (const [route, meta] of Object.entries(PAGE_META)) {
                if (route === '/') continue;
                const dir = path.join(outDir, route);
                fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(path.join(dir, 'index.html'), withMeta(base, `${route}/`, meta));
            }

            fs.writeFileSync(path.join(outDir, '404.html'), base);
        },
    };
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), staticRoutePages()],
    base: '/',
});
