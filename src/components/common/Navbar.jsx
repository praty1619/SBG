import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { scrollY } = useScroll();

    // Pill shrinks slightly when scrolled
    const pillWidth = useTransform(scrollY, [0, 120], ['96%', '82%']);
    const pillTop = useTransform(scrollY, [0, 120], ['20px', '12px']);
    const pillBlur = useTransform(scrollY, [0, 120], [12, 24]);   // used in class logic
    const pillBg = useTransform(
        scrollY,
        [0, 120],
        ['rgba(8,13,26,0.55)', 'rgba(8,13,26,0.88)']
    );
    const pillBorder = useTransform(
        scrollY,
        [0, 120],
        ['rgba(255,255,255,0.07)', 'rgba(232,132,26,0.25)']
    );

    return (
        <>
            {/* ── Fixed wrapper ──────────────────────────────── */}
            <Box className="navbar-outer">
                <motion.div
                    className="navbar-pill-wrapper"
                    style={{ width: pillWidth, top: pillTop }}
                >
                    <motion.nav
                        className="navbar-pill"
                        style={{ background: pillBg, borderColor: pillBorder }}
                    >

                        {/* Logo */}
                        <RouterLink to="/" className="nav-logo">
                            <div className="logo-gem">
                                <span>S</span>
                                <div className="logo-gem-shine" />
                            </div>
                            <div className="logo-wordmark">
                                <span className="logo-brand">SHYAMA</span>
                                <span className="logo-sub">Business Growth</span>
                            </div>
                        </RouterLink>

                        {/* Desktop links */}
                        <ul className="nav-links-list">
                            {navLinks.map((link) => {
                                const active = location.pathname === link.path;
                                return (
                                    <li key={link.title}>
                                        <RouterLink
                                            to={link.path}
                                            className={`nav-link ${active ? 'nav-link--active' : ''}`}
                                        >
                                            {link.title}
                                            {active && (
                                                <motion.span
                                                    className="nav-link-dot"
                                                    layoutId="nav-dot"
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                        </RouterLink>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* CTA */}
                        <RouterLink to="/contact" className="nav-cta">
                            <span>Become a Partner</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </RouterLink>

                        {/* Mobile hamburger */}
                        <IconButton
                            className="nav-hamburger"
                            onClick={() => setDrawerOpen(true)}
                            size="small"
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </motion.nav>
                </motion.div>
            </Box>

            {/* ── Mobile Drawer ──────────────────────────────── */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ className: 'nav-drawer' }}
            >
                <Box className="nav-drawer-inner">
                    <Box className="nav-drawer-header">
                        <span className="logo-brand" style={{ fontSize: '1.1rem', color: '#E8841A' }}>SHYAMA</span>
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#F0EBE1' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List className="nav-drawer-list">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={RouterLink}
                                        to={link.path}
                                        onClick={() => setDrawerOpen(false)}
                                        selected={location.pathname === link.path}
                                        className="nav-drawer-item"
                                    >
                                        <ListItemText primary={link.title} />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>

                    <RouterLink
                        to="/contact"
                        className="nav-drawer-cta"
                        onClick={() => setDrawerOpen(false)}
                    >
                        Become a Partner →
                    </RouterLink>
                </Box>
            </Drawer>
        </>
    );
}