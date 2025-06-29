'use client';

import theme from '@/app/style/theme';
import {
    Box,
    Container,
    Stack,
    Link,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
} from '@mui/material';
import { useState } from 'react';
import logo from '../../assets/SquadroSoft_banner_df0ucp.png';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import Image from 'next/image';


const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Add Event', href: '/add-event' },
    { label: 'My Event', href: '/my-event' },
    { label: 'Sign In', href: '/sign-in' },
    { label: 'Sign Up', href: '/sign-up' },
];

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [loggedIn, setLoggedIn] = useState(true); // Assume user is logged in for demo
    const [username, setUsername] = useState('John Doe');
    const pathname = usePathname();
    const activeColor = '#F37021';

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isActive = (href: string) => {
        return href === pathname;
    };

    return (
        <Box
            sx={{
                py: 2,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                backgroundColor: '#fff',
                zIndex: 1100,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    marginX: 'auto',
                    overflowX: 'hidden',
                    [theme.breakpoints.up('xl')]: {
                        paddingX: '32px',
                        maxWidth: '1280px',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo */}
                    <Box display="flex" alignItems="center">
                        <NextLink href="/" passHref>
                            <Image
                                src={logo}
                                alt="Logo"
                                width={100}
                                height={50}
                                style={{ cursor: 'pointer' }}
                                priority // Optional, use if the image is critical for the page load
                            />
                        </NextLink>
                    </Box>

                    {/* Desktop Nav */}
                    <Box display="flex" alignItems="center">
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    component={NextLink}
                                    href={link.href}
                                    underline="none"
                                    sx={{
                                        fontWeight: isActive(link.href) ? 'bold' : 'medium',
                                        color: isActive(link.href) ? activeColor : 'text.primary',
                                        transition: 'color 0.3s',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>

                        {/* Profile Avatar and Menu */}
                        {loggedIn && (
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <IconButton onClick={handleMenuClick}>
                                    <Avatar>{username[0]}</Avatar>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem disabled>{username}</MenuItem>
                                    <MenuItem onClick={() => alert('Logging out...')}>Logout</MenuItem>
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
