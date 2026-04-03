import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/home/Hero';
import About from '../pages/About';
import Products from '../pages/Products';
import FranchiseJourney from '../pages/FranchiseJourney';
import WhyShyama from '../pages/WhyShyama';
import Contact from '../pages/Contact';

export default function Home() {
    return (
        <Box>
            <Hero />
            {/* Next sections plug in here */}
            <About/>
            <Products />
            <FranchiseJourney />
            <WhyShyama />
            <Contact />
        </Box>
    );
}