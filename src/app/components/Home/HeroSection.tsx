'use client';

import theme from '@/app/style/theme';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

const HeroSection = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '30vh', sm: '40vh', md: '80vh' }, // Mobile-first approach
                    width: '100vw',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Background Image with Blur */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage:
                            'url("https://cdn.vectorstock.com/i/preview-1x/38/74/impression-management-concept-banner-header-vector-26683874.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                        zIndex: 1,
                    }}
                />

                {/* Dark overlay for better contrast */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: 2,
                    }}
                />

                {/* Foreground Text */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        color: theme.palette.custom.fifth.white,
                        px: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                            color: theme.palette.custom.fifth.white,
                        }}
                    >
                        Discover Incredible Events for Every Interest
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.5rem' },
                            mt: 1,
                        }}
                    >
                        Whether it's a tech talk, art exhibit, or fitness challenge — find the perfect event that suits your passion and make new connections.
                    </Typography>
                </Box>
            </Box>

            {/* Features Section */}
            <Box sx={{ py: 8, width: '100%' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                        Why Choose Our Event Platform?
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        <Box sx={{ textAlign: 'center', mb: 4, flex: '1 0 100%', sm: '1 0 30%' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                                Easy Event Creation
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Simply create an event by filling in details like time, location, and description. We handle the rest.
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', mb: 4, flex: '1 0 100%', sm: '1 0 30%' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                                Join Events in Seconds
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Find events based on your interests, join with a click, and start networking, learning, or enjoying.
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', mb: 4, flex: '1 0 100%', sm: '1 0 30%' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                               Join Events in Seconds
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Get real-time notifications on upcoming events, and stay informed about the latest in your field.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{
                py: 8, width: '100%',
                // backgroundColor: '#F1F5F9',
                zIndex: 1,
                position: 'relative',
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                        What Our Users Are Saying
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <Box sx={{ textAlign: 'center', mb: 4, flex: '1 0 100%', sm: '1 0 30%' }}>
                            <Avatar
                                alt="John Doe"
                                src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with real user photo
                                sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }}
                            />
                            <Typography variant="h6">John Doe</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                The platform is incredibly easy to use. I've joined numerous events and learned so much. The notifications keep me updated.
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', mb: 4, flex: '1 0 100%', sm: '1 0 30%' }}>
                            <Avatar
                                alt="Jane Smith"
                                src="https://randomuser.me/api/portraits/women/2.jpg" // Replace with real user photo
                                sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }}
                            />
                            <Typography variant="h6">Jane Smith</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                I created my first event through this platform. The whole process was smooth, and the platform took care of everything else!
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>


            {/* Background Section with backgroundColor instead of backgroundImage */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '30vh', sm: '40vh', md: '40vh' }, // Mobile-first approach
                    width: '100vw',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    overflow: 'hidden',
                    backgroundColor: '#F1F5F9', // Background color applied here
                }}
            >
                {/* Dark overlay for better contrast */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: 2,
                    }}
                />

                {/* Foreground Text */}
                <Box
                    sx={{
                        // backgroundColor: '#F37021',
                        color: 'white',
                        py: 6,
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Ready to Join or Create an Event?
                        </Typography>
                        <Typography variant="body1" sx={{
                            mb: 4,
                            color: theme.palette.custom.sixth[200],
                        }}

                        >
                            Whether you’re hosting or attending, our platform is designed to help you find the perfect event and make the most out of it.
                        </Typography>
                        <NextLink href="/events" passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.custom.fifth.white,
                                    padding: '12px 30px',
                                    borderRadius: '5px',
                                    '&:hover': { backgroundColor: '#E46016' },
                                }}
                            >
                                Explore Events
                            </Button>
                        </NextLink>
                    </Container>
                </Box>
            </Box>

        </Box>
    );
};

export default HeroSection;
