/**
 * Footer component for the landing page.
 * Displays copyright and navigation.
 *
 * @module Footer
 */

import React from 'react';

/**
 * Footer component.
 *
 * @returns {JSX.Element}
 */
function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <span className="footer__text">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</span>
                <nav className="footer__nav" aria-label="Footer navigation">
                    <a href="#hero">Home</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
