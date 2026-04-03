import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import CountUp from 'react-countup';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const statsData = [
    {
        icon: <PeopleAltIcon sx={{ fontSize: 32, color: '#1E3A8A' }} />,
        end: 150,
        suffix: '+',
        label: 'Partners',
    },
    {
        icon: <Inventory2Icon sx={{ fontSize: 32, color: '#1E3A8A' }} />,
        end: 40,
        suffix: '+',
        label: 'Products',
    },
    {
        icon: <AccessTimeIcon sx={{ fontSize: 32, color: '#1E3A8A' }} />,
        end: 15,
        suffix: ' Yrs',
        label: 'Experience',
    },
    {
        icon: <CurrencyRupeeIcon sx={{ fontSize: 32, color: '#D97706' }} />,
        end: 5,
        suffix: 'L+',
        label: 'Revenue Potential',
        highlight: true, // We'll use this to make the revenue pop!
    },
];

const StatsStrip = () => {
    return (
        <Box sx={{ position: 'relative', mt: { xs: 4, md: -6 }, zIndex: 10, px: 2 }}>
            <Container maxWidth="lg">
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: '20px',
                        py: 4,
                        px: 2,
                        bgcolor: '#ffffff',
                        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.08)'
                    }}
                >
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {statsData.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                                    {/* Icon Box */}
                                    <Box
                                        sx={{
                                            p: 1.5,
                                            borderRadius: '50%',
                                            bgcolor: stat.highlight ? '#FEF3C7' : '#EFF6FF',
                                            mb: 2
                                        }}
                                    >
                                        {stat.icon}
                                    </Box>

                                    {/* Animated Number */}
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 800,
                                            color: stat.highlight ? '#D97706' : '#1E3A8A',
                                            fontFamily: '"Inter", sans-serif'
                                        }}
                                    >
                                        <CountUp
                                            start={0}
                                            end={stat.end}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                            enableScrollSpy={true} // Automatically triggers when scrolled into view!
                                            scrollSpyOnce={true}   // Only animates once so it doesn't get annoying
                                        />
                                    </Typography>

                                    {/* Label */}
                                    <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, mt: 0.5 }}>
                                        {stat.label}
                                    </Typography>

                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default StatsStrip;