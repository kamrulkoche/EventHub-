import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const theme = useTheme();

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Header />
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '100%',
                    marginX: 'auto',
                    paddingX: '16px',
                    [theme.breakpoints.up('md')]: {
                        paddingX: '32px',
                    },
                    [theme.breakpoints.up('xl')]: {
                        maxWidth: '1280px',
                    },
                }}
            >
                {children}
            </Container>
            <Footer />
        </Box>
    );
}
