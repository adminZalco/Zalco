// Single source of truth for per-page SEO.
// Used by vite.config.js (static HTML per route) and by usePageMeta (client-side navigation).
export const SITE_URL = 'https://www.zalco.io';

export const PAGE_META = {
    '/': {
        title: 'Zalco Technologies | Web, Mobile App & DevOps Development Studio',
        description:
            'Zalco Technologies is a Lucknow-based software studio designing and building websites, web apps, mobile apps and cloud infrastructure for startups and growing businesses.',
    },
    '/services': {
        title: 'Services | UI/UX, Web & Mobile Apps, DevOps | Zalco Technologies',
        description:
            'Web design, mobile and web app design, full-stack web app development, iOS and Android apps, and DevOps and cloud services from Zalco Technologies.',
    },
    '/about': {
        title: 'About Us | Zalco Technologies, Lucknow',
        description:
            'Meet Zalco Technologies: a team of designers, developers and DevOps engineers in Lucknow, India, building digital products since 2022.',
    },
};
