'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from "next/navigation";
import { fetchUserById, updateUser} from '../../services/userService';
import {
    TextField,
    Button,
    Box,
    CircularProgress,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';

export default function UserEdit() {
    const router = useRouter();
    const { id: userId } = useParams();
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const user = await fetchUserById(Number(userId));
                setFormData({ name: user.name, email: user.email });
            } catch (error) {
                alert('User not found!');
                router.push('/users');
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [userId, router]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await updateUser(Number(userId), formData);
            setSnackbarOpen(true);
            setTimeout(() => router.push('/users'), 3000);
        } catch (error) {
            alert('Failed to update user');
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box sx={{ width: '90%', maxWidth: 400, margin: '20px auto', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Edit User (ID: {userId})
            </Typography>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => router.push('/users')}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity="success">
                    User updated successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
}