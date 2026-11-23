import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

/*
 * Real client projects delivered by Zalco.
 * Only add facts the client is comfortable having public.
 */
const projects = [
    {
        client: 'Triply',
        by: 'Flix Logix',
        industry: 'Mobility',
        icon: 'solar:bus-bold-duotone',
        title: 'Office cab platform',
        description:
            'A complete application for Triply to run office commutes: employees book their rides and the operations team manages trips from a single platform.',
        tags: ['End-to-end product', 'UI/UX', 'Web & mobile'],
    },
    {
        client: 'Barosa',
        industry: 'E-commerce',
        icon: 'solar:watch-round-bold-duotone',
        title: 'Authentic watch & antiques store',
        description:
            'An online reselling platform for authentic watches and antique items, built to showcase premium pieces and make buying them simple and trustworthy.',
        tags: ['E-commerce', 'UI/UX', 'Web app'],
    },
    {
        client: 'SK Engineers',
        industry: 'Construction',
        icon: 'solar:buildings-2-bold-duotone',
        title: 'Construction management app',
        description:
            'An operations platform for a construction company to record site purchases, manage master data and control access by role, in English and Hindi.',
        tags: ['Mobile app', 'Web dashboard', 'React Native', 'Spring Boot', 'PostgreSQL'],
    },
    {
        client: 'Ink & Clink',
        industry: 'Gifting',
        icon: 'solar:gift-bold-duotone',
        title: 'Hamper business management',
        description:
            'A management app for a hamper gifting company, including GST-ready invoicing with a live A4 preview, PDF download, invoice history and a sales dashboard.',
        tags: ['Web app', 'Next.js', 'Supabase', 'PDF invoicing'],
    },
];

/*
 * Client testimonials. Add ONLY real quotes, with the client's permission:
 * { text: '...', name: 'Full Name', role: 'Role, Company', avatar: '/assets/clients/name.jpg' }
 * The testimonials block stays hidden while this list is empty.
 */
const testimonials = [];

export default function WorkSection() {
    return (
        <section id="work" className="testimonials-section section-padding">
            <div className="testimonials-bg-pattern-container" aria-hidden="true">
                <div className="testimonials-bg-grid-pattern" style={{ '--stage-color-rgb': '168, 85, 247' }} />
                <div className="testimonials-bg-pattern-overlay" />
            </div>

            <div className="container testimonials-inner">
                <h2 className="testimonials-heading mb-12">
                    <span className="text-gray-400 font-normal">Selected work.</span><br />
                    Built for real businesses.
                </h2>

                <div className="work-grid">
                    {projects.map((p) => (
                        <article key={p.client} className="work-card">
                            <div className="work-card__top">
                                <span className="work-card__icon" aria-hidden="true">
                                    <Icon icon={p.icon} />
                                </span>
                                <span className="work-card__industry">{p.industry}</span>
                            </div>
                            <p className="work-card__client">
                                {p.client}
                                {p.by && <span className="work-card__by"> · {p.by}</span>}
                            </p>
                            <h3 className="work-card__title">{p.title}</h3>
                            <p className="work-card__desc">{p.description}</p>
                            <ul className="work-card__tags" aria-label="What we delivered">
                                {p.tags.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {testimonials.length > 0 && (
                    <>
                        <h3 className="testimonials-heading work-quotes-heading">What our clients say</h3>
                        <div className="testimonials-masonry">
                            {testimonials.map((t) => (
                                <figure key={t.name} className="testimonial-card">
                                    <div className="quote-icon" aria-hidden="true">"</div>
                                    <blockquote className="testimonial-text">{t.text}</blockquote>
                                    <figcaption className="testimonial-author">
                                        {t.avatar && <img src={t.avatar} alt="" className="author-avatar" />}
                                        <div className="author-info">
                                            <span className="author-name">{t.name}</span>
                                            <span className="author-handle">{t.role}</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
