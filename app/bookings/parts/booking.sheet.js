"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Container, Heading, Button, Text, Image, Divider, Slide, Slider, Input } from '@chakra-ui/react';


import Aos from 'aos';
import 'aos/dist/aos.css'
// BookingCard Component


const ticket = [
    {
        id: 1,
        title: 'Ordinary ticket',
        description: 'New Ticket for everyone',
        number: '5',
        image: '/images/image_event.jpg'

    },
    {
        id: 2,
        title: 'Platinum ticket',
        description: 'New Ticket for everyone',
        number: '5',
        image: '/images/eventposter.jpg'

    },
    {
        id: 3,
        title: 'Gold ticket',
        description: 'New Ticket for everyone',
        number: '5',
        image: '/images/wahallawednesday.jpg',


    },
    {
        id: 4,
        title: 'Table for five',
        description: 'New Ticket for everyone',
        number: '5',
        image: '/images/afrovibes.jpg'

    },

]

export default function BookingCard() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh();
    }, []);
    return (
        <>
            <Container maxW="container.xl">
                <Box mt={20} alignContent='center'>
                    <SimpleGrid  columns={{ base: 1, lg: 2 }} spacing={10} alignItems='center' data-aos='fade-up' data-aos-duration='2000'
                    >
                        {ticket.map((item, index) => (
                            <>
                                <Box key={index} color='white' borderLeft={{base: 'none', lg: '4px solid #0077B6'}} p={5} boxShadow='lg'
                                    flexBasis={2}
                                >
                                    <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={2}>
                                        <Image src={item.image} maxW={{ base: "100%", lg: "50%" }} alt={item.title} rounded={10} />
                                        <Heading mb={5} textDecoration='underline'
                                            textAlign='center'
                                            textDecorationThickness={1}
                                            textUnderlineOffset={10}
                                            textDecorationColor='grey'>
                                            {item.title}
                                        </Heading>
                                        <Text textAlign='center'>{item.description}</Text>

                                        <Text>{item.number}</Text>

                                        <SimpleGrid columns={{ base: 1, lg: 2 }}>
                                            <Text> Buying ticket for (5) at for {item.title} 50,000/=</Text>
                                            <Button
                                                maxW='50%'
                                                _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }}
                                                color='white' textDecor='none'
                                                rounded='full' size='md'
                                                variant='outline'>
                                                Buy ticket</Button>
                                        </SimpleGrid>

                                    </SimpleGrid>
                                    
                                </Box>

                            </>
                        ))}


                    </SimpleGrid>
                </Box>

            </Container>


        </>
    );
}
