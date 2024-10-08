"use client"
import React, { useEffect, useState } from 'react'

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
    const fontSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const subFontSize = useBreakpointValue({ base: "sm", md: "lg" });

    const [showLogo, setShowLogo] = useState(false);

    return (
        <>
            <Box>
                <Container maxW="container.xl" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <Grid templateColumns={['repeat(1, 1fr)', null, '1fr 0.5fr 0.5fr']} py={{ base: 10, lg: 30 }} gap={6}>
                        <Box position="relative"  height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s ease-in-out" >
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s ease-in-out"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                onMouseEnter={() => setShowLogo(true)} onMouseLeave={() => setShowLogo(false)}
                                rounded="lg"
                                src='/paradigm/paradigmdj.jpg' 
                                alt='African Simba Management Event'
                                transition="all 0.3s ease-in-out"
                                _hover={{ transform: 'scale(1.05)' }}
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                            {showLogo && (
                                <Box
                                    position="absolute"
                                    top="10px"
                                    right="10px"
                                    display={{ base: "none", md: "block" }}
                                    zIndex="3"
                                    transition="all 0.3s ease-in-out"
                                >
                                    <Image
                                        src='/logos/pa.png'
                                        alt='Partner Logo'
                                        w="100px"
                                        h="100px"
                                        objectFit="cover"
                                    />
                                </Box>
                            )}
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                  Paradigm Ggaba Party
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Bringing you unforgettable experiences
                                </Text>
                            </Box>
                        </Box>
                        <Box position="relative" rounded="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s ease-in-out" onMouseEnter={() => setShowLogo(true)} onMouseLeave={() => setShowLogo(false)}>
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s ease-in-out"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src="/paradigm/simbaonly.jpg"
                                alt='Middle Event'
                                transition="all 0.3s ease-in-out"
                                _hover={{ transform: 'scale(1.05)' }}
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                onMouseEnter={() => setShowLogo(true)} onMouseLeave={() => setShowLogo(false)}
                            />
                            {showLogo && (
                                <Box
                                    position="absolute"
                                    top="10px"
                                    right="10px"
                                    display={{ base: "none", md: "block" }}
                                    zIndex="3"
                                    transition="all 0.3s ease-in-out"
                                >
                                    <Image
                                        src='/logos/pa.png'
                                        alt='Partner Logo'
                                        w="100px"
                                        h="100px"
                                        objectFit="cover"
                                    />
                                </Box>
                            )}
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                                rounded="xl"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal" >
                                    No Simba. No party
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Do not miss out 
                                </Text>
                            </Box>
                        </Box>
                        <Box position="relative"  height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s ease-in-out" onMouseEnter={() => setShowLogo(true)} onMouseLeave={() => setShowLogo(false)}>
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-r, rgba(0,0,0,0.3), rgba(0,0,0,0.2))"
                                borderRadius="lg"
                                transition="all 0.3s ease-in-out"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                onMouseEnter={() => setShowLogo(true)} onMouseLeave={() => setShowLogo(false)}
                                rounded="lg"
                                src='/paradigm/nosimba.jpg'         
                                alt='Wahalla'
                                position="relative"
                                zIndex="0"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                            {showLogo && (
                                <Box
                                    position="absolute"
                                    top="10px"
                                    right="10px"
                                    display={{ base: "none", md: "block" }}
                                    zIndex="3"
                                    transition="all 0.3s ease-in-out"
                                >
                                    <Image
                                        src='/logos/pa.png'
                                        alt='Partner Logo'
                                        w="100px"
                                        h="100px"
                                        objectFit="cover"
                                    />
                                </Box>
                            )}
                            <Box
                                position="absolute"
                                bottom="20px"
                                left="30px"
                                right="30px"
                                color="var( --clr-primary-1)"
                                zIndex="2"
                            >
                                <Text fontSize={fontSize} textAlign='center' fontWeight="normal">
                                 No Simba. No Party
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