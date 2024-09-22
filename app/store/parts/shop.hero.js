import React from 'react';
import { Container, Button, Grid, Link, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function StoreHeroSection() {
    return (
        <Container maxW='container.xl' position="relative" mt={20} pt={10} pb={10}>
            <Text lineHeight={1} fontWeight='bold' fontSize={{base: '4xl', lg: '6xl'}} color='var( --clr-primary-2)' textAlign='center'>
                African Simba Store
            </Text>
            <Text color='var( --clr-primary-2)' textAlign='center'>
                African Simbas Official Fashion Store. Introducing trending style with our merchandise 
            </Text>
            <Box mt={10} position="relative">
                <Image
                    w='100%'
                    height={450}
                    objectFit='cover'
                    rounded={10}
                    src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    alt='night club'
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                />
                {/* Gradient Overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    height="100%"  // Adjust this value to control gradient height
                    bgGradient="linear(to-t, rgba(0, 0, 0, 0.4), transparent)"  // Gradient from bottom to top
                    zIndex="1"
                    roundedBottom={10}
                />
                {/* Text Overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    p={4}
                    zIndex="2"
                    color="var( --clr-primary-1)"
                    borderRadius="lg"
                    roundedBottom={10}
                >


                    <Text textAlign='center' fontSize={{base: 'xl', lg: '3xl'}} p={5} fontWeight={{base: 'bold', lg: 'extrabold'}}>Stay up-to-date with our latest African Vibes</Text>
                   

                </Box>
            </Box>
        </Container>
    );
}
