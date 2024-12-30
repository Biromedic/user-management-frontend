'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './users/components/Navbar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Mavi ton
        },
        secondary: {
            main: '#f50057', // Pembe ton
        },
        background: {
            default: '#f4f6f8', // Hafif gri arka plan
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2.4rem', fontWeight: 500 },
        h5: { fontSize: '1.5rem', fontWeight: 400 },
        body1: { fontSize: '1rem', lineHeight: 1.5 },
    },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    <div>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
