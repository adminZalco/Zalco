import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

const processStages = [
    {
        id: 0,
        number: '01',
        tabName: 'Discover & Define',
        tag: 'FROM DATA TO DECISIONS',
        title: 'Discover & Define',
        subtitle: 'Understand the problem before building the solution.',
        description: 'We uncover user needs, business objectives, market opportunities, and technical constraints through research, stakeholder workshops, competitive analysis, and product strategy. Every successful product starts with a clear understanding of what should be built and why.',
        icon: 'solar:compass-bold-duotone',
    },
    {
        id: 1,
        number: '02',
        tabName: 'Design',
        tag: 'FROM CONCEPTS TO INTERFACES',
        title: 'Design',
        subtitle: 'Transform ideas into intuitive experiences.',
        description: 'We craft user flows, wireframes, high-fidelity interfaces, interactive prototypes, and scalable design systems that balance business goals with exceptional user experiences. Every interaction is designed to be purposeful, accessible, and easy to use.',
        icon: 'solar:pallete-2-bold-duotone',
    },
    {
        id: 2,
        number: '03',
        tabName: 'Develop',
        tag: 'FROM DESIGNS TO SYSTEM LOGIC',
        title: 'Develop',
        subtitle: 'Turn designs into robust digital products.',
        description: 'Our engineering team builds scalable web applications, mobile apps, SaaS platforms, and custom software solutions using modern technologies and best practices. We focus on performance, maintainability, security, and seamless collaboration between design and development.',
        icon: 'solar:code-bold-duotone',
    },
    {
        id: 3,
        number: '04',
        tabName: 'Deploy & Deliver',
        tag: 'FROM SHIP TO SCALE',
        title: 'Deploy & Deliver',
        subtitle: 'Launch confidently and continuously improve.',
        description: 'From testing and deployment to monitoring and optimization, we ensure your product reaches users smoothly and performs reliably. We support product growth through analytics, iteration, and ongoing enhancements that drive measurable business outcomes.',
        icon: 'solar:rocket-2-bold-duotone',
    }
];

/* ─── Stage Visuals ─── */

function DiscoverVisual() {
    return (
        <div className="pv-discover">
            <svg className="pv-discover-svg" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="discoverGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-interactive-default)" />
                        <stop offset="100%" stopColor="var(--primary-strong)" />
                    </linearGradient>
                    <clipPath id="discoverClip">
                        <rect x="90" y="40" width="300" height="220" rx="12" />
                    </clipPath>
                </defs>

                {/* --- 1. Background Grid & Scope Circles --- */}
                <rect x="90" y="40" width="300" height="220" rx="12" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                <circle cx="240" cy="150" r="85" stroke="var(--develop-editor-sidebar)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="240" cy="150" r="55" stroke="var(--develop-editor-sidebar)" strokeWidth="1" />

                {/* Scanned Grid Lines */}
                <g opacity="0.1" clipPath="url(#discoverClip)">
                    <line x1="90" y1="150" x2="390" y2="150" stroke="var(--color-text-primary)" strokeWidth="1" />
                    <line x1="240" y1="40" x2="240" y2="260" stroke="var(--color-text-primary)" strokeWidth="1" />
                </g>

                {/* --- 2. Interactive KPI / Radar Target Card (Left) --- */}
                <g className="pv-discover-kpi">
                    <rect x="18" y="120" width="54" height="110" rx="8" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                    <circle cx="45" cy="155" r="10" fill="var(--color-interactive-default)" opacity="0.1" />
                    {/* Concentric radar indicator */}
                    <circle cx="45" cy="155" r="4" fill="var(--color-interactive-default)" className="pv-discover-kpi-dot" />
                    <circle cx="45" cy="155" r="12" stroke="var(--color-interactive-default)" strokeWidth="1.5" fill="none" className="pv-discover-kpi-ring" />
                    {/* User research text */}
                    <rect x="25" y="185" width="40" height="4" rx="1" fill="var(--color-text-secondary)" opacity="0.5" />
                    <rect x="25" y="195" width="28" height="4" rx="1" fill="var(--develop-code-dim)" opacity="0.4" />
                    <rect x="25" y="205" width="34" height="4" rx="1" fill="var(--develop-code-dim)" opacity="0.4" />
                </g>

                {/* --- 3. Network Insight Graph / Strategy Dots --- */}
                <g clipPath="url(#discoverClip)" className="pv-discover-graph">
                    {/* Connector wires */}
                    <path d="M 130 100 Q 185 80 200 150" stroke="var(--color-text-placeholder)" strokeWidth="1.5" opacity="0.3" fill="none" />
                    <path d="M 200 150 Q 250 210 320 180" stroke="var(--color-text-placeholder)" strokeWidth="1.5" opacity="0.3" fill="none" />
                    <path d="M 200 150 Q 290 80 340 100" stroke="var(--color-text-placeholder)" strokeWidth="1.5" opacity="0.3" fill="none" />
                    <path d="M 130 200 Q 170 175 200 150" stroke="var(--color-text-placeholder)" strokeWidth="1.5" opacity="0.3" fill="none" />

                    {/* Active moving packets along paths */}
                    <circle r="3" fill="var(--color-interactive-default)" className="pv-discover-packet pv-discover-packet--1" />
                    <circle r="3" fill="var(--develop-syntax-pink)" className="pv-discover-packet pv-discover-packet--2" />
                    <circle r="3" fill="var(--develop-syntax-green)" className="pv-discover-packet pv-discover-packet--3" />

                    {/* Strategy Node Dots */}
                    <circle cx="130" cy="100" r="5" fill="var(--develop-preview-bg)" stroke="var(--develop-syntax-pink)" strokeWidth="2" className="pv-discover-node" />
                    <circle cx="340" cy="100" r="5" fill="var(--develop-preview-bg)" stroke="var(--develop-syntax-blue)" strokeWidth="2" className="pv-discover-node" />
                    <circle cx="130" cy="200" r="5" fill="var(--develop-preview-bg)" stroke="var(--develop-syntax-amber)" strokeWidth="2" className="pv-discover-node" />
                    <circle cx="320" cy="180" r="5" fill="var(--develop-preview-bg)" stroke="var(--develop-syntax-green)" strokeWidth="2" className="pv-discover-node" />
                    
                    {/* Main Insight Central Node */}
                    <circle cx="200" cy="150" r="8" fill="var(--color-interactive-default)" className="pv-discover-center-node" />
                    <circle cx="200" cy="150" r="16" stroke="var(--color-interactive-default)" strokeWidth="1" strokeDasharray="3 3" fill="none" className="pv-discover-center-node-ring" />
                </g>

                {/* --- 4. Analytics Bar Chart / Strategy panel (Right) --- */}
                <g className="pv-discover-panel">
                    <rect x="290" y="90" width="135" height="160" rx="10" fill="var(--develop-preview-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" className="pv-preview-rect" />
                    <rect x="290" y="90" width="135" height="18" rx="10" fill="var(--develop-preview-header)" />
                    <circle cx="305" cy="99" r="2.5" fill="var(--color-text-placeholder)" opacity="0.5" />
                    <circle cx="313" cy="99" r="2.5" fill="var(--color-text-placeholder)" opacity="0.5" />

                    {/* Bar Chart growth bars */}
                    <rect x="315" y="180" width="12" height="45" rx="2" fill="var(--develop-editor-sidebar)" />
                    <rect x="315" y="180" width="12" height="45" rx="2" fill="var(--color-interactive-default)" className="pv-discover-bar pv-discover-bar--1" />
                    
                    <rect x="335" y="160" width="12" height="65" rx="2" fill="var(--develop-editor-sidebar)" />
                    <rect x="335" y="160" width="12" height="65" rx="2" fill="var(--develop-syntax-pink)" className="pv-discover-bar pv-discover-bar--2" />
                    
                    <rect x="355" y="140" width="12" height="85" rx="2" fill="var(--develop-editor-sidebar)" />
                    <rect x="355" y="140" width="12" height="85" rx="2" fill="var(--develop-syntax-green)" className="pv-discover-bar pv-discover-bar--3" />
                    
                    <rect x="375" y="170" width="12" height="55" rx="2" fill="var(--develop-editor-sidebar)" />
                    <rect x="375" y="170" width="12" height="55" rx="2" fill="var(--develop-syntax-blue)" className="pv-discover-bar pv-discover-bar--4" />

                    {/* X/Y Chart axes */}
                    <line x1="305" y1="225" x2="395" y2="225" stroke="var(--develop-editor-border)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="305" y1="135" x2="305" y2="225" stroke="var(--develop-editor-border)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
                </g>

                {/* --- 5. Magnifying Radar Sweep / Scan Cursor --- */}
                <g className="pv-discover-scan">
                    {/* Scanning Line Sweep */}
                    <line x1="140" y1="50" x2="140" y2="250" stroke="url(#discoverGlow)" strokeWidth="2" opacity="0.6" className="pv-discover-scan-line" />
                    <rect x="139" y="50" width="2" height="200" fill="var(--color-interactive-default)" opacity="0.8" className="pv-discover-scan-line-head" />
                </g>

                {/* --- 6. Scoped Search Box (Bottom Center) --- */}
                <g className="pv-discover-search">
                    <rect x="160" y="275" width="130" height="22" rx="11" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1" />
                    <circle cx="178" cy="286" r="4.5" stroke="var(--color-text-secondary)" strokeWidth="1.2" fill="none" />
                    <line x1="181.5" y1="289.5" x2="186" y2="294" stroke="var(--color-text-secondary)" strokeWidth="1.2" strokeLinecap="round" />
                    <text x="194" y="289" fill="var(--color-text-secondary)" fontSize="8.5" fontFamily="var(--font-primary)" opacity="0.7">Researching...</text>
                </g>
            </svg>
        </div>
    );
}

function DesignVisual() {
    return (
        <div className="pv-design">
            <svg className="pv-design-svg" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="designGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-interactive-default)" />
                        <stop offset="100%" stopColor="var(--primary-strong)" />
                    </linearGradient>
                    <clipPath id="canvasClip">
                        <rect x="90" y="40" width="300" height="220" rx="12" />
                    </clipPath>
                </defs>

                {/* --- 1. Background Grid & Guidelines --- */}
                <rect x="90" y="40" width="300" height="220" rx="12" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                
                {/* Horizontal Guide line */}
                <line x1="90" y1="150" x2="390" y2="150" stroke="var(--color-interactive-default)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" className="pv-design-guide pv-design-guide--h" />
                {/* Vertical Guide line */}
                <line x1="200" y1="40" x2="200" y2="260" stroke="var(--color-interactive-default)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" className="pv-design-guide pv-design-guide--v" />

                {/* Canvas grid dots */}
                <g opacity="0.15" clipPath="url(#canvasClip)">
                    <circle cx="120" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="170" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="220" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="270" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="320" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="370" cy="70" r="1.5" fill="var(--color-text-primary)" />
                    
                    <circle cx="120" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="170" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="220" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="270" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="320" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="370" cy="120" r="1.5" fill="var(--color-text-primary)" />
                    
                    <circle cx="120" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="170" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="220" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="270" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="320" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="370" cy="170" r="1.5" fill="var(--color-text-primary)" />
                    
                    <circle cx="120" cy="220" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="170" cy="220" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="220" cy="220" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="270" cy="220" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="320" cy="220" r="1.5" fill="var(--color-text-primary)" />
                    <circle cx="370" cy="220" r="1.5" fill="var(--color-text-primary)" />
                </g>

                {/* --- 2. Color Palette Swatches Panel (Left) --- */}
                <g className="pv-design-palette">
                    <rect x="18" y="120" width="54" height="110" rx="8" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                    {/* Swatch 1 */}
                    <circle cx="45" cy="145" r="9" fill="var(--color-interactive-default)" className="pv-design-swatch pv-design-swatch--1" />
                    <circle cx="45" cy="145" r="13" stroke="var(--color-interactive-default)" strokeWidth="1" strokeDasharray="2 2" fill="none" className="pv-design-swatch-ring" />
                    {/* Swatch 2 */}
                    <circle cx="45" cy="175" r="9" fill="var(--develop-syntax-green)" className="pv-design-swatch pv-design-swatch--2" />
                    {/* Swatch 3 */}
                    <circle cx="45" cy="205" r="9" fill="var(--develop-syntax-pink)" className="pv-design-swatch pv-design-swatch--3" />
                </g>

                {/* --- 3. Bezier Curve Pen Tool Path (Center) --- */}
                <g clipPath="url(#canvasClip)">
                    {/* Glow backdrop behind the path */}
                    <path d="M 120 180 C 180 80, 220 220, 280 120" stroke="url(#designGlow)" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
                    {/* Vector Path line */}
                    <path d="M 120 180 C 180 80, 220 220, 280 120" stroke="var(--color-interactive-default)" strokeWidth="2.5" strokeLinecap="round" className="pv-design-bezier-path" />
                    
                    {/* Anchor 1 */}
                    <rect x="116" y="176" width="8" height="8" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1.5" className="pv-design-anchor" />
                    
                    {/* Anchor 2 (Active control point) */}
                    <g className="pv-design-active-node">
                        {/* Control Handles line */}
                        <line x1="165" y1="100" x2="235" y2="200" stroke="var(--color-text-placeholder)" strokeWidth="1" opacity="0.7" className="pv-design-handle-line" />
                        {/* Handle dots */}
                        <circle cx="165" cy="100" r="4" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1.5" className="pv-design-handle-dot" />
                        <circle cx="235" cy="200" r="4" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1.5" className="pv-design-handle-dot" />
                        {/* Center Point */}
                        <circle cx="200" cy="150" r="4.5" fill="var(--color-interactive-default)" className="pv-design-anchor-active" />
                    </g>
                    
                    {/* Anchor 3 */}
                    <rect x="276" y="116" width="8" height="8" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1.5" className="pv-design-anchor" />

                    {/* Cursor tool drawing the path */}
                    <g className="pv-design-cursor">
                        {/* Cursor pointer arrow */}
                        <path d="M0 0 L14 5 L8 8 L5 14 Z" fill="var(--color-text-primary)" stroke="var(--develop-editor-bg)" strokeWidth="1" />
                        {/* Pen tip icon near cursor */}
                        <path d="M-8 -8 L-4 -12 L0 -8 L-4 -4 Z" fill="var(--color-interactive-default)" opacity="0.8" />
                    </g>
                </g>

                {/* --- 4. Interactive Design Panel / Layer mockup (Right) --- */}
                <g className="pv-design-layer-card">
                    {/* Card container */}
                    <rect x="290" y="90" width="135" height="160" rx="10" fill="var(--develop-preview-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" className="pv-preview-rect" />
                    
                    {/* Header profile */}
                    <circle cx="315" cy="115" r="9" fill="var(--develop-editor-sidebar)" />
                    <rect x="330" y="110" width="45" height="4" rx="1" fill="var(--color-text-secondary)" opacity="0.6" />
                    <rect x="330" y="118" width="30" height="3" rx="0.8" fill="var(--develop-code-dim)" opacity="0.4" />
                    
                    {/* Layer selection box */}
                    <rect x="302" y="136" width="111" height="50" rx="4" fill="var(--develop-editor-sidebar)" stroke="var(--color-interactive-default)" strokeWidth="1" opacity="0.6" />
                    
                    {/* Inside box: Mock Image grid layout */}
                    <circle cx="325" cy="161" r="10" fill="var(--color-interactive-default)" opacity="0.15" />
                    <rect x="345" y="153" width="50" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.5" />
                    <rect x="345" y="163" width="35" height="4" rx="1.2" fill="var(--develop-code-dim)" opacity="0.3" />

                    {/* Design Slider component */}
                    <rect x="302" y="202" width="111" height="4" rx="2" fill="var(--develop-editor-sidebar)" />
                    <rect x="302" y="202" width="65" height="4" rx="2" fill="var(--color-interactive-default)" className="pv-design-slider-bar" />
                    <circle cx="367" cy="204" r="5" fill="var(--color-interactive-default)" className="pv-design-slider-handle" />
                    <rect x="302" y="218" width="45" height="6" rx="1.5" fill="var(--develop-code-dim)" opacity="0.4" />
                    <rect x="378" y="218" width="35" height="6" rx="1.5" fill="var(--color-interactive-default)" opacity="0.2" />
                </g>

                {/* --- 5. Rulers/Coordinates Info Badge --- */}
                <g className="pv-design-coords">
                    <rect x="18" y="55" width="44" height="16" rx="3" fill="var(--develop-editor-sidebar)" stroke="var(--develop-editor-border)" strokeWidth="1" />
                    <text x="40" y="66" fill="var(--color-text-secondary)" fontSize="7" fontWeight="bold" fontFamily="var(--font-primary)" textAnchor="middle">X: 200</text>
                </g>
                <g className="pv-design-coords pv-design-coords--delayed">
                    <rect x="18" y="76" width="44" height="16" rx="3" fill="var(--develop-editor-sidebar)" stroke="var(--develop-editor-border)" strokeWidth="1" />
                    <text x="40" y="87" fill="var(--color-text-secondary)" fontSize="7" fontWeight="bold" fontFamily="var(--font-primary)" textAnchor="middle">Y: 150</text>
                </g>
            </svg>
        </div>
    );
}

function DevelopVisual() {
    return (
        <div className="pv-develop">
            <svg className="pv-develop-svg" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--color-interactive-default)" />
                        <stop offset="100%" stopColor="var(--primary-strong)" />
                    </linearGradient>
                    <clipPath id="editorClip">
                        <rect x="95" y="75" width="290" height="180" rx="6" />
                    </clipPath>
                </defs>

                {/* --- 1. Background / Ambient Data Particles --- */}
                <circle cx="60" cy="80" r="1.5" fill="var(--color-interactive-default)" opacity="0.3" className="pv-particle pv-particle--1" />
                <circle cx="420" cy="70" r="2" fill="var(--primary-strong)" opacity="0.4" className="pv-particle pv-particle--2" />
                <circle cx="280" cy="30" r="1" fill="var(--color-interactive-default)" opacity="0.2" className="pv-particle pv-particle--3" />

                {/* --- 2. Floating Code/Syntax Symbols outside editor --- */}
                <g className="pv-symbol pv-symbol--curly">
                    <text x="35" y="80" fill="var(--color-interactive-default)" fontSize="20" fontWeight="bold" opacity="0.5" fontFamily="var(--font-primary)">{"{"}</text>
                </g>
                <g className="pv-symbol pv-symbol--tag">
                    <text x="420" y="75" fill="var(--develop-syntax-pink)" fontSize="16" fontWeight="bold" opacity="0.5" fontFamily="var(--font-primary)">{"</>"}</text>
                </g>
                <g className="pv-symbol pv-symbol--bracket">
                    <text x="390" y="295" fill="var(--develop-syntax-amber)" fontSize="18" fontWeight="bold" opacity="0.4" fontFamily="var(--font-primary)">{"[]"}</text>
                </g>

                {/* --- 3. Database / Server Rack (Bottom Left) --- */}
                <g className="pv-database">
                    <rect x="18" y="140" width="54" height="72" rx="8" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                    {/* Server Unit 1 */}
                    <rect x="23" y="146" width="44" height="12" rx="2" fill="var(--develop-editor-sidebar)" />
                    <circle cx="30" cy="152" r="2" fill="#27c93f" className="pv-db-led" />
                    <rect x="36" y="150" width="24" height="4" rx="1" fill="var(--develop-code-dim)" opacity="0.4" />
                    {/* Server Unit 2 */}
                    <rect x="23" y="162" width="44" height="12" rx="2" fill="var(--develop-editor-sidebar)" />
                    <circle cx="30" cy="168" r="2" fill="#27c93f" className="pv-db-led pv-db-led--delayed-1" />
                    <rect x="36" y="166" width="24" height="4" rx="1" fill="var(--develop-code-dim)" opacity="0.4" />
                    {/* Server Unit 3 */}
                    <rect x="23" y="178" width="44" height="12" rx="2" fill="var(--develop-editor-sidebar)" />
                    <circle cx="30" cy="184" r="2" fill="var(--color-interactive-default)" className="pv-db-led pv-db-led--delayed-2" />
                    <rect x="36" y="182" width="24" height="4" rx="1" fill="var(--develop-code-dim)" opacity="0.4" />
                    {/* Database icon label */}
                    <rect x="28" y="196" width="34" height="10" rx="2" fill="var(--develop-editor-header)" />
                    <text x="45" y="204" fill="var(--color-text-secondary)" fontSize="7" fontFamily="var(--font-primary)" textAnchor="middle" fontWeight="bold">DATA</text>
                </g>

                {/* --- 4. Animated Data Cables (Bezier curves connecting database to editor) --- */}
                <path d="M72 176 C 110 176, 110 220, 155 220" stroke="var(--develop-editor-border)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <path d="M72 176 C 110 176, 110 220, 155 220" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="8 60" fill="none" className="pv-data-pulse" />

                {/* --- 5. Main Editor Window Frame --- */}
                <g className="pv-editor-win">
                    <rect x="90" y="40" width="300" height="220" rx="12" fill="var(--develop-editor-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" />
                    
                    {/* Window Header / Window Controls */}
                    <rect x="90" y="40" width="300" height="30" rx="12" fill="var(--develop-editor-header)" stroke="var(--develop-editor-border)" strokeWidth="0" />
                    <circle cx="110" cy="55" r="4.5" fill="#ff5f56" />
                    <circle cx="122" cy="55" r="4.5" fill="#ffbd2e" />
                    <circle cx="134" cy="55" r="4.5" fill="#27c93f" />
                    <text x="240" y="60" fill="var(--color-text-placeholder)" fontSize="10" fontFamily="var(--font-primary)" textAnchor="middle" opacity="0.6">App.tsx</text>

                    {/* Sidebar area */}
                    <rect x="90" y="70" width="65" height="188" fill="var(--develop-editor-sidebar)" />
                    <rect x="100" y="85" width="35" height="7" rx="1.5" fill="var(--develop-code-dim)" opacity="0.4" />
                    <rect x="100" y="101" width="45" height="7" rx="1.5" fill="var(--develop-code-dim)" opacity="0.3" />
                    <rect x="100" y="117" width="30" height="7" rx="1.5" fill="var(--develop-code-dim)" opacity="0.3" />
                    <rect x="100" y="133" width="40" height="7" rx="1.5" fill="var(--color-interactive-default)" opacity="0.4" />
                    
                    {/* Code Lines Container */}
                    <g clipPath="url(#editorClip)">
                        <path d="M165 90 h 65" stroke="var(--develop-syntax-pink)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-1" />
                        <path d="M240 90 h 40" stroke="var(--develop-syntax-blue)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-2" />
                        
                        <path d="M165 108 h 95" stroke="var(--develop-syntax-amber)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-3" />
                        
                        <path d="M180 126 h 50" stroke="var(--develop-syntax-pink)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-4" />
                        
                        <path d="M195 144 h 110" stroke="var(--develop-syntax-green)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-5" />
                        
                        <path d="M210 162 h 115" stroke="var(--develop-syntax-indigo)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-6" />
                        
                        <path d="M195 180 h 30" stroke="var(--develop-syntax-green)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-7" />
                        
                        <path d="M180 198 h 20" stroke="var(--develop-syntax-pink)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-8" />
                        
                        <path d="M165 216 h 10" stroke="var(--develop-syntax-amber)" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" className="pv-code-line pv-code-9" />
                    </g>
                </g>

                {/* --- 6. Floating Browser Preview Window (Overlapping right) --- */}
                <g className="pv-preview-win">
                    <rect x="320" y="110" width="125" height="135" rx="8" fill="var(--develop-preview-bg)" stroke="var(--develop-editor-border)" strokeWidth="1.5" className="pv-preview-rect" />
                    <rect x="320" y="110" width="125" height="18" rx="8" fill="var(--develop-preview-header)" />
                    
                    <circle cx="330" cy="119" r="2" fill="var(--color-text-placeholder)" opacity="0.5" />
                    <circle cx="336" cy="119" r="2" fill="var(--color-text-placeholder)" opacity="0.5" />
                    
                    <path d="M335 190 L360 155 L380 170 L405 135 L430 165" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pv-chart-line" />
                    
                    <circle cx="405" cy="135" r="3.5" fill="var(--color-interactive-default)" className="pv-chart-pulse-point" />
                    <circle cx="405" cy="135" r="8" stroke="var(--color-interactive-default)" strokeWidth="1" fill="none" className="pv-chart-pulse-ring" />
                    
                    <rect x="335" y="210" width="35" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.5" />
                    <rect x="380" y="210" width="25" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
                </g>

                {/* --- 7. Compile Success Tooltip (Bottom Center) --- */}
                <g className="pv-tooltip">
                    <rect x="180" y="275" width="90" height="22" rx="11" fill="var(--develop-preview-bg)" stroke="var(--color-interactive-default)" strokeWidth="1" />
                    <circle cx="195" cy="286" r="3" fill="#27c93f" />
                    <text x="205" y="289" fill="var(--color-text-primary)" fontSize="8" fontWeight="600" fontFamily="var(--font-primary)">SUCCESS</text>
                </g>
            </svg>
        </div>
    );
}

function EvolveVisual() {
    return (
        <div className="pv-evolve">
            <div className="pv-pipeline">
                <div className="pv-pipeline-node pv-pipeline-node--done">
                    <div className="pv-pipeline-icon">
                        <Icon icon="solar:code-square-bold-duotone" />
                    </div>
                    <span>Build</span>
                </div>
                <div className="pv-pipeline-connector pv-pipeline-connector--done" />
                <div className="pv-pipeline-node pv-pipeline-node--done">
                    <div className="pv-pipeline-icon">
                        <Icon icon="solar:check-circle-bold-duotone" />
                    </div>
                    <span>Test</span>
                </div>
                <div className="pv-pipeline-connector pv-pipeline-connector--active" />
                <div className="pv-pipeline-node pv-pipeline-node--active">
                    <div className="pv-pipeline-icon pv-pipeline-icon--pulse">
                        <Icon icon="solar:rocket-2-bold-duotone" />
                    </div>
                    <span>Deploy</span>
                </div>
            </div>
            <div className="pv-metrics-row">
                <div className="pv-metric">
                    <span className="pv-metric-val pv-metric-val--green">99.9%</span>
                    <span className="pv-metric-label">Uptime</span>
                </div>
                <div className="pv-metric">
                    <span className="pv-metric-val pv-metric-val--blue">42ms</span>
                    <span className="pv-metric-label">Latency</span>
                </div>
                <div className="pv-metric">
                    <span className="pv-metric-val pv-metric-val--purple">0.01%</span>
                    <span className="pv-metric-label">Errors</span>
                </div>
            </div>
        </div>
    );
}

const stageVisuals = [DiscoverVisual, DesignVisual, DevelopVisual, EvolveVisual];

export default function ProcessSection() {
    const [activeStage, setActiveStage] = useState(0);
    const stage = processStages[activeStage];
    const ActiveVisual = stageVisuals[activeStage];

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
        const rx = -(dy / yc) * 4;
        const ry = (dx / xc) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };
    return (
        <section id="process" className="process-section section-padding">
            {/* Background Gradient Patterns */}
            <div className="process-bg-pattern-container" aria-hidden="true">
                {processStages.map((s, idx) => (
                    <div
                        key={s.id}
                        className={`process-bg-grid-pattern ${idx === activeStage ? 'is-active' : ''}`}
                        style={{
                            '--stage-color-rgb': s.id === 0
                                ? '99, 102, 241' // Indigo
                                : s.id === 1
                                ? '168, 85, 247' // Purple/Design
                                : s.id === 2
                                ? '20, 184, 166' // Teal/Develop
                                : '249, 115, 22'  // Orange/Deploy
                        }}
                    />
                ))}
                <div className="process-bg-pattern-overlay" />
            </div>

            <div className="process-container">
                {/* Section Header */}
                <div className="process-section-header">
                    <div>
                        <h2 className="process-section-title">
                            <span className="text-gray-400 font-normal">The product journey,</span><br />
                            simplified.
                        </h2>
                    </div>
                    <div className="process-section-desc">
                        <p className="font-semibold text-primary">A process built to grow ideas into scalable products.</p>
                        <p>We combine research, design, engineering, and deployment into a seamless workflow — so your product moves from concept to launch without friction.</p>
                    </div>
                </div>

                <div className="process-grid">

                    {/* ─── Left Column ─── */}
                    <div className="process-left-col">
                        <div className="process-header-info">
                            <div className="process-icon-row">
                                <div className="process-studio-icon" key={`icon-${activeStage}`}>
                                    <Icon icon={stage.icon} />
                                </div>
                                <span className="process-slash-tag" key={`tag-${activeStage}`}>
                                    // {stage.tag}
                                </span>
                            </div>



                            <div className="process-gradient-bar" aria-hidden="true" />

                            {/* Tab Selectors */}
                            <div className="process-tabs-wrapper">
                                <div className="process-tabs-list">
                                    {processStages.map((s, idx) => (
                                        <button
                                            key={s.id}
                                            className={`process-tab-btn ${idx === activeStage ? 'is-active' : ''}`}
                                            onClick={() => setActiveStage(idx)}
                                            aria-selected={idx === activeStage}
                                            role="tab"
                                        >
                                            <span className="process-tab-num">{s.number}</span>
                                            <span className="process-tab-name">{s.tabName}</span>
                                            {idx === activeStage && (
                                                <span className="process-tab-line-indicator" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── Right Column ─── */}
                    <div className="process-right-col">

                        {/* Interactive Visual Card */}
                        <div
                            className="process-visual-card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            key={`visual-card-${activeStage}`}
                        >
                            <div className="bento-card-spotlight" />
                            <div className="process-visual-inner">
                                <ActiveVisual />
                            </div>
                        </div>

                        {/* Stage Copy */}
                        <div className="process-explanation-area" key={`content-${activeStage}`}>
                            <div className="process-explanation-content animate-fade-in">
                                <span className="process-stage-num">{stage.number} {stage.title}</span>
                                <h3 className="process-stage-subtitle">{stage.subtitle}</h3>
                                <p className="process-stage-desc">{stage.description}</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}
