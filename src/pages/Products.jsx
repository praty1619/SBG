import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';

const categories = ['All', 'Auto', 'Home', 'Safety', 'Tools'];

const products = [
    { name: 'Automotive Batteries', icon: '🔋', desc: 'Trusted automotive & inverter batteries from top brands.', cat: 'Auto', tag: 'Top Seller' },
    { name: 'Premium Tyres', icon: '🏎️', desc: 'All-terrain & highway tyre range for every vehicle type.', cat: 'Auto', tag: 'High Demand' },
    { name: 'Engine Lubricants', icon: '🛢️', desc: 'Engine oils, gear oils & industrial lubricants.', cat: 'Auto', tag: null },
    { name: 'Home Appliances', icon: '🏠', desc: 'Quality appliances — fans, mixers, irons & more.', cat: 'Home', tag: 'Fast Moving' },
    { name: 'Safety Helmets', icon: '⛑️', desc: 'ISI-certified helmets for two-wheeler riders.', cat: 'Safety', tag: 'Certified' },
    { name: 'Auto Spare Parts', icon: '⚙️', desc: 'Reliable OEM-grade spares & vehicle accessories.', cat: 'Auto', tag: null },
    { name: 'Power Tools', icon: '🔧', desc: 'Professional-grade drills, grinders & hand tools.', cat: 'Tools', tag: null },
    { name: 'LED Lighting', icon: '💡', desc: 'Energy-saving LED bulbs, strips & industrial lights.', cat: 'Home', tag: 'Eco Pick' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

const headerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const vp = { once: true, amount: 0.12 };

export default function Products() {
    const [active, setActive] = useState('All');

    const filtered = active === 'All'
        ? products
        : products.filter(p => p.cat === active);

    return (
        <Box component="section" className="products-root" id="products">
            <Container maxWidth="lg">

                {/* ── Header ── */}
                <motion.div
                    className="products-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">What We Supply</span>
                    <h2 className="products-heading">
                        30–40 Products,<br />
                        <em className="heading-accent">Ready from Day One</em>
                    </h2>
                    <p className="products-intro">
                        Every franchise partner receives a curated starter stock of high-demand
                        products — chosen to sell fast in any local market.
                    </p>
                </motion.div>

                {/* ── Filter chips ── */}
                <motion.div
                    className="filter-chips"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={vp}
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-chip ${active === cat ? 'filter-chip--active' : ''}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* ── Grid ── */}
                <motion.div className="products-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((product, i) => (
                            <motion.div
                                key={product.name}
                                className="product-card"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                {/* Tag badge */}
                                {product.tag && (
                                    <span className="product-tag-badge">{product.tag}</span>
                                )}

                                {/* Icon */}
                                <div className="product-icon-wrap">
                                    <span className="product-icon">{product.icon}</span>
                                    <div className="product-icon-glow" />
                                </div>

                                {/* Text */}
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-desc">{product.desc}</p>

                                {/* Category chip */}
                                <span className="product-cat">{product.cat}</span>

                                {/* Hover border glow — via CSS */}
                                <div className="product-card-glow" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── Bottom note ── */}
                <motion.p
                    className="products-footnote"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={vp}
                >
                    + many more products added regularly as your franchise grows 🚀
                </motion.p>

            </Container>
        </Box>
    );
}