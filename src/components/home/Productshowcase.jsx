import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductShowcase.css';

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES + IMAGES
// Each image path maps to your /public/showcase/ folder.
// Name your files however you like — just update the paths below.
// Each category has a color accent, icon, count label, and array of images.
// The 'span' property controls grid size: 'lg' = big cell, 'md' = medium, 'sm' = small
// ─────────────────────────────────────────────────────────────────────────────
const categories = [
    {
        id: 'tyres',
        label: 'Tyres',
        icon: '🏎️',
        count: '12 SKUs',
        accent: '#E8841A',
        desc: 'All-terrain, highway & two-wheeler tyres',
        images: [
            { src: '/showcase/tyres-1.png', span: 'lg', label: 'Agricultural Tyres' },
            { src: '/showcase/tyres-2.png', span: 'md', label: 'Highway Tyres' },
            { src: '/showcase/tyres-3.png', span: 'sm', label: 'Bike Tyres' },
            { src: '/showcase/tyres-4.png', span: 'sm', label: 'SUV Tyres' },
        ],
    },
    {
        id: 'cooling',
        label: 'Cooling',
        icon: '❄️',
        count: '8 SKUs',
        accent: '#5B8DEF',
        desc: 'Air coolers, AC units & refrigerators',
        images: [
            { src: '/showcase/cooling-1.png', span: 'lg', label: 'Desert Coolers' },
            { src: '/showcase/cooling-2.png', span: 'md', label: 'Tower Coolers' },
            { src: '/showcase/cooling-3.png', span: 'sm', label: 'Room AC' },
            { src: '/showcase/cooling-4.png', span: 'sm', label: 'Geyser' },
        ],
    },
    {
        id: 'power',
        label: 'Power',
        icon: '🔋',
        count: '10 SKUs',
        accent: '#34D399',
        desc: 'Batteries, inverters & UPS systems',
        images: [
            { src: '/showcase/power-1.png', span: 'lg', label: 'Inverter Batteries' },
            { src: '/showcase/power-2.png', span: 'md', label: 'UPS Systems' },
            { src: '/showcase/power-3.png', span: 'sm', label: 'Auto Batteries' },
            { src: '/showcase/power-4.png', span: 'sm', label: 'Engine Oils' },
        ],
    },
    {
        id: 'kitchen',
        label: 'Kitchen',
        icon: '🍳',
        count: '9 SKUs',
        accent: '#F87171',
        desc: 'Appliances, cookware & gas stoves',
        images: [
            { src: '/showcase/kitchen-1.png', span: 'lg', label: 'Mixer Grinders' },
            { src: '/showcase/kitchen-2.png', span: 'md', label: 'Gas Stoves' },
            { src: '/showcase/kitchen-3.png', span: 'sm', label: 'Induction Cook' },
            { src: '/showcase/kitchen-4.png', span: 'sm', label: 'Milton Wares' },
        ],
    },
    {
        id: 'lighting',
        label: 'Lighting & Safety',
        icon: '💡',
        count: '11 SKUs',
        accent: '#A78BFA',
        desc: 'LED lights, fans & safety helmets',
        images: [
            { src: '/showcase/lighting-1.png', span: 'lg', label: 'Ceiling Fans' },
            { src: '/showcase/lighting-2.png', span: 'md', label: 'LED Bulbs' },
            { src: '/showcase/lighting-3.png', span: 'sm', label: 'Table Fans' },
            { src: '/showcase/lighting-4.png', span: 'sm', label: 'Helmets' },
        ],
    },
];

const totalSKUs = categories.reduce((s, c) => s + parseInt(c.count), 0);

const vp = { once: true, amount: 0.1 };

const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const imgVariants = {
    hidden: { opacity: 0, scale: 0.88, y: 24 },
    visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
        opacity: 0, scale: 0.92, y: -16,
        transition: { duration: 0.28 }
    },
};

export default function ProductShowcase() {
    const [active, setActive] = useState(categories[0].id);
    const current = categories.find(c => c.id === active);

    return (
        <Box component="section" className="showcase-root" id="showcase">

            {/* decorative */}
            <div className="showcase-top-line" />
            <div className="showcase-blob showcase-blob--tl" />
            <div className="showcase-blob showcase-blob--br" />

            <Container maxWidth="lg">

                {/* ── Header ── */}
                <motion.div
                    className="showcase-header"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    viewport={vp}
                >
                    <span className="section-tag">Complete Range</span>
                    <h2 className="showcase-heading">
                        Everything Your Store Needs,<br />
                        <em className="heading-accent">In One Partnership</em>
                    </h2>
                    <p className="showcase-sub">
                        Tyres for every vehicle. Cooling for every home. Power for every need.
                        Kitchen essentials. Lighting & safety — all through one trusted partner.
                    </p>

                    {/* Total SKU pill */}
                    <div className="showcase-sku-pill">
                        <span className="sku-num">{totalSKUs}+</span>
                        <span className="sku-label">Product SKUs across all categories</span>
                    </div>
                </motion.div>

                {/* ── Main layout ── */}
                <motion.div
                    className="showcase-layout"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    viewport={vp}
                >

                    {/* ── Left sidebar — category tabs ── */}
                    <div className="showcase-sidebar">
                        <p className="sidebar-eyebrow">Browse by category</p>

                        {categories.map(cat => {
                            const isActive = cat.id === active;
                            return (
                                <motion.button
                                    key={cat.id}
                                    className={`sidebar-tab ${isActive ? 'sidebar-tab--active' : ''}`}
                                    style={{ '--accent': cat.accent }}
                                    onClick={() => setActive(cat.id)}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {/* Active indicator bar */}
                                    {isActive && (
                                        <motion.div
                                            className="tab-bar"
                                            layoutId="tab-bar"
                                            style={{ background: cat.accent }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    <span className="tab-icon">{cat.icon}</span>

                                    <div className="tab-text">
                                        <span className="tab-label">{cat.label}</span>
                                        <span className="tab-count">{cat.count}</span>
                                    </div>

                                    {isActive && (
                                        <motion.span
                                            className="tab-arrow"
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            style={{ color: cat.accent }}
                                        >
                                            →
                                        </motion.span>
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* Sidebar bottom card */}
                        <div className="sidebar-cta">
                            <p className="sidebar-cta-title">Want the full catalogue?</p>
                            <p className="sidebar-cta-sub">Get our complete product list with pricing.</p>
                            <a href="#contact" className="sidebar-cta-btn">
                                Request Catalogue →
                            </a>
                        </div>
                    </div>

                    {/* ── Right — image showcase ── */}
                    <div className="showcase-right">

                        {/* Category header */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + '-header'}
                                className="showcase-cat-header"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="cat-header-left">
                                    <span
                                        className="cat-header-dot"
                                        style={{
                                            background: current.accent,
                                            boxShadow: `0 0 12px ${current.accent}80`
                                        }}
                                    />
                                    <h3 className="cat-header-title" style={{ color: current.accent }}>
                                        {current.label}
                                    </h3>
                                    <span className="cat-header-count">{current.count}</span>
                                </div>
                                <p className="cat-header-desc">{current.desc}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Image masonry grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + '-grid'}
                                className="showcase-grid"
                                variants={gridVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {current.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className={`showcase-cell showcase-cell--${img.span}`}
                                        variants={imgVariants}
                                    >
                                        <ShowcaseImage
                                            src={img.src}
                                            label={img.label}
                                            accent={current.accent}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </motion.div>

            </Container>
        </Box>
    );
}

// ── Individual image cell ─────────────────────────
function ShowcaseImage({ src, label, accent }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="showcase-img-wrap"
            style={{ '--accent': accent }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Glow ring behind image */}
            <div
                className="img-glow-ring"
                style={{ opacity: hovered ? 1 : 0, boxShadow: `0 0 40px 8px ${accent}40` }}
            />

            <motion.img
                src={src}
                alt={label}
                className="showcase-img"
                animate={{ scale: hovered ? 1.06 : 1, y: hovered ? -4 : 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onError={e => { e.currentTarget.style.opacity = '0.15'; }}
                draggable={false}
            />

            {/* Label on hover */}
            <motion.div
                className="img-label"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
                transition={{ duration: 0.22 }}
            >
                {label}
            </motion.div>

            {/* Accent corner dot */}
            <div className="img-corner-dot" style={{ background: accent }} />
        </div>
    );
}