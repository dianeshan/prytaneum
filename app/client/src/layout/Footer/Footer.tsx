import * as React from 'react';

import { Container, Grid, Box, Link } from '@mui/material';

export function Footer() {
    return (
        <footer>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Learn More</Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Home
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/aboutus' underline='hover'>
                                    About Us
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Mission
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Sign Up
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Support</Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    FAQ
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' underline='hover'>
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}
