import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import RippleGrid from './components/RippleGrid';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingSection from './components/PricingSection';
import LogoCloud from './components/LogoCloud';
import WorkSection from './components/WorkSection';
import FAQSection from './components/FAQSection';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import { SITE_URL, PAGE_META } from './pageMeta';
import './index.css';

import ZalcoLogo from './assets/logos/ZalcoLogo.svg';
import ZalcoIcon from './assets/logos/ZalcoIcon.svg';


/* ─── Fade In on Scroll ─── */
function FadeSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
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


/* ─── Route effects: scroll to top + per-page title/description/canonical ─── */
const LINKEDIN_URL = 'https://www.linkedin.com/company/zalco-technologies';
const CONTACT_EMAIL = 'admin@zalco.io';
const CONTACT_PHONE_DISPLAY = '+91 841 784 2117';
const CONTACT_PHONE_TEL = '+918417842117';

function RouteEffects() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname, hash]);

    useEffect(() => {
        const key = pathname.replace(/\/+$/, '') || '/';
        const meta = PAGE_META[key] || PAGE_META['/'];
        const url = `${SITE_URL}${key === '/' ? '/' : `${key}/`}`;
        document.title = meta.title;
        const set = (selector, attr, value) => {
            const el = document.head.querySelector(selector);
            if (el) el.setAttribute(attr, value);
        };
        set('meta[name="description"]', 'content', meta.description);
        set('link[rel="canonical"]', 'href', url);
        set('meta[property="og:url"]', 'content', url);
        set('meta[property="og:title"]', 'content', meta.title);
        set('meta[property="og:description"]', 'content', meta.description);
    }, [pathname]);

    return null;
}

/* ─── Highlight Pill Component ─── */
function HighlightPill({ children, color = 'blue' }) {
    return <span className={`text-highlight text-highlight-${color}`}>{children}</span>;
}

/* ─── Main App ─── */
function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        // 1. Check local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // 2. Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        // 3. Default to light
        return 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        // Listen for system theme changes if user hasn't overridden
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const marqueeItems = [
        '✦ Web Design', '✦ Web App Development', '✦ Mobile App Design', '✦ Mobile App Development', '✦ DevOps Services',
        '✦ Web Design', '✦ Web App Development', '✦ Mobile App Design', '✦ Mobile App Development', '✦ DevOps Services',
    ];
    return (
        <>
            <RouteEffects />

            {/* ─── Header ─── */}
            <header role="banner" className={`global-header ${mobileMenuOpen ? 'menu-open' : ''}`}>
                <div className="container header-inner">
                    <Link to="/" className="header-logo">
                        <img src={ZalcoLogo} alt="Zalco" style={{ height: '3rem', width: 'auto' }} />
                        <span className="logo-text">Zalco</span>
                    </Link>

                    {/* Hamburger — visible only on mobile via CSS */}
                    <button
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'is-active' : ''}`}
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="bar bar-1" />
                        <span className="bar bar-2" />
                    </button>

                    <div className={`nav-wrapper ${mobileMenuOpen ? 'is-open' : ''}`}>
                        <nav aria-label="Primary Navigation" className="primary-nav">
                            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                                <span className="nav-number">01</span> Services
                            </Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                                <span className="nav-number">02</span> About
                            </Link>
                        </nav>
                        <div className="header-actions">
                            <button className="brutalist-button brutalist-button--dark header-contact-btn" onClick={() => window.open('https://cal.com/zalco/15min', '_blank')}>Contact</button>
                        </div>
                        <div className="nav-footer">
                            <div className="bento-social-icons">
                                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Zalco Technologies on LinkedIn"><Icon icon="mdi:linkedin" /></a>
                            </div>
                            <p className="nav-copyright">© {new Date().getFullYear()} Zalco Technologies Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={
                    <main id="main-content" role="main">
                        {/* ─── Hero ─── */}
                        <section aria-labelledby="hero-heading" className="hero-section section-padding">
                            <RippleGrid />
                            <div className="container hero-inner hero-inner--centered">
                                <div className="hero-content hero-content--centered">
                                    <FadeSection delay={100}>
                                        <h1 id="hero-heading">
                                            <HighlightPill color="blue">Unfair</HighlightPill> advantage{'\n'}for your product
                                        </h1>
                                    </FadeSection>
                                    <FadeSection delay={200}>
                                        <p className="hero-subtext">
                                            A tight-knit team of designers, developers, and DevOps engineers building powerful digital products for startups and individuals.
                                        </p>
                                    </FadeSection>
                                    <FadeSection delay={300}>
                                        <div className="hero-actions">
                                            <button className="brutalist-button brutalist-button--dark" onClick={() => window.open('https://cal.com/zalco/15min', '_blank')}>Start a Project</button>
                                            <Link to="/services" className="text-link">
                                                Explore Capabilities <Icon icon="solar:arrow-right-up-bold-duotone" />
                                            </Link>
                                        </div>
                                    </FadeSection>
                                </div>
                            </div>
                        </section>

                        {/* ─── Marquee ─── */}
                        <div className="marquee-strip" aria-hidden="true">
                            <div className="marquee-track">
                                {marqueeItems.map((item, i) => (
                                    <span key={i} className="marquee-item">{item}</span>
                                ))}
                            </div>
                        </div>

                        <ServicesSection />
                        <ProcessSection />
                        <WhyChooseUsSection />
                        <PricingSection />
                        <WorkSection />
                        <LogoCloud />
                        <FAQSection />

                    </main>
                } />
            </Routes>

            {/* ─── Footer (unchanged) ─── */}
            <footer role="contentinfo" className="bento-footer">
                <div className="bento-footer-inner">
                    <RippleGrid interactive={false} />
                    <div className="bento-brand">
                        <div className="bento-logo">
                            <div className="logo-icon-wrapper" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
                                <img src={ZalcoIcon} alt="Zalco Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <h2 className="logo-text">Zalco Technologies</h2>
                        </div>
                        <p className='logo-subtext'>Crafting digital experiences from design to deployment for startups and individuals.</p>
                        <button
                            className="theme-switch"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            role="switch"
                            aria-checked={theme === 'dark'}
                        >
                            <span className="icon-wrapper sun-icon">
                                <Icon icon="solar:sun-bold-duotone" />
                            </span>
                            <span className="icon-wrapper moon-icon">
                                <Icon icon="solar:moon-bold-duotone" />
                            </span>
                        </button>
                    </div>
                    <div className="bento-footer-links">
                        <div className="bento-link-col">
                            <h4>Company</h4>
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about">About</Link>
                        </div>
                        <div className="bento-link-col bento-social-col">
                            <h4>Contact</h4>
                            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                            <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
                            <div className="bento-social-icons">
                                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Zalco Technologies on LinkedIn"><Icon icon="mdi:linkedin" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="bento-copyright-pill">
                        © {new Date().getFullYear()} Zalco Technologies Pvt. Ltd.
                    </div>

                    <p className="bento-legal">
                        Zalco Technologies Private Limited · CIN U72900UP2022PTC175108<br />
                        Registered office: 387/54 Kachha Bagh, Sahadatganj, Near Old Chabutra, Lucknow, Uttar Pradesh 226003, India
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
