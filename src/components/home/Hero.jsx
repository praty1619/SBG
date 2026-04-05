import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Hero.css';

// Stagger variants
const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const item = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stats = [
    { value: '25+', label: 'Years' },
    { value: '87+', label: 'Partners' },
    { value: '50+', label: 'Products' },
    { value: '24/7', label: 'Support' },
];

const productTags = ['🔋 Batteries', '🏎️ Tyres', '🛢️ Lubricants', '⛑️ Helmets', '🏠 Appliances', '⚙️ Auto Parts'];

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

    // Parallax: left text drifts up slower, right visual drifts down
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
    const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

    return (
        <Box ref={ref} className="hero-root">

            {/* ── Background: deep dark with subtle grain ──── */}
            <div className="hero-bg">
                <div className="hero-grain" />

                {/* Diagonal saffron slash — the design centerpiece */}
                <motion.div
                    className="hero-slash"
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
                />

                {/* Glow blobs */}
                <div className="hero-glow hero-glow--left" />
                <div className="hero-glow hero-glow--right" />

                {/* Subtle dot matrix */}
                <div className="hero-dots" />
            </div>

            {/* ── Content ───────────────────────────────────── */}
            <Container maxWidth="xl" className="hero-container">

                {/* ── Left column ── */}
                <motion.div
                    className="hero-left"
                    style={{ y: textY }}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={item}>
                        <div className="hero-badge">
                            <span className="hero-badge-dot" />
                            <span>Est. 2004 &nbsp;·&nbsp; Trusted Across India</span>
                        </div>
                    </motion.div>

                    {/* Giant headline — editorial split across two lines */}
                    <motion.div variants={item}>
                        <h1 className="hero-headline">
                            <span className="headline-line headline-line--dim">Build Your</span>
                            <br />
                            <span className="headline-line headline-line--glow">Dream</span>
                            <span className="headline-line headline-line--outline"> Business</span>
                            <br />
                            <span className="headline-line headline-line--dim">With Confidence</span>
                        </h1>
                    </motion.div>

                    {/* Body */}
                    <motion.p className="hero-body" variants={item}>
                        Shyama Business Growth hands you <strong>ready stock</strong>, real training,
                        and round-the-clock support — so you never grow alone.
                    </motion.p>

                    {/* CTA row */}
                    <motion.div variants={item}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="hero-cta-row">
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                href="/contact"
                                className="btn-primary-hero"
                            >
                                Start Your Franchise
                            </Button>

                            <Button
                                variant="text"
                                size="large"
                                startIcon={
                                    <span className="play-ring">
                                        <PlayArrowIcon sx={{ fontSize: 16 }} />
                                    </span>
                                }
                                className="btn-ghost-hero"
                            >
                                See How It Works
                            </Button>
                        </Stack>
                    </motion.div>

                    {/* Product tags */}
                    <motion.div className="hero-tags" variants={item}>
                        {productTags.map((tag, i) => (
                            <motion.span
                                key={i}
                                className="product-tag"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Right column ── */}
                <motion.div
                    className="hero-right"
                    style={{ y: visualY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                >
                    {/* The main visual: stats card + orbiting elements */}
                    <div className="hero-visual-wrap">

                        {/* Central card */}
                        <div className="hero-card">
                            <div className="hero-card-top">
                                <span className="card-pulse" />
                                <span className="card-live">Live · Franchise Hub</span>
                            </div>

                            <div className="card-headline">
                                ₹5L – ₹25L
                                <span className="card-headline-sub">Potential / Month</span>
                            </div>

                            {/* Progress bars */}
                            <div className="card-bars">
                                {[
                                    { label: 'Partner Growth', pct: 87, color: '#E8841A' },
                                    { label: 'Product Range', pct: 72, color: '#5B8DEF' },
                                    { label: 'Support Score', pct: 96, color: '#34D399' },
                                ].map((bar, i) => (
                                    <div key={i} className="card-bar-row">
                                        <div className="card-bar-meta">
                                            <span className="card-bar-label">{bar.label}</span>
                                            <span className="card-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span>
                                        </div>
                                        <div className="card-bar-track">
                                            <motion.div
                                                className="card-bar-fill"
                                                style={{ background: bar.color }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${bar.pct}%` }}
                                                transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="card-footer">
                                <div className="card-avatars">
                                    {['R', 'P', 'M', 'S'].map((l, i) => (
                                        <div key={i} className="card-avatar" style={{ background: `hsl(${20 + i * 35},70%,50%)` }}>{l}</div>
                                    ))}
                                </div>
                                <span className="card-footer-text">87+ partners growing</span>
                            </div>
                        </div>

                        {/* Floating badges — orbit the card */}
                        <motion.div
                            className="orbit-badge orbit-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Batteries
                        </motion.div>

                        <motion.div
                            className="orbit-badge orbit-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                            50+ Products
                        </motion.div>

                        <motion.div
                            className="orbit-badge orbit-3"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            24/7 Support
                        </motion.div>

                        {/* Decorative ring */}
                        <div className="hero-ring hero-ring--outer" />
                        <div className="hero-ring hero-ring--inner" />
                    </div>
                </motion.div>
            </Container>

            {/* ── Stats strip ───────────────────────────────── */}
            <motion.div
                className="hero-stats-strip"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
            >
                <Container maxWidth="xl">
                    <div className="hero-stats-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="hero-stat">
                                <span className="hero-stat-value">{s.value}</span>
                                <span className="hero-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </motion.div>

        </Box>
    );
}