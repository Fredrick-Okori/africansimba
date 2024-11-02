"use client"
import React, { useEffect, useState } from 'react'

import { Box, Container, Grid, Text, Image, Button, useBreakpointValue } from '@chakra-ui/react'
import Counter from './Counter'

//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronRight } from 'react-icons/fa';
import DJS from './DJ';

export default function EventSchedule() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const imageHeight = useBreakpointValue({ base: "250px", md: "400px" });
    const fontSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const subFontSize = useBreakpointValue({ base: "sm", md: "lg" });

    const [showLogo, setShowLogo] = useState(false);

    return (
        <>
            <Box>
                <Container maxW="container.xl" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <Grid templateColumns={['repeat(1, 1fr)', null, '1fr 0.5fr 0.5fr']} py={{ base: 10, lg: 30 }} gap={6}>

                    </Grid>

                   
                    <DJS />
                    <Counter />
                </Container>
            </Box>
        </>
    )
}