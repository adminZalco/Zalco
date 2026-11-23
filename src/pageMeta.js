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
    '/work': {
        title: 'Our Work | Client Projects | Zalco Technologies',
        description:
            'Projects by Zalco Technologies: an office cab platform for Triply, a watch and antiques store for Barosa, a construction management app for SK Engineers and a hamper business app for Ink & Clink.',
    },
    '/contact': {
        title: 'Contact | Zalco Technologies, Lucknow',
        description:
            'Contact Zalco Technologies: book a free discovery call, message us on WhatsApp, email admin@zalco.io or call +91 90444 99810.',
    },
    '/about': {
        title: 'About Us | Zalco Technologies, Lucknow',
        description:
            'Meet Zalco Technologies: a team of designers, developers and DevOps engineers in Lucknow, India, building digital products since 2022.',
    },
};
