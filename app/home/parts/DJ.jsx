"use client"
import React, { useEffect } from 'react'

import { Box, Container, Grid, Text, Image, useBreakpointValue } from '@chakra-ui/react'

//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function DJS() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const imageHeight = useBreakpointValue({ base: "250px", md: "400px" });
    const fontSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const subFontSize = useBreakpointValue({ base: "sm", md: "sm" });

    return (
        <>
            <Box>
                <Container maxW="container.xl" >
                    <Grid templateColumns={['repeat(1, 1fr)', null, '0.5fr 1fr 0.5fr']} py={{ base: 10, lg: 30 }} gap={6}>
                        <Box position="relative" borderRadius="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                                rounded="lg"
                            />
                            <Image
                                rounded="lg"
                                src='/compressed/roger&stuart.jpg'
                                alt='Dj Slick Stuart'
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
                                bgGradient="linear(to-r, rgba(0,0,0,0.2), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                   Dj Slick Stuart
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Your girlfriends best dj
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
                                bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/compressed/djAlisha.webp'
                                alt='Dj Alisha'
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
                                bgGradient="linear(to-r, rgba(0,0,0,0.2), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                   Dj Alisha every week
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
                                bgGradient="linear(to-t, rgba(0,0,0,255), rgba(0,0,0,0.1))"
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/compressed/djblacks.jpg'
                                alt='Best DJs'
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
                                bgGradient="linear(to-r, rgba(0,0,0,0.2), rgba(0,0,0,0.1))"
                                borderRadius="lg"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal">
                                    Dj Blacks
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center'>
                                    Join us for the experience
                                </Text>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}