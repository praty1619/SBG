import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './Contact.css';

const vp     = { once: true, amount: 0.12 };
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' });
  const [sent, setSent]   = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    // Replace with real API call
    setSent(true);
  };

  return (
    <Box component="section" className="contact-root" id="contact">

      {/* ── Diagonal saffron top band ── */}
      <div className="contact-band" />

      <Container maxWidth="lg" className="contact-inner">

        {/* Left — text */}
        <motion.div
          className="contact-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span className="section-tag-light">Start Today</span>
          <h2 className="contact-heading">
            Ready to Build Your<br />
            <em className="heading-accent-light">Dream Business?</em>
          </h2>
          <p className="contact-body">
            Fill in the form and our team will reach out within 24 hours.
            No pressure, no complicated process — just a conversation.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              <div>
                <p className="contact-info-label">Call Us</p>
                <p className="contact-info-value">+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">info@shyamabusiness.in</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <p className="contact-info-label">Base</p>
                <p className="contact-info-value">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          viewport={vp}
        >
          <div className="contact-form-card">
            {sent ? (
              <div className="contact-success">
                <span className="success-emoji">🎉</span>
                <h3>We've received your enquiry!</h3>
                <p>Our team will reach out within 24 hours. Welcome to the Shyama family!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <h3 className="form-title">Franchise Enquiry</h3>
                <p className="form-sub">Free consultation · No obligations</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Ravi Kumar"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handle}
                    placeholder="e.g. Guntur, Vijayawada"
                  />
                </div>

                <div className="form-group">
                  <label>Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={3}
                    placeholder="Tell us a bit about your business goals..."
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <p className="form-privacy">
                  🔒 Your information is 100% private and never shared.
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </Container>
    </Box>
  );
}
