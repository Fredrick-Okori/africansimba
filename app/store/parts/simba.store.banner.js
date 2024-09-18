import React from 'react';
import { Container, Button, Grid, Heading, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function StoreBanner() {
    return (
        <Container maxW='container.xl' position="relative" py={20} px={6}>
            <Heading color="var( --clr-primary-1)" textAlign='center' size="2xl" pt={10} pb={5}>
              Official Simba Store
            </Heading>
            {/* <Heading fontWeight='bold' fontSize='2xl' color='var( --clr-primary-1)' textAlign='center' pt={10}>Get the latest from our store</Heading> */}
            <Text color='var( --clr-primary-1)' textAlign='center'>
               African simba culture and touch of African vibes wears
            </Text>
            <Box mt={10} position="relative">
                <Image
                    w='100%'
                    height={500}
                    objectFit='cover'
                    rounded={10}
                    src=" https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
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
                            <Button  _hover={{ bg: 'var( --clr-primary-1)', color: 'black' }} colorScheme="Alpha" rounded='full' variant="outline">
                                Shop Now
                            </Button>
                            <Button  _hover={{ bg: 'var( --clr-primary-1)', color: 'black' }} colorScheme="Alpha" rounded='full' variant="outline">
                                Order Now
                            </Button>
                        </ButtonGroup>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}
