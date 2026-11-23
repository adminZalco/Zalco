import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import RippleGrid from '../components/RippleGrid';
import FadeSection from '../components/FadeSection';
import { projects } from '../data/projects';
import '../index.css';

export default function WorkPage() {
    return (
        <main id="main-content" className="services-root">
            {/* ─── Hero ─── */}
            <section className="services-hero section-padding">
                <RippleGrid />
                <div className="services-hero-glow" />
                <div className="container services-hero-inner">
                    <FadeSection delay={160}>
                        <h1 className="services-hero-heading">
                            Selected work for<br />
                            <span className="services-hero-accent">real businesses</span>
                        </h1>
                    </FadeSection>
                    <FadeSection delay={240}>
                        <p className="services-hero-sub">
                            From office mobility to construction and gifting, here are some of the products we have designed and built for our clients.
                        </p>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Projects ─── */}
            <section className="work-page-section section-padding">
                <div className="container work-page-list">
                    {projects.map((p, i) => (
                        <FadeSection key={p.slug} delay={60}>
                            <article id={p.slug} className={`work-row ${i % 2 === 1 ? 'work-row--reversed' : ''}`}>
                                <div className="work-row__visual" aria-hidden="true">
                                    <Icon icon={p.icon} className="work-row__visual-icon" />
                                    <span className="work-row__visual-name">{p.client}</span>
                                </div>

                                <div className="work-row__text">
                                    <div className="work-row__meta">
                                        <span className="work-card__industry">{p.industry}</span>
                                        <span className="work-row__client">
                                            {p.client}
                                            {p.by && <span className="work-card__by"> · {p.by}</span>}
                                        </span>
                                    </div>
                                    <h2 className="work-row__title">{p.title}</h2>
                                    <p className="work-row__desc">{p.description}</p>

                                    <h3 className="work-row__subhead">What we built</h3>
                                    <ul className="service-text-list work-row__list">
                                        {p.highlights.map((h) => (
                                            <li key={h}>
                                                <Icon icon="solar:check-circle-bold-duotone" aria-hidden="true" /> {h}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="work-card__tags" aria-label="Services and technology">
                                        {p.tags.map((t) => <li key={t}>{t}</li>)}
                                    </ul>
                                </div>
                            </article>
                        </FadeSection>
                    ))}
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="services-cta-section">
                <div className="container services-cta-inner">
                    <h2 className="services-cta-heading">Have a project in mind?</h2>
                    <p className="services-cta-sub">Tell us what you are building. We will help you scope it and pick the right plan.</p>
                    <div className="hero-actions" style={{ marginTop: 'var(--space-4)' }}>
                        <button
                            className="brutalist-button brutalist-button--accent"
                            onClick={() => window.open('https://cal.com/zalco/15min', '_blank', 'noopener')}
                        >
                            Book a Discovery Call
                        </button>
                        <Link to="/contact" className="brutalist-button brutalist-button--white">Contact us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
