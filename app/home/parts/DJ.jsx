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
                                bgGradient="linear(to-t, rgba(0,0,0,0.3), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)', bgGradient: 'none' }}
                                zIndex="1"
                                rounded="lg"
                            />
                              <Image
    src="/new/118c78ad-413a-4f89-bc17-d0e45a225f37 3.webp"
    alt="Boy B in Uganda"
    quality={60}
    layout="fill" 
    style={{borderRadius: '10px'}}
    objectFit="cover" 
    priority 
    sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw" 
  />
                       
                        </Box>
                        <Box position="relative" borderRadius="xl" height={imageHeight} _hover={{ transform: 'scale(1.02)' }} transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.3), rgba(0,0,0,0.1))"
                                borderRadius="xl"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)', bgGradient: 'none' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/new/259dae0b-1683-4004-926c-3b7e6decfb23 3.webp'
                                alt='Dj Alisha'
                                layout="fill" 
                                objectFit="cover" 
                                priority
                                style={{borderRadius: '10px'}}
                                quality={60} 
                                sizes="(max-width: 768px) 100vw, 
                                       (max-width: 1200px) 50vw, 
                                       33vw" 
                            />
                          
                        </Box>
                        <Box position="relative" borderRadius="xl" height={imageHeight}  transition="all 0.3s">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-t, rgba(0,0,0,0.3), rgba(0,0,0,0.1))"
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)', bgGradient: 'none', transittion: 'all 0.3s' }}
                                zIndex="1"
                            />
                            <Image
                                rounded="lg"
                                src='/new/a26aed34-ae96-4527-a976-3b86364d095e 3.webp'
                                alt='Best DJs'
                                layout="fill" 
                                objectFit="cover" 
                                priority 
                                quality={60}
                                style={{borderRadius: '10px'}}
                                sizes="(max-width: 768px) 100vw, 
                                       (max-width: 1200px) 50vw, 
                                       33vw" 
                            />
                           
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}