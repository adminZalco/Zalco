import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../index.css';

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

                <div className="work-more">
                    <Link to="/work" className="text-link">
                        See all projects <Icon icon="solar:arrow-right-up-bold-duotone" />
                    </Link>
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
