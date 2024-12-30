'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <Box
            sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
            }}
        >
            <Typography variant="h1" color="primary" gutterBottom>
            Welcome
            </Typography>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            }}
            >
              <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => router.push('/users')}
              sx={{ mx: 1 }}
              >
              Go to User List
              </Button>
              <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => router.push('/users/add-user')}
              sx={{ mx: 1 }}
              >
              Add New User
              </Button>
                <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => {
                  const userId = prompt("Enter User ID:");
                  if (userId) {
                    router.push(`/users/${userId}`);
                  }
                }}
                sx={{ mx: 1 }}
                >
                Edit User
                </Button>
            </Box>
        </Box>
    );
}
