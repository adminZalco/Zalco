import React from 'react';
import { Icon } from '@iconify/react';
import RippleGrid from '../components/RippleGrid';
import FadeSection from '../components/FadeSection';
import { company, whatsappLink } from '../data/company';
import '../index.css';

const channels = [
    {
        icon: 'solar:calendar-bold-duotone',
        title: 'Book a call',
        text: 'Pick a time for a free 15-minute discovery call.',
        action: 'Choose a time',
        href: company.bookingCall,
        external: true,
        featured: true,
    },
    {
        icon: 'ic:baseline-whatsapp',
        title: 'WhatsApp',
        text: 'Message us with a quick question or your project idea.',
        action: 'Chat on WhatsApp',
        href: whatsappLink,
        external: true,
    },
    {
        icon: 'solar:letter-bold-duotone',
        title: 'Email',
        text: company.email,
        action: 'Send an email',
        href: `mailto:${company.email}`,
    },
    {
        icon: 'solar:phone-bold-duotone',
        title: 'Phone',
        text: company.phoneDisplay,
        action: 'Call us',
        href: `tel:${company.phoneTel}`,
    },
];

export default function ContactPage() {
    return (
        <main id="main-content" className="services-root">
            {/* ─── Hero ─── */}
            <section className="services-hero section-padding">
                <RippleGrid />
                <div className="services-hero-glow" />
                <div className="container services-hero-inner">
                    <FadeSection delay={160}>
                        <h1 className="services-hero-heading">
                            Let's build<br />
                            <span className="services-hero-accent">something together</span>
                        </h1>
                    </FadeSection>
                    <FadeSection delay={240}>
                        <p className="services-hero-sub">
                            Tell us about your product, your timeline and your budget. Reach us whichever way suits you.
                        </p>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Contact channels ─── */}
            <section className="contact-section section-padding">
                <div className="container">
                    <div className="contact-grid">
                        {channels.map((c, i) => (
                            <FadeSection key={c.title} delay={i * 80}>
                                <a
                                    href={c.href}
                                    className={`contact-card ${c.featured ? 'contact-card--featured' : ''}`}
                                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    <span className="contact-card__icon" aria-hidden="true"><Icon icon={c.icon} /></span>
                                    <h2 className="contact-card__title">{c.title}</h2>
                                    <p className="contact-card__text">{c.text}</p>
                                    <span className="contact-card__action">
                                        {c.action} <Icon icon="solar:arrow-right-up-bold-duotone" aria-hidden="true" />
                                    </span>
                                </a>
                            </FadeSection>
                        ))}
                    </div>

                    {/* ─── Company ─── */}
                    <FadeSection delay={120}>
                        <div className="contact-office contact-office--simple">
                            <div className="contact-office__info">
                                <h2 className="contact-office__title">{company.legalName}</h2>
                                <p className="contact-office__address">
                                    We work with startups and businesses in India and abroad, remotely or on site.
                                </p>
                                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
                                    Follow us on LinkedIn <Icon icon="mdi:linkedin" />
                                </a>
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </section>
        </main>
    );
}
