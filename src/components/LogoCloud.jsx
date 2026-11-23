import React from 'react';
import { Icon } from '@iconify/react';
import { projects } from '../data/projects';
import '../index.css';

export default function LogoCloud() {
    const logos = projects.map((p) => ({ icon: p.icon, name: p.client }));

    // Each half repeats the list so it is wider than large screens (up to ~2560px).
    // The track holds two identical halves and slides by exactly one half, so the loop is seamless.
    const half = Array.from({ length: 5 }, () => logos).flat();

    return (
        <section className="logo-cloud-section border-y border-border py-8 overflow-hidden w-full" aria-label="Our clients">
            <span className="logo-cloud-label text-sm font-medium text-gray-500 text-center">
                Trusted by growing businesses
            </span>

            <div className="logo-marquee-container w-full overflow-hidden">
                <div className="logo-marquee-track" aria-hidden="true">
                    {[0, 1].map((h) => (
                        <div key={h} className="marquee-group">
                            {half.map((logo, idx) => (
                                <div key={idx} className="logo-item flex items-center gap-2 font-semibold">
                                    <Icon icon={logo.icon} className="text-xl" />
                                    {logo.name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <ul className="sr-only">
                    {logos.map((l) => <li key={l.name}>{l.name}</li>)}
                </ul>
            </div>
        </section>
    );
}
