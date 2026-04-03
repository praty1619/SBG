import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './FranchiseJourney.css';

const vp = { once: true, amount: 0.15 };

const steps = [
    {
        num: '01',
        icon: '📋',
        title: 'Apply & Connect',
        desc: 'Fill a simple form. Our team reaches you within 24 hours to understand your goals, location, and investment capacity.',
        highlight: 'Response within 24 hrs',
        color: 'saffron',
    },
    {
        num: '02',
        icon: '📦',
        title: 'Receive Your Stock',
        desc: 'We deliver 30–40 curated, high-demand products straight to your store — pre-selected to move fast in any local market.',
        highlight: '30–40 products, Day 1',
        color: 'blue',
    },
    {
        num: '03',
        icon: '🎓',
        title: 'Train & Launch',
        desc: 'Complete our sales & customer handling training. We stay beside you through your grand opening and first 30 days.',
        highlight: 'Full launch support',
        color: 'green',
    },
    {
        num: '04',
        icon: '📈',
        title: 'Grow Together',
        desc: 'Quarterly reviews, 24/7 assistance, complaint resolution, and an expanding product range as your business scales.',
        highlight: '24/7 ongoing support',
        color: 'purple',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 44 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

export default function FranchiseJourney() {
    return (
        <Box component="section" className="journey-root" id="franchise">
            <Container maxWidth="lg">

                {/* ── Header ── */}
                <motion.div
                    className="journey-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">How It Works</span>
                    <h2 className="journey-heading">
                        Your Franchise Journey<br />
                        in <em className="heading-accent">4 Simple Steps</em>
                    </h2>
                    <p className="journey-intro">
                        From application to a fully running store — we handle the complexity
                        so you can focus on growing your business.
                    </p>
                </motion.div>

                {/* ── Steps row ── */}
                <motion.div
                    className="journey-steps"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <motion.div
                                className={`journey-card journey-card--${step.color}`}
                                variants={fadeUp}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                            >
                                {/* Step number */}
                                <div className="journey-num">{step.num}</div>

                                {/* Icon */}
                                <div className="journey-icon-wrap">
                                    <span className="journey-icon">{step.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="journey-title">{step.title}</h3>
                                <p className="journey-desc">{step.desc}</p>

                                {/* Highlight pill */}
                                <div className={`journey-highlight journey-highlight--${step.color}`}>
                                    <span className="journey-highlight-dot" />
                                    {step.highlight}
                                </div>

                                {/* Corner accent line */}
                                <div className={`journey-accent journey-accent--${step.color}`} />
                            </motion.div>

                            {/* Connector arrow between cards */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    className="journey-connector"
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.16 }}
                                    viewport={vp}
                                >
                                    <div className="connector-line" />
                                    <div className="connector-arrow">›</div>
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* ── Bottom CTA strip ── */}
                <motion.div
                    className="journey-cta-strip"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <div className="journey-cta-left">
                        <span className="journey-cta-emoji">🚀</span>
                        <div>
                            <p className="journey-cta-title">Ready to start your journey?</p>
                            <p className="journey-cta-sub">Join 500+ partners already growing with Shyama.</p>
                        </div>
                    </div>
                    <a href="#contact" className="journey-cta-btn">
                        Apply Now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>

            </Container>
        </Box>
    );
}