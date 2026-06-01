import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
                {service.extraSceneElements}
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
                <div className="service-ux-mini-grid">
                    <div className="service-ux-cell" /><div className="service-ux-cell" />
                    <div className="service-ux-cell" /><div className="service-ux-cell" />
                </div>
            </div>
        ),
    },
    {
        title: 'Mobile & Web App Design',
        subtitle: 'Research, Strategy & Interactive UI',
        description: 'We turn complex workflows into intuitive, thumb-friendly experiences. From user research and information architecture to high-fidelity, interactive prototypes, we design and validate every flow before development starts.',
        capabilities: ['User research & personas', 'Information architecture', 'High-fidelity prototypes', 'Design systems & UI kits'],
        comment: 'Let\'s check the contrast on active mobile states.',
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
                        <div className="service-ux-cell" /><div className="service-ux-cell" />
                    </div>
                </div>
            </div>
        ),
        extraSceneElements: (
            <div className="service-phone service-phone--sm service-scene-phone">
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
                <div className="service-phone-nav">
                    <div className="service-nav-dot service-nav-dot--active" />
                    <div className="service-nav-dot" />
                    <div className="service-nav-dot" />
                    <div className="service-nav-dot" />
                </div>
            </div>
        )
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
                <div className="service-code-line"><span className="service-tok-purple">const</span> <span className="service-tok-blue">fetch</span> <span>= async</span> <span>(id) =&gt;</span> {'{'}</div>
                <div className="service-code-line service-code-line--indent"><span className="service-tok-purple">const</span> <span>res</span> = <span className="service-tok-blue">await</span> <span>api.</span><span className="service-tok-green">get</span><span>(id);</span></div>
                <div className="service-code-line service-code-line--indent"><span className="service-tok-purple">return</span> <span>res.</span><span className="service-tok-blue">data</span><span>;</span></div>
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
    { 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--logos" width="1em" height="1em" viewBox="0 0 256 257">
                <path fill="#d97757" d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z" />
            </svg>
        ),
        label: 'Claude'
    },
    { 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--logos" width="2.73em" height="1em" viewBox="0 0 512 188">
                <defs>
                    <radialGradient id="iconifyReact12" cx="85.738%" cy="25.354%" r="103.154%" fx="85.738%" fy="25.354%" gradientTransform="matrix(-.86887 .47915 -.39276 -.66723 1.702 .012)">
                        <stop offset="0%" stopColor="#5baeff"></stop>
                        <stop offset="100%" stopColor="#9cbfff"></stop>
                    </radialGradient>
                    <radialGradient id="iconifyReact13" cx="61.879%" cy="26.683%" r="80.612%" fx="61.879%" fy="26.683%" gradientTransform="matrix(-.14736 .90946 -.98908 -.1355 .974 -.26)">
                        <stop offset="0%" stopColor="#409dff"></stop>
                        <stop offset="100%" stopColor="#64b0ff"></stop>
                    </radialGradient>
                    <radialGradient id="iconifyReact14" cx="53.184%" cy="19.021%" r="110.789%" fx="53.184%" fy="19.021%" gradientTransform="matrix(-.16226 .97112 -.66046 -.23858 .744 -.28)">
                        <stop offset="0%" stopColor="#177cff"></stop>
                        <stop offset="100%" stopColor="#4da4ff"></stop>
                    </radialGradient>
                    <radialGradient id="iconifyReact15" cx="-182.665%" cy="10.869%" r="521.404%" fx="-182.665%" fy="10.869%" gradientTransform="matrix(.41608 .16332 -.90933 .07473 -.968 .399)">
                        <stop offset="0%" stopColor="#1c7aff"></stop>
                        <stop offset="100%" stopColor="#76a9ff"></stop>
                        <stop offset="100%" stopColor="#8fb9ff"></stop>
                    </radialGradient>
                    <linearGradient id="iconifyReact16" x1="48.887%" x2="48.887%" y1="8.809%" y2="100%">
                        <stop offset="0%" stopColor="#076eff"></stop>
                        <stop offset="100%" stopColor="#3e93ff"></stop>
                    </linearGradient>
                    <linearGradient id="iconifyReact17" x1="13.217%" x2="78.598%" y1="0%" y2="94.201%">
                        <stop offset="0%" stopColor="#076eff"></stop>
                        <stop offset="100%" stopColor="#69a3ff"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#iconifyReact12)" d="M125.939 126.64q0 26.094-15.482 41.575q-17.395 18.438-45.748 18.438q-27.135 0-45.923-18.786Q0 149.08 0 121.597q0-27.485 18.786-46.27Q37.573 56.54 64.71 56.54q13.741 0 25.918 4.87t20.004 13.742l-11.48 11.48q-5.74-6.957-14.873-10.871t-19.57-3.914q-20.351 0-34.441 14.09q-13.916 14.264-13.916 35.66t13.916 35.659q14.09 14.09 34.442 14.09q18.613 0 30.963-10.437t14.263-28.702H64.71v-14.96h60.36q.87 4.872.87 9.394"></path>
                <path fill="url(#iconifyReact13)" d="M176.17 96.205q19.152 0 30.485 12.387q11.334 12.388 11.334 34.703l-.176 1.757h-67.648q.352 12.651 8.434 20.382q8.083 7.73 19.328 7.73q15.462 0 24.248-15.461l14.408 7.028q-5.799 10.894-16.077 17.044t-23.282 6.15q-18.976 0-31.276-13.003t-12.299-32.857q0-19.68 11.948-32.77t30.573-13.09m-.351 14.76q-9.137 0-15.726 5.622q-6.59 5.623-8.698 15.11h49.374q-.702-8.96-7.292-14.846t-17.658-5.887"></path>
                <path fill="url(#iconifyReact14)" d="M244.493 184.843h-16.116V99.008h15.416v11.912h.7q3.68-6.306 11.299-10.51q7.62-4.206 15.153-4.205q9.459 0 16.641 4.38q7.182 4.379 10.51 12.086q10.687-16.466 29.605-16.466q14.89 0 22.948 9.11q8.058 9.108 8.058 25.925v53.603h-16.116v-51.15q0-12.088-4.38-17.43q-4.379-5.343-14.714-5.343q-9.285 0-15.59 7.883q-6.307 7.882-6.307 18.568v47.472h-16.116v-51.15q0-12.088-4.38-17.43q-4.379-5.343-14.714-5.343q-9.285 0-15.59 7.883q-6.307 7.882-6.307 18.568z"></path>
                <path fill="url(#iconifyReact16)" d="M393.263 69.216q0 4.737-3.334 8.07q-3.334 3.335-8.071 3.335t-8.071-3.334t-3.334-8.071q0-4.738 3.334-8.071q3.334-3.334 8.07-3.334q4.74 0 8.072 3.334q3.334 3.334 3.334 8.07m-3.334 29.652v85.975h-16.142V98.868z"></path>
                <path fill="url(#iconifyReact15)" d="M512 69.216q0 4.737-3.334 8.07q-3.334 3.335-8.07 3.335q-4.74 0-8.072-3.334q-3.333-3.334-3.334-8.071q0-4.738 3.334-8.071q3.334-3.334 8.071-3.334t8.071 3.334t3.334 8.07m-3.334 29.652v85.975h-16.142V98.868z"></path>
                <path fill="url(#iconifyReact17)" d="M404.004 99.008h15.415v11.912h.7q3.68-6.306 11.3-10.51q7.62-4.206 15.853-4.205q15.765 0 24.261 9.022q8.496 9.02 8.496 25.663v53.953h-16.116v-52.902q-.526-21.021-21.196-21.021q-9.634 0-16.116 7.795t-6.481 18.656v47.472h-16.116z"></path>
                <path fill="#076eff" d="M348.374 72.76c-2.846-18.788-17.592-33.533-36.38-36.38c18.788-2.847 33.534-17.593 36.38-36.38c2.847 18.787 17.593 33.533 36.38 36.38c-18.787 2.847-33.533 17.592-36.38 36.38"></path>
            </svg>
        ),
        label: 'Gemini'
    },
    { 
        icon: (
            <svg width="2.17em" height="1em" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8791 5.16284C20.7919 5.16284 20.7058 5.166 20.62 5.16868C20.606 5.16959 20.5924 5.17279 20.5795 5.17816C20.5568 5.18594 20.5363 5.19924 20.52 5.21688C20.5036 5.23452 20.4919 5.25593 20.4859 5.27921L20.1174 6.56684C19.9585 7.12042 20.0176 7.63168 20.2847 8.00684C20.5295 8.35421 20.9368 8.55789 21.4315 8.58158L23.4308 8.70284C23.4902 8.706 23.5416 8.73442 23.5729 8.78179C23.6062 8.83263 23.6136 8.89626 23.5933 8.95374C23.5771 8.99968 23.5481 9.04002 23.5096 9.06994C23.4712 9.09986 23.425 9.11812 23.3765 9.12253L21.2991 9.24379C20.1706 9.29605 18.9562 10.2171 18.5302 11.3402L18.3805 11.7365C18.3741 11.7529 18.3717 11.7706 18.3735 11.7881C18.3753 11.8057 18.3812 11.8225 18.3908 11.8373C18.4004 11.8521 18.4134 11.8644 18.4287 11.8731C18.444 11.8819 18.4611 11.8869 18.4787 11.8877H25.6333C25.6749 11.8879 25.7154 11.8745 25.7486 11.8494C25.7818 11.8244 25.8059 11.7891 25.8172 11.7491C25.9441 11.2923 26.0081 10.8203 26.0073 10.3462C26.0073 7.48516 23.7133 5.166 20.8822 5.166" fill="#FBAD41"/>
                <path d="M17.7564 11.7213L17.8887 11.2557C18.048 10.7021 17.9889 10.1908 17.7223 9.81568C17.4766 9.46832 17.0695 9.26463 16.5747 9.24095L7.19653 9.11968C7.16733 9.11918 7.13867 9.11176 7.1129 9.09804C7.08713 9.08431 7.06498 9.06468 7.04826 9.04074C7.03189 9.01557 7.02152 8.98697 7.01796 8.95716C7.0144 8.92734 7.01774 8.8971 7.02774 8.86879C7.04404 8.82257 7.07335 8.78204 7.11215 8.7521C7.15095 8.72215 7.19758 8.70406 7.24642 8.7L16.7122 8.57874C17.8359 8.52679 19.0502 7.60547 19.4762 6.48237L20.016 5.05579C20.0379 4.9953 20.0434 4.93008 20.0318 4.86679C19.4168 2.08405 16.9566 0 14.0154 0C11.304 0 9.00363 1.76826 8.178 4.22637C7.62227 3.80392 6.92636 3.60928 6.23211 3.68211C4.93232 3.81284 3.88611 4.87168 3.75695 6.18584C3.72371 6.51404 3.74786 6.84551 3.82832 7.16542C1.704 7.22842 0 8.98737 0 11.1486C0 11.3441 0.0138947 11.5366 0.042 11.7245C0.0535263 11.8156 0.131211 11.8839 0.223105 11.8838H17.5423C17.5911 11.883 17.6383 11.8664 17.6769 11.8366C17.7155 11.8067 17.7434 11.7651 17.7564 11.718" fill="#F6821F"/>
            </svg>
        ),
        label: 'Cloudflare'
    },
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
        icon: 'solar:code-bold-duotone',
        title: 'Develop',
        description: 'We build with modern frameworks, writing clean, modular, and performant code that is fully tested and optimized.',
    },
    {
        number: '04',
        icon: 'solar:rocket-bold-duotone',
        title: 'Deploy',
        description: 'Production-ready code pushed to a scalable cloud environment with automated deployments and real-time monitoring.',
    },
];

export default function ServicesPage() {
    const location = useLocation();

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

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            // Wait slightly for rendering/intersection observer setup
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [location]);

    return (
        <main className="services-root">

            {/* ─── Hero ─── */}
            <section className="services-hero section-padding">
                <RippleGrid />
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
                                <div 
                                    id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                    className={`service-feature-row ${index % 2 === 1 ? 'service-feature-row--reversed' : ''}`}
                                >
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
                                        {typeof icon === 'string' ? (
                                            <Icon icon={icon} className={invert ? 'invert-on-dark' : ''} />
                                        ) : (
                                            icon
                                        )}
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
                                <div 
                                    className="services-process-step"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="bento-card-spotlight"></div>
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
