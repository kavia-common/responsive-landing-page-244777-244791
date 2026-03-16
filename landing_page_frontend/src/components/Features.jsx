/**
 * Features section for the landing page.
 * Displays a grid of notable features, each with a name and description.
 *
 * @module Features
 */

import React from 'react';

/**
 * Array of feature objects ({name, description}) as required.
 */
const featuresList = [
    {
        name: 'Responsive Design',
        description: 'Adapts perfectly to any device for a seamless user experience.'
    },
    {
        name: 'Modern Tech Stack',
        description: 'Built with React 17, Vite, and best practices.'
    },
    {
        name: 'Lightning Fast',
        description: 'Optimized for performance with instant loading.'
    },
    {
        name: 'Easy to Customize',
        description: 'Clean structure and styles. Make it yours easily.'
    },
    {
        name: 'Accessible UI',
        description: 'Designed with accessibility and usability in mind.'
    },
    {
        name: 'Beautiful Accents',
        description: 'Vivid colors and accents for a fresh, modern look.'
    }
];

/**
 * Features section component.
 *
 * @returns {JSX.Element}
 */
function Features() {
    return (
        <section className="features" id="features">
            <div className="container features__container">
                <h2 className="features__title">Features</h2>
                <div className="features__grid">
                    {featuresList.map((feature) => (
                        <div className="feature-card" key={feature.name}>
                            <h3 className="feature-card__name">{feature.name}</h3>
                            <p className="feature-card__desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
