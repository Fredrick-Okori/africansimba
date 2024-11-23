"use client"
import React, { useEffect } from 'react'

import { Box, Container, Grid, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image';

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
    src="/compressed/boy_b.webp"
    alt="Boy B in Uganda"
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
                                   Boy B in Uganda
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                   Catwalk 4th Anniversary
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
                                   Dj Alisha at GBB
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center' >
                                    The in the Party
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
                                src='/compressed/slick_stuart.webp'
                                alt='Best DJs'
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
                                    Dj Slick Stuart
                                </Text>
                                <Text fontSize={subFontSize} textAlign='center'>
                                    Your girlfriend's best DJ
                                </Text>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}