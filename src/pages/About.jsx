import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './About.css';

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};
const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } },
};
const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } },
};

const vp = { once: true, amount: 0.15 };

const pillars = [
    {
        tag: '🔭',
        title: 'Our Vision',
        body: "To build one of India's most trusted and fastest-growing franchise networks — empowering small business owners to grow into successful entrepreneurs across every city and town.",
        accent: 'saffron',
    },
    {
        tag: '🎯',
        title: 'Our Mission',
        body: 'Provide high-demand quality products, back every partner with real-time training and support, and ensure long-term profitability through structured growth plans.',
        accent: 'blue',
    },
    {
        tag: '💎',
        title: 'Our Quality',
        body: 'We supply trusted branded products, maintain full transparency, resolve complaints swiftly, and hold ourselves to the highest standards of service excellence.',
        accent: 'green',
    },
];

const storyBadges = [
    { icon: '🏅', label: '20+ Years Experience' },
    { icon: '📦', label: '40+ Essential Products' },
    { icon: '🌍', label: 'Pan-India Network' },
    { icon: '🤝', label: '500+ Active Partners' },
];

export default function About() {
    return (
        <Box component="section" className="about-root" id="about">
            <Container maxWidth="lg">

                {/* ── Section header ── */}
                <motion.div
                    className="about-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">Who We Are</span>
                    <h2 className="about-heading">
                        A Partner, Not Just<br />
                        a <em className="heading-accent">Supplier</em>
                    </h2>
                    <p className="about-intro">
                        Since 2004, Shyama Business Growth has been turning ordinary shops into
                        thriving franchise businesses. We believe every small entrepreneur deserves
                        the tools, products, and guidance of a big brand — without the big-brand price.
                    </p>
                </motion.div>

                {/* ── Pillars grid ── */}
                <motion.div
                    className="pillars-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {pillars.map((p, i) => (
                        <motion.div key={i} className={`pillar-card pillar--${p.accent}`} variants={fadeUp}>
                            <div className="pillar-icon-wrap">
                                <span className="pillar-icon">{p.tag}</span>
                            </div>
                            <h3 className="pillar-title">{p.title}</h3>
                            <p className="pillar-body">{p.body}</p>
                            <div className="pillar-line" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Story strip ── */}
                <div className="story-strip">
                    <motion.div
                        className="story-left"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={vp}
                    >
                        <span className="section-tag">Built for Bharat</span>
                        <h3 className="story-heading">
                            Empowering India's<br />
                            <em className="heading-accent">Smallest Shops</em>
                        </h3>
                        <p className="story-body">
                            From rural kirana stores to semi-urban multi-product outlets, our franchise
                            model lets <strong>anyone</strong> start with confidence. No complex systems,
                            no abandoned partners — just real support, real products, real growth.
                        </p>
                        <div className="story-badges">
                            {storyBadges.map((b, i) => (
                                <span key={i} className="story-badge">
                                    <span className="story-badge-icon">{b.icon}</span>
                                    {b.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-right"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={vp}
                    >
                        {/* Big number visual */}
                        <div className="story-big-card">
                            <div className="story-number-wrap">
                                <span className="story-big-num">20</span>
                                <div className="story-num-meta">
                                    <span className="story-plus">+</span>
                                    <span className="story-years-label">Years<br />of Trust</span>
                                </div>
                            </div>
                            <div className="story-divider" />
                            <div className="story-mini-stats">
                                <div className="story-mini">
                                    <span className="story-mini-val">2004</span>
                                    <span className="story-mini-label">Established</span>
                                </div>
                                <div className="story-mini">
                                    <span className="story-mini-val">500+</span>
                                    <span className="story-mini-label">Partners</span>
                                </div>
                                <div className="story-mini">
                                    <span className="story-mini-val">₹0</span>
                                    <span className="story-mini-label">Hidden Fees</span>
                                </div>
                            </div>
                            {/* Decorative ring */}
                            <div className="story-ring story-ring--outer" />
                            <div className="story-ring story-ring--inner" />
                        </div>
                    </motion.div>
                </div>

            </Container>
        </Box>
    );
}