"use client"
import React, {useEffect} from 'react';
import { Box, SimpleGrid, Container, Heading, Button, Text, Image, Divider } from '@chakra-ui/react';


import Aos from 'aos';
import 'aos/dist/aos.css'
// BookingCard Component
export default function BookingCard() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh();
    }, []);
    return (
        <>
            <Container maxW="container.xl">
                <Box mt={20}>
                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={10} alignItems='center' data-aos='fade-up' data-aos-duration='2000'
                    >
                        
                        <Box color='white'>
                            <Heading mb={5}>Ordinary  Tickets</Heading>
                            <Text></Text>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                            </Text>
                            <Heading>

                                <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box>
                            <Image rounded={20}  src='/images/main_main.jpg' alt='events' />
                        </Box>
                    
                        <Box>
                            <Image rounded={20}  src='/images/ddane.jpg' alt='events' />
                        </Box>
                        <Box color='white'>
                            <Heading mb={5}>VIP Tickets</Heading>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                            </Text>
                            <Heading>

                                <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box color='white'>
                            <Heading mb={5}> Table of five.</Heading>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                               
                                
                               
                            </Text>
                            <Heading>

                            <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box>
                            <Image rounded={20} src='/images/main_main.jpg' alt='events' />
                        </Box>

                      
                    </SimpleGrid>
                </Box>

            </Container>


        </>
    );
}
