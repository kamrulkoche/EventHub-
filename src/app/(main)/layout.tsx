'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../style/theme';
import '../style/globals.css';
import MainLayout from '../components/Layout/MainLayout';


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout>
                <CssBaseline />
                {children}
            </MainLayout>
        </ThemeProvider>
    );
}
