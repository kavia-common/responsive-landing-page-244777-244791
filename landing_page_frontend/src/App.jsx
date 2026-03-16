/**
 * Main App component for the responsive landing page.
 * Contains the high-level layout: navbar, hero, features, contact, footer.
 *
 * @module App
 */

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * Root app component
 *
 * @returns {JSX.Element}
 */
function App() {
    return (
        <div className="app-bg">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
