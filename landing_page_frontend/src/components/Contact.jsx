/**
 * Contact section for the landing page.
 * Includes a simple contact form (no functional backend).
 *
 * @module Contact
 */

import React, { useState } from 'react';

/**
 * Contact section component.
 *
 * @returns {JSX.Element}
 */
function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    /**
     * Handle form field changes.
     *
     * @param {Object} e - Event
     */
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    /**
     * Handle form submission (dummy).
     *
     * @param {Object} e - Event
     */
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        // Here, you would call a backend or API if needed.
        setTimeout(() => setSubmitted(false), 2500);
    }

    return (
        <section className="contact" id="contact">
            <div className="container contact__container">
                <h2 className="contact__title">Contact Us</h2>
                <form className="contact__form" onSubmit={handleSubmit} autoComplete="off" aria-label="Contact form">
                    <label htmlFor="contact-name" className="contact__label">Name</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="contact__input"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                    />

                    <label htmlFor="contact-email" className="contact__label">Email</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="contact__input"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />

                    <label htmlFor="contact-message" className="contact__label">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        className="contact__input"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                    <button type="submit" className="contact__btn">
                        Send Message
                    </button>
                    {submitted && <div className="contact__success" role="status">Message submitted!</div>}
                </form>
            </div>
        </section>
    );
}

export default Contact;
