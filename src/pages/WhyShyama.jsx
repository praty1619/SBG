import React, { useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './WhyShyama.css';

const vp     = { once: true, amount: 0.12 };
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const features = [
  { icon: '🕐', title: '24/7 Partner Support',    desc: 'Call us at midnight or noon — our team is always on standby for your business needs.',   color: 'saffron' },
  { icon: '📦', title: 'Ready Stock on Day 1',    desc: '30–40 in-demand products delivered to your store before you open your doors.',            color: 'blue'    },
  { icon: '🏆', title: 'Proven Since 2004',       desc: 'Two decades of franchise success across India — not a startup promise, a proven track.',  color: 'green'   },
  { icon: '📊', title: 'Structured Growth Plans', desc: 'Quarterly reviews, expansion roadmaps, and data-driven strategies built around you.',      color: 'purple'  },
  { icon: '🤝', title: 'Long-term Partnership',   desc: "We don't just supply products — we invest in your success and grow beside you always.",    color: 'saffron' },
  { icon: '🌾', title: 'Rural & Urban Ready',     desc: 'Our model lets small shops in any town compete confidently with big national brands.',     color: 'blue'    },
];

const testimonials = [
  { name: 'Ravi Kumar',      loc: 'Visakhapatnam, AP', rating: 5, text: 'Joining Shyama was the best business decision of my life. My shop revenue doubled in 8 months. The support team is incredible.' },
  { name: 'Priya Lakshmi',   loc: 'Nellore, AP',       rating: 5, text: 'As a first-time entrepreneur I was scared. Shyama\'s team held my hand throughout. The 24/7 support is real — they actually answer.' },
  { name: 'Mohammed Farhan', loc: 'Guntur, AP',         rating: 5, text: 'The initial stock package was smartly chosen — every product sells well. Recovered my investment in just 5 months.' },
  { name: 'Sunita Reddy',    loc: 'Kurnool, AP',        rating: 5, text: 'I run a small shop in a tier-3 town. Shyama gave me branded products and the confidence to grow. Now planning a second outlet.' },
  { name: 'Arjun Singh',     loc: 'Hyderabad, TS',      rating: 5, text: 'The training program was thorough and practical. I was ready to handle customers professionally from day one.' },
];

const Stars = ({ n = 5 }) => (
  <div className="stars">
    {Array.from({ length: n }).map((_, i) => (
      <span key={i} className="star">★</span>
    ))}
  </div>
);

export default function WhyShyama() {
  const stripRef = useRef(null);

  // Infinite auto-scroll
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let raf;
    let pos = 0;

    const tick = () => {
      pos += 0.45;
      const half = el.scrollWidth / 2;
      if (pos >= half) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Box component="section" className="why-root" id="why-us">
      <Container maxWidth="lg">

        {/* ── Header ── */}
        <motion.div
          className="why-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="why-heading">
            Everything You Need to<br />
            <em className="heading-accent">Succeed From Day One</em>
          </h2>
          <p className="why-intro">
            We've built every element of our franchise model around one goal —
            making sure every partner grows profitably and sustainably.
          </p>
        </motion.div>

        {/* ── Feature cards ── */}
        <motion.div
          className="why-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`why-card why-card--${f.color}`}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className="why-icon-wrap">
                <span className="why-icon">{f.icon}</span>
              </div>
              <h3 className="why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
              <div className={`why-line why-line--${f.color}`} />
            </motion.div>
          ))}
        </motion.div>

      </Container>

      {/* ── Testimonials strip — full width ── */}
      <Box className="testimonials-section" id="testimonials">
        <Container maxWidth="lg">
          <motion.div
            className="testimonials-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <span className="section-tag">Partner Stories</span>
            <h2 className="testi-heading">
              Real People,<em className="heading-accent"> Real Growth</em>
            </h2>
          </motion.div>
        </Container>

        {/* Scrolling strip */}
        <div className="testi-track-outer">
          <div className="testi-fade-left"  />
          <div className="testi-fade-right" />
          <div className="testi-track-inner" ref={stripRef}>
            {/* Double the cards for seamless loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testi-card">
                <Stars n={t.rating} />
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testi-name">{t.name}</p>
                    <p className="testi-loc">📍 {t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Box>
  );
}
