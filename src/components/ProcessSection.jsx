import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

/* ─── Fade In on Scroll (Local Reusable) ─── */
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

const steps = [
    {
        number: '01',
        title: 'Discovery/Intro Meeting',
        description: 'We align on your goals, learn about your brand, and determine precisely what it will take to succeed.',
        icon: 'solar:calendar-date-bold-duotone'
    },
    {
        number: '02',
        title: 'Define Your Vision',
        description: 'Our team sculpts the architecture, moodboards, and product roadmap, turning abstract ideas into actionable paths.',
        icon: 'solar:pen-new-square-bold-duotone'
    },
    {
        number: '03',
        title: 'Submit Your Request',
        description: 'Review the high-fidelity mockups, submit feedback, and place the formal order to begin development sprints.',
        icon: 'solar:document-add-bold-duotone'
    },
    {
        number: '04',
        title: 'Project Delivered',
        description: 'We deploy the final polished code to your infrastructure, ensuring maximum performance and zero downtime.',
        icon: 'solar:rocket-bold-duotone'
    }
];

const ProcessSection = () => {
    return (
        <section id="process" className="process-section section-padding">
            <div className="container">
                <FadeSection>
                    <div className="section-header section-header--center">
                        <span className="section-label">How We Work</span>
                        <h2>A Seamless Process</h2>
                        <p className="section-desc mx-auto text-gray-400">
                            From the initial spark to the final deployment, we guide you through a predictable, transparent development lifecycle.
                        </p>
                    </div>
                </FadeSection>

                <div className="process-split-layout">
                    {/* Left Column: Vertical Timeline */}
                    <div className="process-timeline process-timeline--vertical">
                        {steps.map((step, index) => (
                            <FadeSection key={index} delay={index * 150} className="process-step-wrapper">
                                <div className="process-step process-step--flex">
                                    <div className="process-step-indicator">
                                        <div className="process-step-icon">
                                            <Icon icon={step.icon} />
                                        </div>
                                        {/* Vertical Connecting line to next step */}
                                        {index < steps.length - 1 && <div className="process-step-line process-step-line--vertical"></div>}
                                    </div>

                                    <div className="process-step-content bento-card">
                                        <div className="process-step-number">{step.number}</div>
                                        <h3 className="process-step-title">{step.title}</h3>
                                        <p className="process-step-desc">{step.description}</p>
                                    </div>
                                </div>
                            </FadeSection>
                        ))}
                    </div>

                    {/* Right Column: Animation Container */}
                    <div className="process-animation-wrapper">
                        <div className="process-animation-container bento-card glass-panel">
                            <div className="process-animation-placeholder">
                                <Icon icon="solar:magic-stick-3-bold-duotone" className="process-placeholder-icon" />
                                <p>Interactive Animation</p>
                                <div className="micro-anim-pulse mx-auto" style={{ marginTop: '1rem' }}>
                                    <div className="pulse-dot"></div> <span style={{ color: 'var(--text-tertiary)' }}>Live Concept</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
