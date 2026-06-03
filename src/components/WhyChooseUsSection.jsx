import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

export default function WhyChooseUsSection() {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update CSS properties for spotlight position
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        
        // Calculate 3D tilt angles (max 6 degrees for a premium, subtle look)
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
        // Reset tilt smoothly
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <section id="why-choose-us" className="why-choose-section section-padding">
            <div className="why-choose-container">
                {/* Header Area */}
                <div className="why-choose-header">
                    <div>
                        <h2 className="why-choose-title">
                            <span className="text-gray-400 font-normal">Expertise that makes</span><br />
                            the difference.
                        </h2>
                    </div>
                    <div className="why-choose-description">
                        <p className="font-semibold text-primary">Built for performance. Structured for scale.</p>
                        <p>We design, build, and deploy production-ready digital products with a dedicated team, startup-velocity execution, and absolute engineering transparency.</p>
                    </div>
                </div>

                {/* Grid of Columns for Bento Masonry Layout */}
                <div className="why-choose-grid">
                    {/* Column 1 */}
                    <div className="why-choose-col">
                        {/* Card 1: Dedicated Team (Short) */}
                        <div 
                            className="why-choose-card why-choose-card--short"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:chat-round-check-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">Dedicated Team</h3>
                                <p className="why-choose-card-desc">
                                    Direct communication with the designers, developers, and DevOps engineers doing the work.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Rapid Support Net (Tall) */}
                        <div 
                            className="why-choose-card why-choose-card--tall"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:headphones-round-sound-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">Rapid Support Net</h3>
                                <p className="why-choose-card-desc">
                                    Critical bugs and blockers are handled in hours, not days. We integrate live error-tracking and active hot-patch pipelines into your system to guarantee zero downtime.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="why-choose-col">
                        {/* Card 3: Production-Proven Specs (Tall) */}
                        <div 
                            className="why-choose-card why-choose-card--tall"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:medal-ribbons-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">Production-Proven Specs</h3>
                                <p className="why-choose-card-desc">
                                    We build custom products using highly refined boilerplate templates, optimized serverless setups, and battle-tested component kits that eliminate technical debt and maximize velocity.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: End-to-end Solutions (Short) */}
                        <div 
                            className="why-choose-card why-choose-card--short"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:pen-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">End-to-end Solutions</h3>
                                <p className="why-choose-card-desc">
                                    From UI/UX strategy to highly scalable cloud deployments and mobile applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="why-choose-col">
                        {/* Card 5: Startup Speed (Short) */}
                        <div 
                            className="why-choose-card why-choose-card--short"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:rocket-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">Startup Speed</h3>
                                <p className="why-choose-card-desc">
                                    We work in agile sprints to deliver production-ready features fast.
                                </p>
                            </div>
                        </div>

                        {/* Card 6: Scaling from Day One (Tall) */}
                        <div 
                            className="why-choose-card why-choose-card--tall"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bento-card-spotlight"></div>
                            <div className="why-choose-card-top">
                                <div className="why-choose-icon-wrap">
                                    <Icon icon="solar:bolt-bold-duotone" />
                                </div>
                            </div>
                            <div className="why-choose-card-bottom">
                                <h3 className="why-choose-card-title">Scaling from Day One</h3>
                                <p className="why-choose-card-desc">
                                    We architect databases and backend endpoints to accommodate sudden traffic spikes. Your architecture is structured to grow from 100 to 1,000,000+ interactions seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
