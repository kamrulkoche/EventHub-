'use client';

import theme from '@/app/style/theme';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = { ...errors };
        let valid = true;

        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            validationErrors.email = 'Valid email is required';
            valid = false;
        } else {
            validationErrors.email = '';
        }

        if (!formData.password || formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
            valid = false;
        } else {
            validationErrors.password = '';
        }

        setErrors(validationErrors);

        if (valid) {
            try {
                const response = await axios.post('https://de-event-management-server.vercel.app/api/auth/login', {
                    email: formData.email,
                    password: formData.password,
                });


                if (response.data.success) {
                    const token = response.data.data.token;
                    document.cookie = `token=${token}; path=/;`;
                    console.log('Login successful!', response.data.message);
                    window.location.href = '/';
                } else {
                    console.error('Login failed:', response.data.message);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '12px',
                        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                        Sign In to Your Account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ mb: 3 }}
                        />

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            sx={{ mb: 3 }}
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: '100%',
                                color: theme.palette.custom.fifth.white,
                                fontWeight: 'bold',
                                marginTop: '1rem',
                                backgroundColor: '#F37021',
                                '&:hover': { backgroundColor: '#E46016' },
                                padding: '12px 0',
                                textTransform: 'none',
                            }}
                        >
                            Sign In
                        </Button>

                        {/* Register Link */}
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: '1rem',
                                color: theme.palette.text.secondary,
                            }}
                        >
                            Do not have an account?{' '}
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    padding: 0,
                                    color: theme.palette.primary.main,
                                }}
                                onClick={() => window.location.href = '/sign-up'} // Replace with registration page link
                            >
                                Register here
                            </Button>
                        </Typography>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default SignInPage;
