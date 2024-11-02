import React from 'react';
import { Container,Button, Grid, Link, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';

export default function VideoBanner() {
    return (
        <Container maxW='container.xl' position="relative" mb={5} mt={{ base: 16, lg: 20 }} pt={{base: 10, lg:20}}>
            <Text fontWeight='bold' fontSize={{ base: '3xl', lg: '7xl'}} color='var( --clr-primary-1)' textAlign='center'>African Simba Events</Text>
            <Text color='var( --clr-primary-1)' textAlign='center'>
                Experience Immersive party that happens every week in Kampala, Uganda
            </Text>
            <Box mt={10} position="relative">
                <Image
                    w='100%'
                    height={450}
                    objectFit='cover'
                    rounded={10}
                    src="/images/guitarist_new.jpg"
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
                >
                   
                   
                        <Text fontWeight='bold' fontSize='3xl' color='var( --clr-primary-1)' textAlign='center'>Celebrate with the Game Changers</Text>
                    <Text color='var( --clr-primary-1)' mb={2} textAlign='center'>
                        Experience Immersive party that happens every week in Kampala, Uganda
                    </Text>
                    <Grid justifyContent='center'>
                        <ButtonGroup spacing={8}>
                            <Button as={Link} href='/stream'
                                _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}
                                textDecoration='none' target='_blank' colorScheme="Alpha" rounded='full' variant="outline">
                                More Info
                            </Button>
                            <Button as={Link} href='/stream' _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}  textDecoration='none' colorScheme="Alpha" rounded='full' variant="outline">
                                Podcast Music
                            </Button>
                        </ButtonGroup>
                    </Grid>
                   
                </Box>
            </Box>
        </Container>
    );
}
