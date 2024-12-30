'use client';

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }} component="a" href="/" color="inherit" sx={{ textDecoration: 'none' }}>
                    User Management System
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
