'use client';

import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import theme from '@/app/style/theme';

const RegistrationPage = () => {
    // State variables for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photoURL: null, // Store file instead of URL
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photoURL: '',
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, photoURL: e.target.files[0] }); // Set the file object
        }
    };

    // Form submission handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const validationErrors = { ...errors };
        let valid = true;

        if (!formData.name) {
            validationErrors.name = 'Name is required';
            valid = false;
        } else {
            validationErrors.name = '';
        }

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

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        } else {
            validationErrors.confirmPassword = '';
        }

        if (!formData.photoURL) {
            validationErrors.photoURL = 'Photo is required';
            valid = false;
        } else {
            validationErrors.photoURL = '';
        }

        setErrors(validationErrors);

        if (valid) {
            // Handle form submission logic here (you can upload the file to a server or save it)
            console.log('Form data:', formData);
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
                        Create an Account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            sx={{ mb: 3 }}
                        />

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

                        {/* Confirm Password Field */}
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            sx={{ mb: 3 }}
                        />

                        {/* Photo URL Field with file upload (Using Box instead of Grid) */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box sx={{ flex: 1 }}>
                                <TextField
                                    fullWidth
                                    label="Photo URL"
                                    variant="outlined"
                                    margin="normal"
                                    name="photoURL"
                                    value={formData.photoURL ? formData.photoURL.name : ''}
                                    disabled
                                    error={!!errors.photoURL}
                                    helperText={errors.photoURL}
                                />
                            </Box>
                            <Box sx={{ ml: 2 }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        backgroundColor: '#F37021',
                                        '&:hover': { backgroundColor: '#E46016' },
                                        color: 'white',
                                        textTransform: 'none',
                                        padding: '12px 20px',
                                    }}
                                >
                                    Upload Photo
                                    <input
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={handleFileChange}
                                    />
                                </Button>
                            </Box>
                        </Box>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            sx={{
                                color: theme.palette.custom.fifth.white,
                                fontWeight: 'bold',
                                width: '100%',
                                marginTop: '1rem',
                                backgroundColor: '#F37021',
                                '&:hover': { backgroundColor: '#E46016' },
                                padding: '12px 0',
                                textTransform: 'none',
                            }}
                        >
                            Register
                        </Button>
                    </form>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            marginTop: '1rem',
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Have an account?{' '}
                        <Button
                            sx={{
                                textTransform: 'none',
                                padding: 0,
                                color: theme.palette.primary.main,
                            }}
                            onClick={() => window.location.href = '/sign-in'} // Replace with registration page link
                        >
                            Login here
                        </Button>
                    </Typography>
                </Box>

            </Container>

        </Box>
    );
};

export default RegistrationPage;
