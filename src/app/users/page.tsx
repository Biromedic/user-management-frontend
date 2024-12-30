'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import UsersList from './components/UsersList';
import ConfirmDialog from './components/ConfirmDialog';
import Notification from './components/Notification';
import NewUserDialog from './components/NewUserDialog';
import { useRouter } from 'next/navigation';
import { fetchUsers, deleteUser, createUser } from '../services/userService';

export default function Users() {
    interface User {
        id: number;
        name: string;
        email: string;
    }
    
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [newUserDialogOpen, setNewUserDialogOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                setNotification({ open: true, message: 'Failed to load users', severity: 'error' });
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    const handleEdit = (id: number) => {
        router.push(`/users/${id}`);
    };

    const handleDeleteRequest = (id: number) => {
        setSelectedUserId(id);
        setConfirmDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedUserId !== null) {
            try {
                await deleteUser(selectedUserId);
                setUsers((prev) => prev.filter((user) => user.id !== selectedUserId));
                setNotification({ open: true, message: `User with ID ${selectedUserId} deleted successfully.`, severity: 'success' });
            } catch (error) {
                setNotification({ open: true, message: 'Failed to delete user', severity: 'error' });
            }
        }
        setConfirmDialogOpen(false);
    };

    const handleAddUser = async (userData: { name: string; email: string }) => {
        try {
            await createUser(userData);
            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
            setNotification({ open: true, message: 'User added successfully', severity: 'success' });
        } catch (error) {
            setNotification({ open: true, message: 'Failed to add user', severity: 'error' });
        }
    };

    const handleNotificationClose = () => {
        setNotification({ ...notification, open: false });
    };

    if (loading) {
        return <Typography>Loading users...</Typography>;
    }

    if (users.length === 0) {
        return (
            <Box sx={{ padding: 3 }}>
                <Typography variant="h5" gutterBottom>
                    User List
                </Typography>
                <Typography>No users available. Please add a new user.</Typography>
                <Button variant="outlined" color="success" onClick={() => setNewUserDialogOpen(true)} sx={{ mt: 2 }}>
                    Add New User
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
                User List
            </Typography>
            <Button variant="outlined" color="success" onClick={() => setNewUserDialogOpen(true)} sx={{ mb: 2 }}>
                Add New User
            </Button>
            <UsersList users={users} onEdit={handleEdit} onDelete={handleDeleteRequest} />
            <ConfirmDialog
                open={confirmDialogOpen}
                title="Confirm Delete"
                message="Are you sure you want to delete this user?"
                onConfirm={handleDeleteConfirm}
                onCancel={() => setConfirmDialogOpen(false)}
            />
            <Notification
                open={notification.open}
                message={notification.message}
                severity={notification.severity as 'success' | 'error' | 'warning' | 'info'}
                onClose={handleNotificationClose}
            />
            <NewUserDialog
                open={newUserDialogOpen}
                onClose={() => setNewUserDialogOpen(false)}
                onSubmit={handleAddUser}
            />
        </Box>
    );
}