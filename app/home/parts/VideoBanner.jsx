import React from 'react';
import { Container, Button, Grid, Link, Text, Box, ButtonGroup } from '@chakra-ui/react';

import Image from 'next/image';


export default function VideoBanner() {
    return (
        <Container maxW='container.xl' position="relative" mb={5} mt={{ base: 16, lg: 18 }} pt={{base: 10, lg:20}}>
            <Text fontWeight='bold' fontSize={{ base: '3xl', lg: '7xl'}} color='var( --clr-primary-1)' textAlign='center'>AFRICAN SIMBA EVENTS</Text>
            <Text color='var( --clr-primary-1)' fontSize={{ base: '2xl', lg: '3xl'}} textAlign='center'>
              " THE GAME CHANGERS"
            </Text>
            <Box mt={10} position="relative">
            <div style={{ position: "relative", width: "100%", height: "600px" }}>
  <Image
    src="/compressed/bg_image.webp"
    alt="night club"
    layout="fill" // Makes the image fill the parent container
    objectFit="cover" // Ensures the image maintains its aspect ratio and fills the area
    style={{
      borderRadius: "10px", // Rounded corners
      transition: "transform 0.3s", // Smooth hover effect
    }}
   
    priority // Optimized for loading
  />
</div>
                {/* Gradient Overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    height="100%"  // Adjust this value to control gradient height
                    bgGradient="linear(to-t, rgba(0, 0, 0, 0.9), transparent)"  // Gradient from bottom to top
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
                   
                   
                        <Text fontWeight='bold' fontSize={{base: '2xl', lg: '3xl'}} color='var( --clr-primary-1)' textAlign='center'>Celebrate with the Game Changers</Text>
                    <Text color='var( --clr-primary-1)' mb={2} textAlign='center'>
                        Experience Immersive party that happens every week in Kampala, Uganda
                    </Text>
                    <Grid justifyContent='center'>
                        <ButtonGroup spacing={8}>
                            <Button as={Link} href='/events'
                                _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}
                                textDecoration='none' target='_blank' colorScheme="Alpha" rounded='full' variant="outline">
                                More Information
                            </Button>
                            <Button as={Link} href='/bookings' _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}  textDecoration='none' colorScheme="Alpha" rounded='full' variant="outline">
                               Get Ticket Now
                            </Button>
                        </ButtonGroup>
                    </Grid>
                   
                </Box>
            </Box>
        </Container>
    );
}
