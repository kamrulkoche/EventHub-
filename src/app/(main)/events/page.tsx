"use client";
import {
    Box,
    Typography,
    CircularProgress,
    Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Event {
    _id: string;
    title: string;
    description: string;
    location: string;
    dateTime: string;
    attendeeCount: number;
}

const EventPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        // Function to get token from cookies
        function getCookie(cname: string) {
            const name = cname + "=";
            const ca = document.cookie.split(";");
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        }

        const token = getCookie("token");

        if (!token) {
            console.error("Token is not available in the cookies");
            router.push("/sign-in");
            return;
        }

        const fetchEvents = async () => {
            try {
                const response = await axios.get(
                    "https://de-event-management-server.vercel.app/api/event",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setEvents(response.data); 
            } catch (error) {
                console.error("Error fetching events:", error);
                if (axios.isAxiosError(error)) {
                    console.error("API error:", error.response?.data);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [router]);

    return (
        <div style={{ paddingTop: "120px" }}>
            <Typography variant="h4" gutterBottom>
                Manage All Events
            </Typography>

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                    <CircularProgress />
                </Box>
            ) : (
                <Box display="flex" flexWrap="wrap" gap={2}>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <Box
                                key={event._id}
                                sx={{
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    padding: "16px",
                                    width: "300px",
                                    boxShadow: 3,
                                }}
                            >
                                <Typography variant="h6" color="primary">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {event.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Location: {event.location}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Date: {new Date(event.dateTime).toLocaleString()}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Attendees: {event.attendeeCount}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: "12px" }}
                                >
                                    Join Event
                                </Button>
                            </Box>
                        ))
                    ) : (
                        <Typography>No events available.</Typography>
                    )}
                </Box>
            )}
        </div>
    );
};

export default EventPage;
