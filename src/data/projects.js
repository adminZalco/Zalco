/*
 * Real client projects delivered by Zalco Technologies.
 * Used by the home page (WorkSection), the "Trusted by" strip (LogoCloud) and the Work page.
 * Only add facts the client is comfortable having public.
 */
export const projects = [
    {
        slug: 'triply',
        client: 'Triply',
        by: 'Flix Logix',
        industry: 'Mobility',
        icon: 'solar:bus-bold-duotone',
        title: 'Office cab platform',
        description:
            'A complete application for Triply to run office commutes: employees book their rides and the operations team manages trips from a single platform.',
        highlights: [
            'Cab booking for employee office commutes',
            'Trip management for the operations team',
            'Designed and built end to end by Zalco',
        ],
        tags: ['End-to-end product', 'UI/UX', 'Web & mobile'],
    },
    {
        slug: 'barosa',
        client: 'Barosa',
        industry: 'E-commerce',
        icon: 'solar:watch-round-bold-duotone',
        title: 'Authentic watch & antiques store',
        description:
            'An online reselling platform for authentic watches and antique items, built to showcase premium pieces and make buying them simple and trustworthy.',
        highlights: [
            'Catalogue of authentic watches and antique items',
            'Product pages designed to showcase premium pieces',
            'Simple, trustworthy buying experience',
        ],
        tags: ['E-commerce', 'UI/UX', 'Web app'],
    },
    {
        slug: 'sk-engineers',
        client: 'SK Engineers',
        industry: 'Construction',
        icon: 'solar:buildings-2-bold-duotone',
        title: 'Construction management app',
        description:
            'An operations platform for a construction company to record site purchases, manage master data and control access by role, in English and Hindi.',
        highlights: [
            'Purchase recording across construction sites',
            'Master data for sites and operations',
            'Role-based access and secure sign-in',
            'Mobile app plus web dashboard, in English and Hindi',
        ],
        tags: ['Mobile app', 'Web dashboard', 'React Native', 'Spring Boot', 'PostgreSQL'],
    },
    {
        slug: 'ink-and-clink',
        client: 'Ink & Clink',
        industry: 'Gifting',
        icon: 'solar:gift-bold-duotone',
        title: 'Hamper business management',
        description:
            'A management app for a hamper gifting company, including GST-ready invoicing with a live A4 preview, PDF download, invoice history and a sales dashboard.',
        highlights: [
            'GST-ready invoices (CGST + SGST) with a live A4 preview',
            'One-click PDF download',
            'Invoice history and sales dashboard',
        ],
        tags: ['Web app', 'Next.js', 'Supabase', 'PDF invoicing'],
    },
];
