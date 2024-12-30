'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './users/components/Navbar';
import Container from '@mui/material/Container';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2c3e50', 
        },
        secondary: {
            main: '#8e44ad', 
        },
        background: {
            default: '#ecf0f1',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2.4rem', fontWeight: 700 }, 
        h5: { fontSize: '1.5rem', fontWeight: 500 }, 
        body1: { fontSize: '1rem', lineHeight: 1.6 },
    },
    spacing: 8, // Default spacing
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        {children}
                    </Container>
                </ThemeProvider>
            </body>
        </html>
    );
}