"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Container, Heading, Button, Text, Divider, Slide, Slider, Input } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FiChevronRight } from 'react-icons/fi';

const ticket = [
    {
        id: 1,
        title: 'Premium bottle Race',
        description: 'Reserve a table.',
        price: ' ',
        image: '/images/eventposter.jpg'
    },
  
    {
        id: 3,
        title: 'The Baller Package',
        description: 'VIP seat 500k  + Premium Bottle race - Ordinary 250K+',
        price: 'UGX: 500K',
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
                {/* <Box display={'flex'} flexDir={{ base: 'column', lg: 'row' }} alignItems='center' gap={10} mt={10} mb={{base: 5, lg: 20}} data-aos='fade-up' data-aos-duration='2000'>
                    <Box flexBasis={700}>
                        <Image src='/updates/skales_gbb.webp' 
                               width={500} 
                               height={400} 
                               alt='Jamboree Adventures in Dubai'
                               style={{borderRadius: '10px'}}
                        />
                    </Box>
                    <Box mt={5} padding={10}>
                        <Heading as='h1' color='var(--clr-primary-1)' size='xl' mb={5} textAlign='left'>GBB 1 Year Anniversary</Heading>
                        <Text as='p' color='var(--clr-primary-1)' mb={5} textAlign='left'>
                        This 12th July GBB marks one year in the balling experience with a tease of sophiscation and luxury. This first anniversary we bring Skales from Nigeria as a headliner artist alongside
                        the biggest Djs in Kampala such as Slick Stuart, Ryan and Wizzy. 
                        </Text>
                    </Box>
                </Box> */}
                <Box mb={20} alignContent='center'>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems='center'>
                        {ticket.map((item, index) => (
                            <Box key={index} color='white' p={5} boxShadow='lg' flexBasis={2}>
                                <SimpleGrid columns={{ base: 1, lg: 1 }}  rounded='lg' _hover={{ bg: 'var(--clr-primary-3)', color: 'var(--clr-primary-2)', padding: 10, borderRadius: 10, transition: 'all 0.3s ease' }} spacing={2}>
                                    <Heading mb={5} textDecoration='underline' textAlign='left' textDecorationThickness={1} textUnderlineOffset={10} textDecorationColor='var(--clr-primary-1)'>
                                        {item.title}
                                    </Heading>
                                    <Text textAlign='left'>{item.description}</Text>
                                    <SimpleGrid columns={{ base: 2, lg: 2 }}>
                                        <Text>Book a table {item.price}</Text>
                                        <SimpleGrid columns={{base: 1, lg: 2}}>
                                            <Text mb={3} fontSize={'xl'} fontWeight={'bold'} color='var(--clr-primary-1)' textAlign='center'>{item.price}</Text>
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
                                                size="md"
                                                padding={2}
                                                color="var(--clr-primary-1)"
                                            >
                                                 Book Now 
                                                 <FiChevronRight style={{ marginLeft: '8px' }} />
                                            </Button>
                                        </SimpleGrid>
                                    </SimpleGrid>
                                </SimpleGrid>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </>
    );
}
