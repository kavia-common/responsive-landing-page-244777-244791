/**
 * Entry point for the React landing page app.
 * Replaces the Vite demo content and mounts the React app on #app.
 *
 * @module main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './style.css';

// PUBLIC_INTERFACE
function renderApp() {
    /**
     * Renders the main React app inside the #app div container.
     */
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('app')
    );
}

renderApp();
