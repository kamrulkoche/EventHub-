import { Box, Container, Typography } from '@mui/material';
import NextLink from 'next/link';


const Footer = () => {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#333', color: 'white', py: 4 }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    © 2025 Event Management Platform. All Rights Reserved.
                </Typography>
                <Typography variant="body2">
                    <NextLink href="/privacy-policy" passHref>
                        Privacy Policy
                    </NextLink> |{' '}
                    <NextLink href="/terms-of-service" passHref>
                        Terms of Service
                    </NextLink>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
