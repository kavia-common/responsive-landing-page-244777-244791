/**
 * Hero section for the landing page.
 * Contains headline, subtext, and CTA button.
 *
 * @module Hero
 */

import React from 'react';

/**
 * Hero section component.
 *
 * @returns {JSX.Element}
 */
function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero__container">
                <h1 className="hero__title">
                    Welcome to <span className="hero__brand">YourBrand</span>
                </h1>
                <p className="hero__subtitle">
                    Build fast, modern websites with ease. Lightweight. Customizable. Powerful.
                </p>
                <a href="#features" className="hero__cta">
                    Learn More
                </a>
            </div>
        </section>
    );
}

export default Hero;
