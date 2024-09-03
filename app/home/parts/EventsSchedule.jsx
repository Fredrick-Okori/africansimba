"use client"
import React, { useEffect } from 'react'

import { Box, Container, Grid, Text, Image, Button, useBreakpointValue } from '@chakra-ui/react'
import Counter from './Counter'

//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronRight } from 'react-icons/fa';

export default function EventSchedule() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const imageHeight = useBreakpointValue({ base: "250px", md: "400px" });
    const fontSize = useBreakpointValue({ base: "xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "sm", md: "lg" });

    return (
        <>
            <Box>
                <Container maxW="container.xl" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <Grid templateColumns={['repeat(1, 1fr)', null, '1fr 0.5fr 0.5fr']} py={{ base: 10, lg: 30 }} gap={6}>
                        <Box position="relative" borderRadius="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/images/events_mc.jpg' 
                                alt='African Simba Management Event'
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="white"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                   Africa Simba Events
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Bringing you unforgettable experiences
                                </Text>
                            </Box>
                        </Box>
                        <Box position="relative" borderRadius="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/images/guitarist.jpg'
                                alt='Middle Event'
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="white"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                    Muleba Festival
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Do not miss out 
                                </Text>
                            </Box>
                        </Box>
                        <Box position="relative" borderRadius="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.9), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/images/ddane.jpg'         
                                alt='Wahalla'
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="white"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal">
                                 Best Djs
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center'>
                                    Join us for the experience
                                </Text>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Counter area */}
                    <Counter /> 
                </Container>
            </Box>
        </>
    )
}