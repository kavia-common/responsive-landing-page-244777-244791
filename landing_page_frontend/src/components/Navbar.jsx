/**
 * Navbar component for the landing page.
 * Responsive navigation bar with site logo and section links.
 *
 * @module Navbar
 */

import React, { useState } from 'react';

/**
 * Navbar component with accessibility and responsive menu.
 *
 * @returns {JSX.Element}
 */
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleToggle() {
        setMenuOpen(!menuOpen);
    }

    function handleNavClick() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <nav className="container navbar__container" aria-label="Main navigation">
                <div className="navbar__logo">YourBrand</div>
                <button
                    className="navbar__toggle"
                    aria-controls="main-menu"
                    aria-expanded={menuOpen}
                    onClick={handleToggle}
                    aria-label="Toggle navigation menu"
                >
                    <span className="navbar__hamburger"/>
                </button>
                <ul className={`navbar__links${menuOpen ? ' open' : ''}`} id="main-menu">
                    <li><a href="#hero" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#features" onClick={handleNavClick}>Features</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
