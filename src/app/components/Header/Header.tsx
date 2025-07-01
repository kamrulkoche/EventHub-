'use client';

import theme from '@/app/style/theme';
import {
    Avatar,
    Box,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Stack,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../assets/SquadroSoft_banner_df0ucp.png';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Add Event', href: '/add-event' },
    { label: 'My Event', href: '/my-event' },

];

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [loggedIn, setLoggedIn] = useState(true);
    const username = 'John Doe';
    const pathname = usePathname();
    const activeColor = '#F37021';

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Remove the token cookie
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

        setLoggedIn(false);
        setAnchorEl(null);
        alert('Logging out...');
    };

    const isActive = (href: string) => {
        return href === pathname;
    };

    useEffect(() => {
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('token='))
            ?.split('=')[1];
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

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
                                priority
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

                            {!loggedIn && (
                                <>
                                    <Link
                                        key={"sign-in"}
                                        component={NextLink}
                                        href={"/sign-in"}
                                        underline="none"
                                        sx={{
                                            fontWeight: isActive("/sign-in") ? 'bold' : 'medium',
                                            color: isActive("/sign-in") ? activeColor : 'text.primary',
                                            transition: 'color 0.3s',
                                        }}
                                    >
                                        {"Sign-in"}
                                    </Link>
                                    <Link
                                        key={"sign-up"}
                                        component={NextLink}
                                        href={"/sign-up"}
                                        underline="none"
                                        sx={{
                                            fontWeight: isActive("/sign-up") ? 'bold' : 'medium',
                                            color: isActive("/sign-up") ? activeColor : 'text.primary',
                                            transition: 'color 0.3s',
                                        }}
                                    >
                                        {"Sign-up"}
                                    </Link>
                                </>
                            )}
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
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
