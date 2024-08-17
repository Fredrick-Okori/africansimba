import React from 'react';
import { Container,Button, Grid, Link, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function VideoBanner() {
    return (
        <Container maxW='container.xl' position="relative">
            <Text fontWeight='bold' fontSize='4xl' color='white' textAlign='center'>African Simba Music</Text>
            <Text color='white' textAlign='center'>
                African Simbas Official music division. Introducing new music every
                corner of the world.
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
                   
                   
                    <Text textAlign='center' fontSize={20} p={5} fontWeight='bold'>Stay up-to-date with our latest African Vibes</Text>
                    <Grid justifyContent='center'>
                        <ButtonGroup spacing={8}>
                            <Button as={Link} href='http://www.youtube.com' target='_blank' colorScheme="Alpha" rounded='full' variant="outline">
                                Watch Video
                            </Button>
                            <Button as={Link} href='http://www.youtube.com' colorScheme="Alpha" rounded='full' variant="outline">
                                Download Music
                            </Button>
                        </ButtonGroup>
                    </Grid>
                   
                </Box>
            </Box>
        </Container>
    );
}
