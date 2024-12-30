'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Snackbar,
    Alert,
} from '@mui/material';

interface NewUserDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (userData: { name: string; email: string }) => void;
}

const NewUserDialog: React.FC<NewUserDialogProps> = ({ open, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email) {
            alert('All fields are required!');
            return;
        }
        onSubmit(formData);
        setSnackbarOpen(true);
        onClose(); 
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
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
        </>
    );
};

export default NewUserDialog;