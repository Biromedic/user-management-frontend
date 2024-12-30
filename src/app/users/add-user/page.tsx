'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';

export default function NewUser() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSnackbarOpen(true);
        console.log(`New User Data: ${JSON.stringify(formData)}`);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <Box sx={{ height: 64 }} />
            <Box
            sx={{
                maxWidth: 400,
                margin: 'auto',
                padding: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 2,
            }}
            >
            <Typography variant="h5" mb={2} textAlign="center">
                Add New User
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
                <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="contained" color="primary" type="submit">
                    Save
                </Button>
                </Box>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity="success">
                User added successfully!
                </Alert>
            </Snackbar>
            </Box>
        </>
    );
}
