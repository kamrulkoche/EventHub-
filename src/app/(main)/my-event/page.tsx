"use client";
import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  SelectChangeEvent,
} from '@mui/material';

const MyEventPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Q3 Backend Team Review",
      postedBy: "Juan Rodriguez",
      date: "May 14, 2025, 02:54 PM",
      location: "Online",
      description: "Quarterly review for the backend team.",
      attendeeCount: 1,
    },
    {
      id: 2,
      title: "23sdfsdfsfs",
      postedBy: "Juan Rodriguez",
      date: "June 30, 2025, 01:52 AM",
      location: "Conference Room A",
      description: "Draft event for team gathering.",
      attendeeCount: 0,
    },
    {
      id: 3,
      title: "Team Building Workshop",
      postedBy: "Anna Lee",
      date: "July 5, 2025, 10:00 AM",
      location: "Beach Resort",
      description: "A day of team bonding activities.",
      attendeeCount: 5,
    },
    {
      id: 4,
      title: "Product Launch Presentation",
      postedBy: "Samuel Morris",
      date: "July 7, 2025, 09:30 AM",
      location: "Main Conference Hall",
      description: "Presenting the new product line for the upcoming quarter.",
      attendeeCount: 20,
    },
    {
      id: 5,
      title: "Marketing Strategy Meeting",
      postedBy: "Sophie Turner",
      date: "July 8, 2025, 02:00 PM",
      location: "Room 101",
      description: "Reviewing the marketing plan for the next quarter.",
      attendeeCount: 8,
    },
    {
      id: 6,
      title: "Client Feedback Session",
      postedBy: "Carlos Garcia",
      date: "July 9, 2025, 11:00 AM",
      location: "Online",
      description: "Collecting feedback from clients on the recent product update.",
      attendeeCount: 12,
    },
    {
      id: 7,
      title: "Hackathon Kickoff",
      postedBy: "Chris Johnson",
      date: "July 12, 2025, 03:00 PM",
      location: "Innovation Lab",
      description: "Launching the 48-hour coding challenge for the development team.",
      attendeeCount: 25,
    },
    {
      id: 8,
      title: "Employee Wellness Seminar",
      postedBy: "Rachel Green",
      date: "July 15, 2025, 01:00 PM",
      location: "Health Center",
      description: "Discussing strategies for maintaining health and wellness in the workplace.",
      attendeeCount: 15,
    },
    {
      id: 9,
      title: "Quarterly Budget Review",
      postedBy: "David Smith",
      date: "July 18, 2025, 04:00 PM",
      location: "Finance Department",
      description: "Analyzing the quarterly financials and making adjustments to the budget.",
      attendeeCount: 10,
    },
    {
      id: 10,
      title: "Coding Bootcamp Graduation",
      postedBy: "Olivia Brown",
      date: "July 20, 2025, 06:00 PM",
      location: "Auditorium",
      description: "Celebrating the successful graduation of the coding bootcamp participants.",
      attendeeCount: 30,
    },
    {
      id: 11,
      title: "Team Hackathon Presentation",
      postedBy: "Michael Scott",
      date: "July 22, 2025, 10:00 AM",
      location: "Conference Room B",
      description: "Presenting the results of the team hackathon project.",
      attendeeCount: 6,
    },
    {
      id: 12,
      title: "New Hire Onboarding",
      postedBy: "Angela Martin",
      date: "July 25, 2025, 09:00 AM",
      location: "Room 102",
      description: "Orientation for new hires and introducing the company culture.",
      attendeeCount: 4,
    },
    {
      id: 13,
      title: "Sales Performance Review",
      postedBy: "Jim Halpert",
      date: "July 28, 2025, 11:00 AM",
      location: "Sales Department",
      description: "Reviewing the sales team's performance for the last quarter.",
      attendeeCount: 18,
    },
    {
      id: 14,
      title: "Annual Company Picnic",
      postedBy: "Pam Beesly",
      date: "August 1, 2025, 12:00 PM",
      location: "Central Park",
      description: "Company-wide picnic to celebrate the end of the summer season.",
      attendeeCount: 50,
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  const handleJoinEvent = (eventId: number) => {
    setEvents(events.map(event =>
      event.id === eventId
        ? { ...event, attendeeCount: event.attendeeCount + 1 }
        : event
    ));
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'all') return matchesSearch;
    return matchesSearch;
  });

  return (
    <div style={{ paddingTop: '120px' }}>
      <Typography variant="h4" gutterBottom>Manage My Events</Typography>

      <Box display="flex" gap={2} style={{ marginBottom: '20px' }}>
        <TextField
          label="Search by Event Title"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <FormControl fullWidth>
          <InputLabel>Filter by Date</InputLabel>
          <Select
            value={filter}
            onChange={handleFilterChange}
            label="Filter by Date"
          >
            <MenuItem value="all">All Events</MenuItem>
            <MenuItem value="today">Today Events</MenuItem>
            <MenuItem value="thisWeek">This Week</MenuItem>
            <MenuItem value="lastMonth">Last Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {filteredEvents.map((event) => (
          <Box key={event.id} flexBasis="calc(33.33% - 16px)" mb={2}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>{event.title}</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Posted by: {event.postedBy}</Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>{event.description}</Typography>
                <Typography variant="body2" sx={{ color: '#757575' }}>Location: {event.location}</Typography>
                <Typography variant="body2" sx={{ color: '#757575' }}>Date: {event.date}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Attendees: {event.attendeeCount}</Typography>
              </CardContent>
              <CardActions sx={{ padding: '16px' }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleJoinEvent(event.id)}
                  disabled={event.attendeeCount >= 100}
                  sx={{ fontWeight: 'bold' }}
                >
                  Join Event
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default MyEventPage;
