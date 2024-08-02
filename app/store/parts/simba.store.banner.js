import React from 'react';
import { Container, Button, Grid, Flex, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function StoreBanner() {
    return (
        <Container maxW='container.xl' position="relative">
            <Text fontWeight='bold' fontSize='4xl' color='white' textAlign='center'>Get the latest from our store</Text>
            <Text color='white' textAlign='center'>
               African simba culture and touch of African vibes wears
            </Text>
            <Box mt={10} position="relative">
                <Image
                    w='99%'
                    height={450}
                    objectFit='cover'
                    rounded={10}
                    src="/images/videoBanner.webp"
                    alt='night club'
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="transform 300ms cubic-bezier(0, 0, 0.2, 1)"
                />
                {/* Gradient Overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    height="100%"  // Adjust this value to control gradient height
                    bgGradient="linear(to-t, rgba(0, 0, 0, 0.9), transparent)"  // Gradient from bottom to top
                    zIndex="1"
                />
                {/* Text Overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    p={4}
                    zIndex="2"
                    color="white"
                    // Optional background to ensure readability
                    borderRadius="md"
                >


                    <Text textAlign='center' fontSize={20} p={5} fontWeight='bold'>Stay up-to-date with our latest African cultured items</Text>
                    <Grid justifyContent='center'>
                        <ButtonGroup spacing={8}>
                            <Button colorScheme="Alpha" rounded='full' variant="outline">
                                Shop Now
                            </Button>
                            <Button colorScheme="Alpha" rounded='full' variant="outline">
                                Order Now
                            </Button>
                        </ButtonGroup>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}
