import React from 'react';
import { Container, Button, Grid, Heading, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function StoreBanner() {
    return (
        <Container maxW='container.xl' position="relative" py={20} px={6}>
            <Heading color="white" textAlign='center' size="2xl" pt={10} pb={5}>
              Official Simba Store
            </Heading>
            {/* <Heading fontWeight='bold' fontSize='2xl' color='white' textAlign='center' pt={10}>Get the latest from our store</Heading> */}
            <Text color='white' textAlign='center'>
               African simba culture and touch of African vibes wears
            </Text>
            <Box mt={10} position="relative">
                <Image
                    w='100%'
                    height={500}
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
                            <Button  _hover={{ bg: 'white', color: 'black' }} colorScheme="Alpha" rounded='full' variant="outline">
                                Shop Now
                            </Button>
                            <Button  _hover={{ bg: 'white', color: 'black' }} colorScheme="Alpha" rounded='full' variant="outline">
                                Order Now
                            </Button>
                        </ButtonGroup>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}
