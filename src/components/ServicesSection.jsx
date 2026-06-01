import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function ServicesSection() {

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
        // Reset tilt smoothly (will utilize the transition defined in CSS)
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <section id="services" className="bento-section section-padding">
            <div className="bento-container">
                {/* Header Area */}
                <div className="bento-header">
                    <h2 className="bento-title">
                        <span className="bento-title-muted">End-to-end digital services</span>
                        <br />
                        <span className="bento-title-main">that supercharge your</span>
                        <br />
                        <span className="bento-title-main">business.</span>
                    </h2>
                    <div className="bento-header-right">
                        <p className="bento-subtitle">
                            We don't just build websites; we build ecosystems. Our approach integrates rigorous strategy with immersive design.
                        </p>
                        <Link to="/services#service-cards" className="bento-link">
                            View all services
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="bento-grid">
                    {/* Card 1: Web Design */}
                    <Link 
                        to="/services#web-design"
                        className="bento-card card-strategy"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="bento-card-spotlight"></div>
                        <div className="bento-card-visual">
                            <div className="visual-web-design">

                                <div className="browser-window">
                                    <div className="browser-header">
                                        <span className="dot dot-close"></span>
                                        <span className="dot dot-min"></span>
                                        <span className="dot dot-max"></span>
                                        <div className="browser-address">zalco.io/responsive</div>
                                    </div>
                                    <div className="browser-body">
                                        <div className="responsive-container">
                                            <div className="hero-banner"></div>
                                            <div className="content-grid">
                                                <div className="grid-item main-content"></div>
                                                <div className="grid-item sidebar"></div>
                                            </div>
                                        </div>
                                        <div className="resize-handle">
                                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                                                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                                                <circle cx="2" cy="6" r="1.5" fill="currentColor" />
                                                <circle cx="2" cy="10" r="1.5" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-overlay-lines">
                                    <div className="grid-line-h"></div>
                                    <div className="grid-line-v"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card-content">
                            <div className="bento-card-text">
                                <h3 className="bento-card-title">Web design</h3>
                                <p className="bento-card-desc">Landing pages, marketing sites, and custom interactive web experiences.</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 2: Mobile & Web App Design */}
                    <Link 
                        to="/services#mobile-web-app-design"
                        className="bento-card card-design"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="bento-card-spotlight"></div>
                        <div className="bento-card-visual">
                            <div className="visual-app-design">
                                {/* Stacked Layers Background */}
                                <div className="bento-bg-stacked-layers">
                                    <div className="layers-container">
                                        <div className="layer layer-1"></div>
                                        <div className="layer layer-2"></div>
                                        <div className="layer layer-3">
                                            <div className="layer-glow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card-content">
                            <div className="bento-card-text">
                                <h3 className="bento-card-title">Mobile &amp; Web App Design</h3>
                                <p className="bento-card-desc">User-centric interfaces, high-fidelity prototyping, and modern design systems.</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 3: Mobile & Web App Development */}
                    <Link 
                        to="/services#web-app-development"
                        className="bento-card card-development"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="bento-card-spotlight"></div>
                        <div className="bento-card-visual">
                            <div className="visual-app-dev">
                                {/* Isometric Grid Background */}
                                <div className="bento-bg-isometric">
                                    <div className="isometric-container">
                                        <div className="iso-floating-element">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400">
                                                <polyline points="16 18 22 12 16 6" />
                                                <polyline points="8 6 2 12 8 18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="code-editor-console">
                                    <div className="console-tab">App.tsx</div>
                                    <div className="console-code">
                                        <div className="code-line"><span className="code-keyword">const</span> App = () =&gt; &#123;</div>
                                        <div className="code-line indent-1"><span className="code-keyword">const</span> [run, setRun] = useState(<span className="code-string">false</span>);</div>
                                        <div className="code-line indent-1">useEffect(() =&gt; &#123;</div>
                                        <div className="code-line indent-2">compileSection();</div>
                                        <div className="code-line indent-1">&#125;, []);</div>
                                        <div className="code-line indent-1"><span className="code-keyword">return</span> &lt;<span className="code-tag">Dashboard</span> run=&#123;run&#125; /&gt;;</div>
                                        <div className="code-line">&#125;;</div>
                                    </div>
                                    <div className="compiler-bar">
                                        <div className="compiler-progress"></div>
                                    </div>
                                </div>
                                <div className="app-preview-modal">
                                    <div className="preview-header">
                                        <span className="dot-green"></span>
                                        <span>localhost:3000</span>
                                    </div>
                                    <div className="preview-widget">
                                        <div className="skeleton-bar short"></div>
                                        <div className="skeleton-bar long"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card-content">
                            <div className="bento-card-text">
                                <h3 className="bento-card-title">Mobile &amp; Web App Development</h3>
                                <p className="bento-card-desc">Scalable full-stack systems, native/cross-platform mobile apps, and robust APIs.</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 4: DevOps */}
                    <Link 
                        to="/services#devops-cloud"
                        className="bento-card card-production"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="bento-card-spotlight"></div>
                        <div className="bento-card-visual">
                            <div className="visual-devops">
                                {/* Lens/Focus Background */}
                                <div className="bento-bg-lens">
                                    <div className="lens-container">
                                        <div className="lens-ring ring-1"></div>
                                        <div className="lens-ring ring-2"></div>
                                        <div className="lens-ring ring-3"></div>
                                        <div className="lens-brackets">
                                            <div className="bracket bracket-top"></div>
                                            <div className="bracket bracket-bottom"></div>
                                            <div className="bracket bracket-left"></div>
                                            <div className="bracket bracket-right"></div>
                                        </div>
                                        <div className="lens-glow"></div>
                                        <div className="lens-dot"></div>
                                    </div>
                                </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card-content">
                            <div className="bento-card-text">
                                <h3 className="bento-card-title">Devops</h3>
                                <p className="bento-card-desc">Cloud hosting, CI/CD automation, and infrastructure management.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
