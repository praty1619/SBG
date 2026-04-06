import React from 'react';
import { Box, Container } from '@mui/material';
import './Footer.css';

const footerLinks = {
    Company: ['About Us', 'Our Story', 'Careers', 'Press'],
    Franchise: ['How It Works', 'Products', 'Apply Now', 'Partner Login'],
    Support: ['24/7 Help', 'FAQs', 'Complaint Form', 'Contact Us'],
};

const socials = [
    { label: 'Facebook', href: '#', icon: 'f' },
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'YouTube', href: '#', icon: '▶' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
];

export default function Footer() {
    return (
        <Box component="footer" className="footer-root">
            <Container maxWidth="lg">

                {/* ── Main grid ── */}
                <div className="footer-grid">

                    {/* Brand column */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-gem">S</div>
                            <div>
                                <p className="footer-logo-name">SHYAMA</p>
                                <p className="footer-logo-sub">Business Growth</p>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Empowering India's entrepreneurs since 2004 with products, training,
                            and round-the-clock partner support.
                        </p>
                        <div className="footer-socials">
                            {socials.map(s => (
                                <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <div className="footer-estd-badge">
                            <span>⭐</span>
                            <span>Est. 2004 · Trusted for 25+ Years</span>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="footer-col">
                            <p className="footer-col-heading">{heading}</p>
                            <ul className="footer-col-links">
                                {links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="footer-link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact column */}
                    <div className="footer-col">
                        <p className="footer-col-heading">Get in Touch</p>
                        <div className="footer-contact-list">
                            <div className="footer-contact-item">
                                <span>📞</span>
                                <span>+91 62017 39296</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📧</span>
                                <span>info@shyamabusiness.in</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📍</span>
                                <span>Jharkhand, India</span>
                            </div>
                        </div>
                        <a href="#contact" className="footer-cta-btn">
                            Become a Partner →
                        </a>
                    </div>

                </div>

                {/* ── Divider ── */}
                <div className="footer-divider" />

                {/* ── Bottom bar ── */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Shyama Business Growth. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>·</span>
                        <a href="#">Terms of Use</a>
                        <span>·</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>

            </Container>
        </Box>
    );
}