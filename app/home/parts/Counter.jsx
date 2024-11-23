"use client"
import React, { useEffect } from 'react'

import { Box, Container, Grid, Text,  useBreakpointValue } from '@chakra-ui/react'

import Image from 'next/image';

//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Count() {
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
                                src='/compressed/mbosso.webp'
                                alt='Muleba Festival'
                                quality={60}
                                layout="fill" 
                                objectFit="cover" 
                                priority 
                                sizes="(max-width: 768px) 100vw, 
                                       (max-width: 1200px) 50vw, 
                                       33vw" 
                              
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
                                   Mbosso live in Muleba Festival
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                Muleba Tanzania
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
                                src='/compressed/vj.webp'
                                alt='African simba events anniversary'
                                layout="fill" 
                                objectFit="cover" 
                                priority 
                                quality={60}
                                sizes="(max-width: 768px) 100vw, 
                                       (max-width: 1200px) 50vw, 
                                       33vw" 
                              
                               
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
                               Petrie MC at Legacy Bar
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    Mister Specials
                                </Text>
                            </Box>
                        </Box>
                        <Box position="relative" rounded='lg' height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,255), rgba(0,0,0,0.1))"
                                rounded="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                 src='/compressed/slick_stuart.webp'
                                alt='Paradigm Fridays'
                                layout="fill" 
                                objectFit="cover" 
                                quality={60}
                                priority 
                                sizes="(max-width: 768px) 100vw, 
                                       (max-width: 1200px) 50vw, 
                                       33vw" 
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                rounded='lg'
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
                                   Dj Ashley at Fiesta Sunday
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center'>
                                   Mid-day to Midnight
                                </Text>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}