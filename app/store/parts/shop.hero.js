import React from 'react';
import { Container, Text, Image, Box } from '@chakra-ui/react';

export default function StoreHeroSection() {
    return (
        <Container maxW='container.xl' position="relative" mt={20} pt={10} pb={10}>
           
            <Box mt={10} position="relative">
                <Image
                    w='100%'
                    height={600}
                    objectFit='cover'
                    rounded={10}
                    src="/store/store_banner.webp"
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


                    <Text textAlign='center' fontSize={{ base: 'xl', lg: '3xl' }} p={5} fontWeight={{ base: 'bold', lg: 'extrabold' }}>Stay up-to-date with our latest African Vibes</Text>


                </Box>
            </Box>
        </Container>
    );
}
