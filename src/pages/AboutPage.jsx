import React, { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import RippleGrid from '../components/RippleGrid';
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

const coreValues = [
    {
        number: '01',
        icon: 'solar:target-bold-duotone',
        title: 'Mission Driven',
        description: 'We build products that move the needle. Every pixel and line of code is evaluated against your core objectives - not just aesthetics.'
    },
    {
        number: '02',
        icon: 'solar:bolt-bold-duotone',
        title: 'Relentless Momentum',
        description: 'Speed is a feature. We ship fast and iterate faster, bypassing the bureaucratic bloat that slows down typical agencies.'
    },
    {
        number: '03',
        icon: 'solar:hand-shake-bold-duotone',
        title: 'Absolute Ownership',
        description: 'When we build it, we own the outcome. No excuses, no shifting blame. We operate as an extension of your own team.'
    },
    {
        number: '04',
        icon: 'solar:eye-bold-duotone',
        title: 'Radical Transparency',
        description: 'Clear communication at every step. You always know what we are building, why we are building it, and exactly what it costs.'
    }
];

const teamMembers = [
    {
        name: 'Poornanand Verma',
        role: 'Senior Software Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Marcus&backgroundColor=b6e3f4'
    },
    {
        name: 'Prateek Singh',
        role: 'Senior Product Designer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=c0aede'
    },
    {
        name: 'Amit Pandey',
        role: 'Senior Devops Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Arthur&backgroundColor=ffd5dc'
    },
    {
        name: 'Kirti Awasthi',
        role: 'Senior Cloud Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Nolan&backgroundColor=f8d7da'
    },
    {
        name: 'Avinash Tripathi',
        role: 'Senior Software Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Justin&backgroundColor=d1e7dd'
    },
    {
        name: 'Ajay Singh',
        role: 'Web Designer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=ffdfbf'
    },
    {
        name: 'Anurag Verma',
        role: 'Backend Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Cody&backgroundColor=fff3cd'
    },
    {
        name: 'Vikas Gupta',
        role: 'Frontend Engineer',
        image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=cff4fc'
    }
];

export default function AboutPage() {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;
        const rx = -(dy / yc) * 6; 
        const ry = (dx / xc) * 6;
        
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <main className="about-root">
            {/* ─── Hero ─── */}
            <section className="services-hero section-padding">
                <RippleGrid />
                <div className="services-hero-glow" />
                <div className="container services-hero-inner">
                    <FadeSection delay={160}>
                        <h1 className="services-hero-heading">
                            An elite product task force for<br />
                            <span className="services-hero-accent">ambitious teams</span>
                        </h1>
                    </FadeSection>
                    <FadeSection delay={240}>
                        <p className="services-hero-sub">
                            Zalco was founded to bridge the gap between brilliant ideas and production-ready execution. We don't just write code; we engineer competitive advantages.
                        </p>
                    </FadeSection>
                    <FadeSection delay={320}>
                        <div className="hero-actions" style={{ marginTop: 0 }}>
                            <button
                                className="brutalist-button brutalist-button--dark"
                                onClick={() => {
                                    const contactSection = document.getElementById('contact-form');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        window.location.href = '/#contact';
                                    }
                                }}
                            >
                                Get Started
                            </button>
                            <a href="/services" className="text-link">
                                Our Services <Icon icon="solar:arrow-right-up-bold-duotone" />
                            </a>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Mission / The "Why" ─── */}
            <section className="about-mission-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="about-mission-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <h2>Our Mission</h2>
                            <p className="section-description" style={{ marginTop: '16px', fontSize: 'var(--text-step-1)', color: 'var(--color-text-secondary)' }}>
                                We believe that great software should not require dealing with fragmented teams, ballooning budgets, or drawn-out timelines. Our goal is to provide top-tier engineering and design under one roof, functioning as an elite product task force for our clients.
                            </p>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ─── Core Values ─── */}
            <section className="services-process-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="section-header">
                            <h2>Our Core Values<br /><span className="text-gray-400 font-normal">How we operate.</span></h2>
                        </div>
                    </FadeSection>
                    <div className="about-values-grid">
                        {coreValues.map((val, i) => (
                            <FadeSection key={val.number} delay={i * 100}>
                                <div 
                                    className="services-process-step"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="bento-card-spotlight"></div>
                                    <div className="services-step-icon">
                                        <Icon icon={val.icon} />
                                    </div>
                                    <h3 className="services-step-title">{val.title}</h3>
                                    <p className="services-step-desc">{val.description}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── The Team ─── */}
            <section className="about-team-section section-padding">
                <div className="container">
                    <FadeSection>
                        <div className="section-header section-header--center">
                            <h2>Meet the team</h2>
                            <p className="section-description" style={{ marginTop: '16px', fontSize: 'var(--text-step-1)', color: 'var(--color-text-secondary)' }}>
                                The designers, developers, and strategists turning ideas into reality.
                            </p>
                        </div>
                    </FadeSection>
                    
                    <div className="about-team-grid mt-16">
                        {teamMembers.map((member, i) => (
                            <FadeSection key={member.name} delay={i * 100}>
                                <div 
                                    className="about-team-card"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="bento-card-spotlight"></div>
                                    <div className="about-team-avatar">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <h3 className="about-team-name">{member.name}</h3>
                                    <p className="about-team-role">{member.role}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
