# Zalco Technologies website

Source for [www.zalco.io](https://www.zalco.io), the website of Zalco Technologies Private Limited (CIN U72900UP2022PTC175108), Lucknow.

Built with React 18, React Router and Vite. Hosted on GitHub Pages from the `gh-pages` branch.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and preview

```bash
npm run build      # outputs to dist/ (not committed)
npm run preview
```

The build also writes `dist/about/index.html`, `dist/services/index.html` and `dist/404.html` (see `vite.config.js`), so pages work when opened directly or refreshed on GitHub Pages. Page titles and descriptions live in `src/pageMeta.js`.

## Deploy

```bash
npm run deploy     # builds, then publishes dist/ to the gh-pages branch
```

The custom domain comes from `public/CNAME` (`www.zalco.io`). Keep that file.

## Where things are

| What | File |
|---|---|
| Header, footer, home page layout, contact details | `src/App.jsx` |
| Pricing plans | `src/components/PricingSection.jsx` |
| Client projects and testimonials | `src/components/WorkSection.jsx` |
| About page and team | `src/pages/AboutPage.jsx` |
| Services page | `src/pages/ServicesPage.jsx` |
| Page titles and descriptions (SEO) | `src/pageMeta.js` |
| Link preview image, robots.txt, sitemap.xml | `public/` |
