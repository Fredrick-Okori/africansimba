"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Container, Heading, Button, Text,  Divider, Slide, Slider, Input } from '@chakra-ui/react';


import Image from 'next/image';
import Link from 'next/link';

import Aos from 'aos';
import 'aos/dist/aos.css'
// BookingCard Component


const ticket = [
    {
        id: 1,
        title: 'Ordinary ticket',
        description: 'Ticket for one',
        price: 'UGX: 20K',
        image: '/images/image_event.jpg'

    },
    {
        id: 2,
        title: 'Ordinary Special ticket',
        description: 'Ticket for many,',
        price: 'UGX: 1M',
        image: '/images/eventposter.jpg'

    },
    {
        id: 3,
        title: 'Gold ticket',
        description: 'Ticket for many,',
        price: 'UGX: 2M',
        image: '/images/eventposter.jpg'

    },
    {
        id: 3,
        title: 'Platinum ticket',
        description: 'Ticket for many,',
        price: 'UGX: 3M',
        image: '/images/eventposter.jpg'

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
                <Box display={'flex'} flexDir={{ base: 'column', lg: 'row' }} alignItems='center' gap={10} mt={10} mb={{base: 5, lg: 20}} data-aos='fade-up' data-aos-duration='2000'>
                    <Box flexBasis={700}>
                <Image src='/updates/event_anniversary.jpeg' 
                width={500} height={400} alt='Jamboree Adventures in Dubai'
                style={{borderRadius: '10px'}}
                 
                 />
                </Box>
                <Box mt={5} padding={10}>
<Heading as='h1' color='var(--clr-primary-1)' size='xl' mb={5} textAlign='left'>Afro Vibes Anniversary</Heading>
                    <Text as='p'  color='var(--clr-primary-1)' mb={5} textAlign='left' >
                    Afro vibes is a high tier event with a blend of africanacity and flavours of our roots 
Every year we spread out textures of themes to only celebrate who we are ;
This year we bring you the BANTU EDITION.
Stay with us #ase
                    </Text>
                  
                    </Box>
                </Box>
                <Box mt={20} mb={20} alignContent='center'>
                    <SimpleGrid  columns={{ base: 1, lg: 2 }} spacing={10} alignItems='center' data-aos='fade-up' data-aos-duration='2000'
                    >
                        {ticket.map((item, index) => (
                            <>
                                <Box key={index} color='white'  p={5} boxShadow='lg'
                                    flexBasis={2}
                                >
                                    <SimpleGrid columns={{ base: 1, lg: 1 }} padding={10} rounded='lg' _hover={{ bg: 'var(--clr-primary-3)', color: 'var(--clr-primary-2)', padding: 10, borderRadius: 10, transition: 'all 0.3s ease' }} spacing={2}>

                                        <Heading mb={5} textDecoration='underline'
                                            textAlign='left'
                                            textDecorationThickness={1}
                                            textUnderlineOffset={10}
                                            textDecorationColor='var(--clr-primary-1)'>
                                            {item.title}
                                        </Heading>
                                        <Text textAlign='left'>{item.description}</Text>

                                       

                                        <SimpleGrid columns={{ base: 2, lg: 2 }}>
                                            <Text> Buying ticket  at {item.price}</Text>
                                            <SimpleGrid column={{base: 1, lg: 2}}>
    <Text mb={3} fontSize={'2xl'} fontWeight={'bold'} color='var(--clr-primary-1)' textAlign='center'>{item.price}</Text>
    <Button
                as={Link}
                href="https://wa.me/+256778105878"
                _hover={{
                  textDecoration: "none",
                  bg: "var(--clr-primary-1)",
                  color: "black",
                }}
                target="_blank"
                        rel="noopener noreferrer"
                rounded="full"
                variant="outline"
                color="var(--clr-primary-1)"
              >
                Get Ticket Now
              </Button>
</SimpleGrid>
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
