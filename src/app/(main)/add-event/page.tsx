"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import theme from '@/app/style/theme';

const AddEventPage = () => {
    // State for form fields
    const [eventData, setEventData] = useState({
        title: '',
        postedBy: '',
        date: '',
        location: '',
        description: '',
        attendeeCount: 0,
    });

    // State for error handling
    const [error, setError] = useState('');

    // Handle form data changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    // Handle submit event
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!eventData.title || !eventData.postedBy || !eventData.date || !eventData.location || !eventData.description) {
            setError("Please fill out all the fields.");
            return;
        }

        // Add logic to handle event addition (API call or state update)
        console.log("Event Data: ", eventData);
    };

    return (
        <Box sx={{ paddingTop: '140px', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                Add New Event
            </Typography>

            {/* Error Message */}
            {error && (
                <Typography variant="body2" color="error" align="center" sx={{ marginBottom: '20px' }}>
                    {error}
                </Typography>
            )}

            {/* Event Form */}
            <Card sx={{ maxWidth: 600, margin: '0 auto', padding: 3, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <TextField
                                label="Event Title"
                                variant="outlined"
                                fullWidth
                                name="title"
                                value={eventData.title}
                                onChange={handleChange}
                            />
                            <Box sx={{ display: 'flex', gap: '16px' }}>
                                <TextField
                                    label="Name (Who Posted the Event)"
                                    variant="outlined"
                                    fullWidth
                                    name="postedBy"
                                    value={eventData.postedBy}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Date and Time"
                                    variant="outlined"
                                    fullWidth
                                    type="datetime-local"
                                    name="date"
                                    value={eventData.date}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: '16px' }}>
                                <TextField
                                    label="Location"
                                    variant="outlined"
                                    fullWidth
                                    name="location"
                                    value={eventData.location}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Attendee Count"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    name="attendeeCount"
                                    value={eventData.attendeeCount}
                                    onChange={handleChange}
                                />
                            </Box>
                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
                                name="description"
                                value={eventData.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
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
                                Add Event
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AddEventPage;
