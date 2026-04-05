import React, { useRef } from 'react';
import { Box, Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BrandsMarquee.css';

// ── Change this to your actual count of PNG files in /public ──
const BRAND_COUNT = 22;

const allBrands = Array.from({ length: BRAND_COUNT }, (_, i) => i + 1);

// Split into 4 rows for depth effect
const chunkSize = Math.ceil(BRAND_COUNT / 4);
const row1 = allBrands.slice(0, chunkSize);
const row2 = allBrands.slice(chunkSize, chunkSize * 2);
const row3 = allBrands.slice(chunkSize * 2, chunkSize * 3);
const row4 = allBrands.slice(chunkSize * 3);

// Pad short rows by repeating
const pad = (arr, min = 6) => {
    while (arr.length < min) arr = [...arr, ...arr];
    return arr;
};

const vp = { once: true, amount: 0.1 };

export default function BrandsMarquee() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Parallax Y per row — different amounts = 3D depth illusion
    const row1Y = useTransform(scrollYProgress, [0, 1], ['-40px', '40px']);
    const row2Y = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);
    const row3Y = useTransform(scrollYProgress, [0, 1], ['-30px', '30px']);
    const row4Y = useTransform(scrollYProgress, [0, 1], ['25px', '-25px']);

    // Header parallax
    const headY = useTransform(scrollYProgress, [0, 1], ['20px', '-40px']);

    return (
        <Box ref={sectionRef} component="section" className="bm-root" id="brands">

            {/* ── decorative elements ── */}
            <div className="bm-top-line" />
            <div className="bm-blob bm-blob--left" />
            <div className="bm-blob bm-blob--right" />
            <div className="bm-grid" />

            {/* ── header ── */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
                <motion.div
                    className="bm-header"
                    style={{ y: headY }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    viewport={vp}
                >
                    <span className="section-tag">Our Brand Partners</span>
                    <h2 className="bm-heading">
                        Trusted Brands,
                        <br />
                        <em className="heading-accent">Under One Roof</em>
                    </h2>
                    <p className="bm-sub">
                        Every product we supply comes from established Indian and global brands —
                        so your customers already trust what you're selling before you say a word.
                    </p>
                </motion.div>
            </Container>

            {/* ── marquee rows ── */}
            <div className="bm-rows-wrap">

                {/* Row 1 — scrolls LEFT, slowest */}
                <motion.div className="bm-row-parallax" style={{ y: row1Y }}>
                    <div className="bm-track bm-track--left bm-track--slow">
                        {[...pad(row1), ...pad(row1), ...pad(row1)].map((n, i) => (
                            <BrandTile key={`r1-${i}`} n={n} size="lg" />
                        ))}
                    </div>
                </motion.div>

                {/* Row 2 — scrolls RIGHT, medium speed */}
                <motion.div className="bm-row-parallax" style={{ y: row2Y }}>
                    <div className="bm-track bm-track--right bm-track--medium">
                        {[...pad(row2), ...pad(row2), ...pad(row2)].map((n, i) => (
                            <BrandTile key={`r2-${i}`} n={n} size="md" />
                        ))}
                    </div>
                </motion.div>

                {/* Row 3 — scrolls LEFT again, fastest */}
                <motion.div className="bm-row-parallax" style={{ y: row3Y }}>
                    <div className="bm-track bm-track--left bm-track--fast">
                        {[...pad(row3), ...pad(row3), ...pad(row3)].map((n, i) => (
                            <BrandTile key={`r3-${i}`} n={n} size="sm" />
                        ))}
                    </div>
                </motion.div>

                {/* Row 4 — scrolls RIGHT, slowest */}
                <motion.div className="bm-row-parallax" style={{ y: row4Y }}>
                    <div className="bm-track bm-track--right bm-track--medium">
                        {[...pad(row4), ...pad(row4), ...pad(row4)].map((n, i) => (
                            <BrandTile key={`r4-${i}`} n={n} size="md" />
                        ))}
                    </div>
                </motion.div>

                {/* Side fades */}
                <div className="bm-fade bm-fade--left" />
                <div className="bm-fade bm-fade--right" />
            </div>

            {/* ── stats strip ── */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
                <motion.div
                    className="bm-stats"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={vp}
                >
                    {[
                        { val: `${BRAND_COUNT}+`, label: 'Trusted Brands' },
                        { val: '50+', label: 'SKUs Available' },
                        { val: '100%', label: 'Genuine Products' },
                        { val: '₹0', label: 'Counterfeit Risk' },
                    ].map((s, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <div className="bm-stats-divider" />}
                            <div className="bm-stat">
                                <span className="bm-stat-val">{s.val}</span>
                                <span className="bm-stat-label">{s.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </motion.div>
            </Container>

        </Box>
    );
}

// ── Tile component ────────────────────────────────
function BrandTile({ n, size = 'md' }) {
    return (
        <motion.div
            className={`bm-tile bm-tile--${size}`}
            whileHover={{ y: -6, scale: 1.05 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            {/* White pill background — logos always visible regardless of color */}
            <div className="bm-tile-bg">
                <img
                    src={`/Brand/${n}.webp`}
                    alt={`Brand ${n}`}
                    className="bm-logo"
                    loading="lazy"
                    draggable={false}
                    onError={e => { e.currentTarget.style.opacity = '0'; }}
                />
            </div>
            {/* Hover glow ring */}
            <div className="bm-tile-ring" />
        </motion.div>
    );
}