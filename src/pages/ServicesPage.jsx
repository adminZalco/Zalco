import React, { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

/* ─── Fade In on Scroll ─── */
function FadeSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.12 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={`fade-section ${visible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

/* ─── Cursor SVG ─── */
function CursorArrow({ color }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color} style={{ transform: 'rotate(-25deg)', filter: `drop-shadow(0 4px 12px ${color}88)` }}>
            <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z" />
        </svg>
    );
}

/* ─── Animated Service Visual Panel ─── */
function ServiceVisual({ service }) {
    return (
        <div className="service-visual-panel">
            {/* Background Grid */}
            <div className="service-bg-grid" />

            {/* Central 3D Scene */}
            <div className="service-scene">
                <div className="service-3d-card">
                    {/* Window Bar */}
                    <div className="service-window-bar">
                        <div className="service-traffic-lights">
                            <span className="service-dot service-dot--red" />
                            <span className="service-dot service-dot--yellow" />
                            <span className="service-dot service-dot--green" />
                        </div>
                        <div className="service-bar-spacer" />
                    </div>

                    {/* Service-specific inner content */}
                    <div className="service-card-inner">
                        {service.visual}

                        {/* Floating comment bubble */}
                        <div className="service-comment-bubble">
                            <div className="service-comment-header">
                                <div className="service-avatar-sm">{service.commentAuthor}</div>
                                <span className="service-comment-time">Just now</span>
                            </div>
                            <p className="service-comment-text">{service.comment}</p>
                            <div className="service-comment-arrow" />
                        </div>
                    </div>
                </div>

                {/* Cursor 1 — Purple / Sarah */}
                <div className="service-cursor service-cursor--1">
                    <CursorArrow color="#a855f7" />
                    <span className="service-cursor-label service-cursor-label--purple">Sarah</span>
                </div>

                {/* Cursor 2 — Green / John */}
                <div className="service-cursor service-cursor--2">
                    <CursorArrow color="#22c55e" />
                    <span className="service-cursor-label service-cursor-label--green">John</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Service Data ─── */
const services = [
    {
        title: 'Web Design',
        subtitle: 'Landing Pages & Marketing Sites',
        description: 'High-converting, pixel-perfect websites built to impress from the first scroll. We handle everything from wireframes to production.',
        capabilities: ['Landing page design', 'Responsive layouts', 'Conversion optimisation', 'Webflow / Framer builds'],
        comment: 'Can we add a hero gradient here?',
        commentAuthor: 'JD',
        visual: (
            <div className="service-inner-web-design">
                <div className="service-wd-hero" />
                <div className="service-wd-row">
                    <div className="service-wd-block service-wd-block--purple" />
                    <div className="service-wd-block service-wd-block--blue" />
                    <div className="service-wd-block service-wd-block--purple" />
                </div>
                <div className="service-wd-footer" />
            </div>
        ),
    },
    {
        title: 'UI/UX Design',
        subtitle: 'Research, Strategy & Prototyping',
        description: 'We turn complex workflows into intuitive experiences. From user research to interactive Figma prototypes, we validate before we build.',
        capabilities: ['User research & personas', 'Information architecture', 'Interactive prototypes', 'Design systems'],
        comment: 'This flow feels off — try grouping these actions.',
        commentAuthor: 'SA',
        visual: (
            <div className="service-inner-ux">
                <div className="service-ux-screen service-ux-screen--login">
                    <div className="service-ux-line service-ux-line--short" />
                    <div className="service-ux-input" />
                    <div className="service-ux-input" />
                    <div className="service-ux-btn" />
                </div>
                <div className="service-ux-arrow">→</div>
                <div className="service-ux-screen service-ux-screen--dashboard">
                    <div className="service-ux-mini-grid">
                        <div className="service-ux-cell" /><div className="service-ux-cell" />
                        <div className="service-ux-cell" /><div className="service-ux-cell" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Web App Development',
        subtitle: 'Full-Stack Engineering',
        description: 'Scalable, performant web applications built with modern frameworks. We ship clean, maintainable code that your team can grow with.',
        capabilities: ['React / Next.js frontends', 'Node.js / Python APIs', 'Database architecture', 'Third-party integrations'],
        comment: 'API response time looks 🔥 — ship it.',
        commentAuthor: 'MK',
        visual: (
            <div className="service-inner-code">
                <div className="service-code-line"><span className="service-tok-purple">const</span> <span className="service-tok-blue">fetch</span> <span className="service-tok-white">= async</span> <span className="service-tok-white">(id) =&gt;</span> {'{'}</div>
                <div className="service-code-line service-code-line--indent"><span className="service-tok-purple">const</span> <span className="service-tok-white">res</span> = <span className="service-tok-blue">await</span> <span className="service-tok-white">api.</span><span className="service-tok-green">get</span><span className="service-tok-white">(id);</span></div>
                <div className="service-code-line service-code-line--indent"><span className="service-tok-purple">return</span> <span className="service-tok-white">res.</span><span className="service-tok-blue">data</span><span className="service-tok-white">;</span></div>
                <div className="service-code-line">{'}'}</div>
                <div className="service-code-cursor" />
            </div>
        ),
    },
    {
        title: 'Mobile App Development',
        subtitle: 'iOS & Android',
        description: 'Cross-platform mobile apps that feel native. We build with React Native so you ship to both stores without doubling your budget.',
        capabilities: ['React Native apps', 'iOS & Android deployment', 'Push notifications', 'Offline-first architecture'],
        comment: 'Ready to push to TestFlight?',
        commentAuthor: 'PK',
        visual: (
            <div className="service-inner-mobile">
                <div className="service-phone">
                    <div className="service-phone-notch" />
                    <div className="service-phone-screen">
                        <div className="service-app-header" />
                        <div className="service-app-card" />
                        <div className="service-app-card service-app-card--sm" />
                        <div className="service-app-card service-app-card--sm" />
                    </div>
                    <div className="service-phone-nav">
                        <div className="service-nav-dot service-nav-dot--active" />
                        <div className="service-nav-dot" />
                        <div className="service-nav-dot" />
                        <div className="service-nav-dot" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Mobile App Design',
        subtitle: 'Product Design for Mobile',
        description: 'Thumb-friendly interfaces that delight users and drive retention. Every tap, swipe, and transition is considered.',
        capabilities: ['iOS & Android design', 'Gesture interactions', 'Accessibility compliance', 'App Store assets'],
        comment: 'Nav feels cramped on small screens — let\'s space it out.',
        commentAuthor: 'RP',
        visual: (
            <div className="service-inner-mobile-design">
                <div className="service-phone service-phone--sm">
                    <div className="service-phone-notch" />
                    <div className="service-phone-screen">
                        <div className="service-md-swatches">
                            <div className="service-swatch service-swatch--purple" />
                            <div className="service-swatch service-swatch--blue" />
                            <div className="service-swatch service-swatch--green" />
                        </div>
                        <div className="service-md-component" />
                        <div className="service-md-component service-md-component--sm" />
                    </div>
                </div>
                <div className="service-phone service-phone--sm service-phone--offset">
                    <div className="service-phone-notch" />
                    <div className="service-phone-screen">
                        <div className="service-md-grid">
                            <div className="service-md-grid-cell" /><div className="service-md-grid-cell" />
                            <div className="service-md-grid-cell" /><div className="service-md-grid-cell" />
                        </div>
                        <div className="service-md-btn" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'DevOps & Cloud',
        subtitle: 'Infrastructure at Startup Speed',
        description: 'CI/CD pipelines, containerised deployments, and cloud infrastructure that scales effortlessly. We make ops invisible so you can focus on product.',
        capabilities: ['AWS / GCP infrastructure', 'Docker & Kubernetes', 'CI/CD pipelines', 'Monitoring & alerting'],
        comment: 'All checks passed — deploying to prod.',
        commentAuthor: 'AN',
        visual: (
            <div className="service-inner-devops">
                <div className="service-pipeline">
                    <div className="service-pipeline-node service-pipeline-node--done">Build</div>
                    <div className="service-pipeline-line service-pipeline-line--done" />
                    <div className="service-pipeline-node service-pipeline-node--done">Test</div>
                    <div className="service-pipeline-line service-pipeline-line--active" />
                    <div className="service-pipeline-node service-pipeline-node--active">Deploy</div>
                </div>
                <div className="service-metrics">
                    <div className="service-metric">
                        <span className="service-metric-label">Uptime</span>
                        <span className="service-metric-value service-metric-value--green">99.9%</span>
                    </div>
                    <div className="service-metric">
                        <span className="service-metric-label">Latency</span>
                        <span className="service-metric-value service-metric-value--blue">42ms</span>
                    </div>
                    <div className="service-metric">
                        <span className="service-metric-label">Errors</span>
                        <span className="service-metric-value service-metric-value--purple">0.01%</span>
                    </div>
                </div>
            </div>
        ),
    },
];

const techStack = [
    { icon: 'logos:figma', label: 'Figma' },
    { icon: 'logos:webflow', label: 'Webflow' },
    { icon: 'logos:framer', label: 'Framer', invert: true },
    { icon: 'logos:react', label: 'React' },
    { icon: 'logos:nextjs-icon', label: 'Next.js' },
    { icon: 'logos:nodejs-icon', label: 'Node.js' },
    { icon: 'logos:typescript-icon', label: 'TypeScript' },
    { icon: 'logos:python', label: 'Python' },
    { icon: 'logos:aws', label: 'AWS' },
    { icon: 'logos:google-cloud', label: 'GCP' },
    { icon: 'logos:docker-icon', label: 'Docker' },
    { icon: 'logos:kubernetes', label: 'Kubernetes' },
    { icon: 'logos:terraform-icon', label: 'Terraform' },
    { icon: 'logos:openai-icon', label: 'OpenAI', invert: true },
];

const processSteps = [
    {
        number: '01',
        icon: 'solar:telescope-bold-duotone',
        title: 'Discover',
        description: 'We start with a deep dive into your business goals, users, and competitive landscape. No assumptions — just clarity.',
    },
    {
        number: '02',
        icon: 'solar:pen-bold-duotone',
        title: 'Design',
        description: 'Wireframes to high-fidelity prototypes, iterated fast with your feedback. Every pixel earns its place.',
    },
    {
        number: '03',
        icon: 'solar:rocket-bold-duotone',
        title: 'Deploy',
        description: 'Production-ready code pushed to a scalable cloud environment with automated deployments and real-time monitoring.',
    },
];

export default function ServicesPage() {
    return (
        <main className="services-root">

            {/* ─── Hero ─── */}
            <section className="services-hero section-padding">
                {/* <div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
                    <iframe src="https://my.spline.design/bganimation-xIKR0ZTWWoifZLAKROH7y9YL" frameBorder="0" width="100%" height="100%" id="aura-spline"></iframe>
                </div> */}
                <div className="services-hero-glow" />
                <div className="container services-hero-inner">
                    <FadeSection delay={160}>
                        <h1 className="services-hero-heading">
                            End-to-end digital<br />
                            <span className="services-hero-accent">product delivery</span>
                        </h1>
                    </FadeSection>
                    <FadeSection delay={240}>
                        <p className="services-hero-sub">
                            From the first design sketch to a live, monitored deployment — we cover the full stack so your team doesn't have to.
                        </p>
                    </FadeSection>
                    <FadeSection delay={320}>
                        <div className="hero-actions" style={{ marginTop: 0 }}>
                            <button
                                className="brutalist-button brutalist-button--dark"
                                onClick={() => window.open('https://cal.com/zalco/15min', '_blank')}
                            >
                                Book a Discovery Call
                            </button>
                            <a href="#service-cards" className="text-link">
                                Explore services <Icon icon="solar:arrow-down-bold-duotone" />
                            </a>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Service Feature Rows ─── */}
            <section id="service-cards" className="services-features-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="section-header">
                            <h2>Everything your product needs<br /><span className="text-gray-400 font-normal">under one roof.</span></h2>
                            <p className="section-description" style={{ marginTop: '16px', fontSize: 'var(--text-step-1)', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                                We don't just design interfaces or write code in isolation. We deliver complete vertical slices of your product, engineered for scale and designed for conversion.
                            </p>
                        </div>
                    </FadeSection>

                    <div className="service-feature-list">
                        {services.map((service, index) => (
                            <FadeSection key={service.title} delay={80}>
                                <div className={`service-feature-row ${index % 2 === 1 ? 'service-feature-row--reversed' : ''}`}>
                                    {/* Visual Panel */}
                                    <ServiceVisual service={service} />

                                    {/* Text Panel */}
                                    <div className="service-text-panel">
                                        <p className="service-text-eyebrow">{service.subtitle}</p>
                                        <h3 className="service-text-title">{service.title}</h3>
                                        <p className="service-text-desc">{service.description}</p>
                                        <ul className="service-text-list">
                                            {service.capabilities.map(cap => (
                                                <li key={cap}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-check-svg">
                                                        <path d="M20 6 9 17l-5-5" />
                                                    </svg>
                                                    {cap}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Tech Stack ─── */}
            <section className="services-tech-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="section-header section-header--center">
                            <h2>The stack behind<br /><span className="text-gray-400 font-normal">every delivery.</span></h2>
                        </div>
                    </FadeSection>
                    <FadeSection delay={120}>
                        <div className="services-tech-grid">
                            {techStack.map(({ icon, label, invert }) => (
                                <div key={label} className="services-tech-item">
                                    <div className="tech-icon-wrapper">
                                        <Icon icon={icon} className={invert ? 'invert-on-dark' : ''} />
                                    </div>
                                    <span className="services-tech-label">{label}</span>
                                </div>
                            ))}
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Process ─── */}
            <section className="services-process-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="section-header">
                            <h2>Simple process.<br /><span className="text-gray-400 font-normal">Zero ambiguity.</span></h2>
                            <p className="section-description" style={{ marginTop: '16px', fontSize: 'var(--text-step-1)', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                                A brutally efficient, transparent workflow designed to take you from idea to production-ready deployment without the typical agency bloat.
                            </p>
                        </div>
                    </FadeSection>
                    <div className="process-steps">
                        {processSteps.map((step, i) => (
                            <FadeSection key={step.number} delay={i * 100}>
                                <div className="services-process-step">
                                    <div className="services-step-number">{step.number}</div>
                                    <div className="services-step-icon">
                                        <Icon icon={step.icon} />
                                    </div>
                                    <h3 className="services-step-title">{step.title}</h3>
                                    <p className="services-step-desc">{step.description}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
