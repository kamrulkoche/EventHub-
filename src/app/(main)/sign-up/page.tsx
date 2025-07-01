"use client";

import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import theme from "@/app/style/theme";
import { toast, ToastContainer } from "react-toastify";  // Import react-toastify
import "react-toastify/dist/ReactToastify.css";  // Import styles for toast

interface FormDataType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  photoURL: string;
}

interface ErrorsType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  photoURL: string;
}

const RegistrationPage = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoURL: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoURL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: ErrorsType = { ...errors };
    let valid = true;

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
      valid = false;
    } else {
      validationErrors.name = "";
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      validationErrors.email = "Valid email is required";
      valid = false;
    } else {
      validationErrors.email = "";
    }

    if (!formData.password || formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
      valid = false;
    } else {
      validationErrors.password = "";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      validationErrors.confirmPassword = "";
    }

    if (!formData.photoURL.trim()) {
      validationErrors.photoURL = "Photo URL is required";
      valid = false;
    } else {
      validationErrors.photoURL = "";
    }

    setErrors(validationErrors);

    if (valid) {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        photoUrl: formData.photoURL, // Match backend key
      };

      try {
        const response = await fetch(
          "https://de-event-management-server.vercel.app/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Show success toast
          toast.success("Registration successful! Redirecting to login...");

          // For example, redirect to login page:
          setTimeout(() => {
            window.location.href = "/sign-in";
          }, 2000); // Delay redirect to allow the toast to show
        } else {
          // Handle error, e.g., show error message
          console.log("Error:", data.message);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
            Create an Account
          </Typography>

          <form onSubmit={handleSubmit}>
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

            <TextField
              fullWidth
              label="Photo URL"
              variant="outlined"
              margin="normal"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              error={!!errors.photoURL}
              helperText={errors.photoURL}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              sx={{
                color: theme.palette.custom.fifth.white,
                fontWeight: "bold",
                width: "100%",
                marginTop: "1rem",
                backgroundColor: "#F37021",
                "&:hover": { backgroundColor: "#E46016" },
                padding: "12px 0",
                textTransform: "none",
              }}
            >
              Register
            </Button>
          </form>

          <Typography
            sx={{
              textAlign: "center",
              marginTop: "1rem",
              color: theme.palette.text.secondary,
            }}
          >
            Have an account?{" "}
            <Button
              sx={{
                textTransform: "none",
                padding: 0,
                color: theme.palette.primary.main,
              }}
              onClick={() => (window.location.href = "/sign-in")}
            >
              Login here
            </Button>
          </Typography>
        </Box>
      </Container>

      {/* Toast Container for success messages */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </Box>
  );
};

export default RegistrationPage;
