import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        tagline: 'For landing pages, MVPs and steady feature work.',
        price: '$999',
        priceInr: '₹79,999',
        features: [
            'UI/UX design',
            'Website or web app development',
            'Bug fixes & small features',
            'Weekly progress updates',
            'Email & WhatsApp support',
        ],
        cta: 'Get started',
        link: 'https://cal.com/zalco/30min',
    },
    {
        id: 'growth',
        name: 'Growth',
        badge: 'Most popular for startups',
        tagline: 'A dedicated product team for growing businesses.',
        price: '$2,499',
        priceInr: '₹1,99,999',
        features: [
            'Everything in Starter',
            'Frontend & backend development',
            'Mobile apps (iOS & Android)',
            'DevOps & cloud setup',
            'Dedicated Slack channel',
            'Priority turnaround',
        ],
        cta: 'Get started',
        link: 'https://cal.com/zalco/30min',
        featured: true,
    },
    {
        id: 'custom',
        name: 'Custom',
        tagline: 'For larger products and fixed-scope builds.',
        price: "Let's talk",
        features: [
            'Custom quote for your scope',
            'Fixed-price or monthly options',
            'Milestone-based payments',
            'Dedicated project manager',
        ],
        cta: 'Get a quote',
        link: 'https://cal.com/zalco/30min',
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="pricing-section-wrapper">
            <div className="section-padding container">
                <div className="pricing-header">
                    <div>
                        <h2>
                            <span className="text-gray-400 font-normal">Simple pricing.</span><br />
                            Standout designs.
                        </h2>
                    </div>
                    <div className="pricing-description">
                        <p className="font-semibold text-primary">Clear costs. High impact.</p>
                        <p>Start with a monthly plan, or talk to us about a custom project. Billed monthly.</p>
                    </div>
                </div>

                <div className="pricing-tiers">
                    {plans.map((plan) => (
                        <article
                            key={plan.id}
                            className={`pricing-tier pricing-tier--${plan.id}${plan.featured ? ' pricing-tier--featured' : ''}`}
                            aria-labelledby={`plan-${plan.id}`}
                        >
                            <div className="pricing-tier__head">
                                <h3 id={`plan-${plan.id}`} className="pricing-tier__name">{plan.name}</h3>
                                {plan.badge && <span className="subscription-badge pricing-tier__badge">{plan.badge}</span>}
                            </div>
                            <p className="pricing-tier__tagline">{plan.tagline}</p>

                            <div className="pricing-tier__price">
                                {plan.priceInr ? (
                                    <>
                                        <p className="price-block">
                                            <span className="price">{plan.price}</span>
                                            <span className="period">/ month</span>
                                        </p>
                                        <p className="pricing-tier__inr">{plan.priceInr} / month in India</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="price-block">
                                            <span className="price price--text">{plan.price}</span>
                                        </p>
                                        <p className="pricing-tier__inr">Scoped to your project</p>
                                    </>
                                )}
                            </div>

                            <hr className="pricing-divider" />

                            <ul className="pricing-tier__list">
                                {plan.features.map((f) => (
                                    <li key={f}>
                                        <Icon icon="solar:check-circle-bold-duotone" aria-hidden="true" /> {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`brutalist-button ${plan.id === 'starter' ? 'brutalist-button--dark' : plan.featured ? 'brutalist-button--accent' : 'brutalist-button--white'} pricing-tier__cta`}
                                onClick={() => window.open(plan.link, '_blank', 'noopener')}
                            >
                                {plan.cta}
                            </button>
                        </article>
                    ))}
                </div>

                <p className="pricing-footnote">
                    Not sure which plan fits? <a href="https://cal.com/zalco/15min" target="_blank" rel="noopener noreferrer">Book a free 15-minute call</a>.
                </p>
            </div>
        </section>
    );
}
