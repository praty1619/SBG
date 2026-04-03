import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';

// ─────────────────────────────────────────────────────────────────────────────
// UPDATE img paths to match your /public/product/ folder
// e.g. img: '/product/1.png'  → public/product/1.png
// Set featured: true on whichever product you want in the big left slot
// ─────────────────────────────────────────────────────────────────────────────
const products = [
    {
        id: 1,
        name: 'Automotive Batteries',
        tagline: 'Power that never lets you down',
        desc: 'Trusted automotive & inverter batteries from top brands like Exide & Amara Raja. Long-lasting, reliable, and the first thing every customer asks for.',
        img: '/product/1.png',
        cat: 'Auto',
        tag: 'Top Seller',
        accent: '#E8841A',
        featured: true,
    },
    {
        id: 2,
        name: 'Premium Tyres',
        tagline: 'Every road, every vehicle',
        desc: 'All-terrain & highway tyres for two-wheelers and four-wheelers. High demand, high margin.',
        img: '/product/2.png',
        cat: 'Auto',
        tag: 'High Demand',
        accent: '#5B8DEF',
    },
    {
        id: 3,
        name: 'Engine Lubricants',
        tagline: 'Keep every engine running smooth',
        desc: 'Engine oils, gear oils & industrial lubricants. A repeat-purchase product with guaranteed monthly restocking.',
        img: '/product/3.png',
        cat: 'Auto',
        tag: null,
        accent: '#34D399',
    },
    {
        id: 4,
        name: 'Home Appliances',
        tagline: 'Quality for every household',
        desc: 'Geyser, mixers, irons & more. Everyday appliances that every Indian home needs — year round demand.',
        img: '/product/4.png',
        cat: 'Home',
        tag: 'Fast Moving',
        accent: '#A78BFA',
    },
    {
        id: 5,
        name: 'Safety Helmets',
        tagline: 'ISI certified, life protected',
        desc: 'Full-face and half-face helmets for two-wheeler riders. Mandatory product, guaranteed demand from day one.',
        img: '/product/5.png',
        cat: 'Safety',
        tag: 'Certified',
        accent: '#F87171',
    },
    {
        id: 6,
        name: 'Auto Spare Parts',
        tagline: 'OEM-grade, always in stock',
        desc: 'Reliable vehicle spares & accessories. Every garage and mechanic in your area is a ready customer.',
        img: '/product/6.png',
        cat: 'Auto',
        tag: null,
        accent: '#E8841A',
    },
    {
        id: 7,
        name: 'Kitchen Wares',
        tagline: 'Built for the kitchen',
        desc: 'High-quality gas stoves, induction cooktops, cookware & kitchen tools.',
        img: '/product/7.png',
        cat: 'Kitchen',
        tag: null,
        accent: '#5B8DEF',
    },
    {
        id: 8,
        name: 'LED Lighting',
        tagline: 'Bright, efficient, affordable',
        desc: "Energy-saving LED bulbs, batten lights & strips. India's fastest growing home product category.",
        img: '/product/8.png',
        cat: 'Home',
        tag: 'Eco Pick',
        accent: '#34D399',
    },
    {
        id: 9,
        name: 'Ceiling Fans',
        tagline: 'Cool, silent, energy-efficient',
        desc: "High-performance ceiling fans with modern designs, powerful airflow & energy-saving technology for every home.",
        img: '/product/9.png',
        cat: 'Home',
        tag: 'Top Choice',
        accent: '#60A5FA',
    },
];

const categories = ['All', 'Auto', 'Home', 'Safety', 'Kitchen'];

const vp = { once: true, amount: 0.1 };

export default function Products() {
    const [active, setActive] = useState('All');
    const [hovered, setHovered] = useState(null);

    const filtered = active === 'All'
        ? products
        : products.filter(p => p.cat === active);

    const featured = filtered.find(p => p.featured) ?? filtered[0];
    const rest = filtered.filter(p => p.id !== featured?.id);

    return (
        <Box component="section" className="prod-root" id="products">

            <div className="prod-top-line" />
            <div className="prod-bg-blob prod-bg-blob--tl" />
            <div className="prod-bg-blob prod-bg-blob--br" />

            <Container maxWidth="lg">

                {/* ── Header ── */}
                <motion.div
                    className="prod-header"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    viewport={vp}
                >
                    <span className="section-tag">What We Supply</span>
                    <h2 className="prod-heading">
                        30–40 Products,<br />
                        <em className="heading-accent">Ready from Day One</em>
                    </h2>
                    <p className="prod-intro">
                        Every franchise partner receives a curated starter stock of high-demand
                        products — pre-selected to sell fast in any local market.
                    </p>
                </motion.div>

                {/* ── Filter chips ── */}
                <motion.div
                    className="prod-filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                    viewport={vp}
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`prod-chip ${active === cat ? 'prod-chip--on' : ''}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* ── Magazine layout ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        className="prod-layout"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                    >

                        {/* ══ FEATURED card (left, tall) ══ */}
                        {featured && (
                            <motion.div
                                className="feat-card"
                                style={{ '--accent': featured.accent }}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.25 }}
                                onMouseEnter={() => setHovered(featured.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {/* Image */}
                                <div className="feat-img-wrap">
                                    <motion.img
                                        src={featured.img}
                                        alt={featured.name}
                                        className="feat-img"
                                        animate={{ scale: hovered === featured.id ? 1.07 : 1 }}
                                        transition={{ duration: 0.55, ease: 'easeOut' }}
                                        onError={e => {
                                            e.currentTarget.parentElement.classList.add('img-error');
                                        }}
                                    />
                                    {/* Dark gradient so text over image is always readable */}
                                    <div className="feat-overlay" />

                                    {/* Floating tag */}
                                    {featured.tag && (
                                        <span className="feat-badge">{featured.tag}</span>
                                    )}

                                    {/* Category */}
                                    <span className="feat-cat-pill">{featured.cat}</span>
                                </div>

                                {/* Body */}
                                <div className="feat-body">
                                    <p className="feat-tagline">{featured.tagline}</p>
                                    <h3 className="feat-name">{featured.name}</h3>
                                    <p className="feat-desc">{featured.desc}</p>
                                    <div className="feat-footer">
                                        <span
                                            className="feat-dot"
                                            style={{ background: featured.accent }}
                                        />
                                        <span className="feat-footer-label">Featured Product</span>
                                        <span
                                            className="feat-arrow"
                                            style={{ color: featured.accent }}
                                        >→</span>
                                    </div>
                                </div>

                                {/* Corner accent glow */}
                                <div className="feat-glow" />
                            </motion.div>
                        )}

                        {/* ══ Supporting grid (right side) ══ */}
                        <div className="prod-grid">
                            <AnimatePresence>
                                {rest.map((p, i) => (
                                    <motion.div
                                        key={p.id}
                                        className="prod-card"
                                        style={{ '--accent': p.accent }}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.93 }}
                                        transition={{ duration: 0.42, delay: i * 0.055 }}
                                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                        onMouseEnter={() => setHovered(p.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {/* Image zone */}
                                        <div className="card-img-wrap">
                                            <motion.img
                                                src={p.img}
                                                alt={p.name}
                                                className="card-img"
                                                animate={{ scale: hovered === p.id ? 1.1 : 1 }}
                                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                                onError={e => {
                                                    e.currentTarget.parentElement.classList.add('img-error');
                                                }}
                                            />
                                            <div className="card-overlay" />
                                            {p.tag && (
                                                <span className="card-badge">{p.tag}</span>
                                            )}
                                        </div>

                                        {/* Text zone */}
                                        <div className="card-body">
                                            <span className="card-cat">{p.cat}</span>
                                            <h3 className="card-name">{p.name}</h3>
                                            <p className="card-tagline">{p.tagline}</p>
                                        </div>

                                        {/* Accent bottom line — expands on hover */}
                                        <div className="card-line" />

                                        {/* Glow blob */}
                                        <div className="card-glow" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* ── Footnote ── */}
                <motion.div
                    className="prod-footnote"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={vp}
                >
                    <span className="prod-footnote-pulse" />
                    <p>More products added regularly as your franchise grows</p>
                </motion.div>

            </Container>
        </Box>
    );
}