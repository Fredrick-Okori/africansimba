"use client"
import React, { useEffect, useState } from 'react'

import { Box, Container, Stack, Text, HStack, Flex, Button, useBreakpointValue } from '@chakra-ui/react'
import Counter from './Counter'

import Link from 'next/link';
import { FiChevronRight } from'react-icons/fi';



//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronRight } from 'react-icons/fa';
import DJS from './DJ';

export default function EventSchedule() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const imageHeight = useBreakpointValue({ base: "250px", md: "400px" });
    const fontSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const subFontSize = useBreakpointValue({ base: "sm", md: "lg" });

    const [showLogo, setShowLogo] = useState(false);

    return (
        <>
            <Box>
                <Container maxW="container.xl" data-aos='zoom-in-up' data-aos-duration='1000'>
                <Box maxW="container.xl" mx="auto"  py={{ base: '0', lg: '12' }}>
           
               
                    <Stack spacing={{ base: '8', lg: '10' }} >
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            
                           
                                <Text
                                        fontWeight="bold"
                                        fontSize={{ base: "xl", lg: "4xl" }}
                                        color="var(--clr-primary-1)"
                                        textShadow="1px 1px 4px rgba(0,0,0,0.8)"
                                      >
                                        We are the Game Changers
                                      </Text>
                                       <Text
                                        fontWeight="bold"
                                        fontSize={{ base: "sm", lg: "md" }}
                                        color="var(--clr-primary-1)"
                                        textShadow="1px 1px 4px rgba(0,0,0,0.8)"
                                      >
                                       An emotional and authentic experience with the Game <br/> Changers including the high-energy DJs
                                      </Text>
                        </Stack>
                        <HStack spacing="3" color='var(--clr-primary-1)'>
                            <Button as={Link} href='/events' _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-1)', color: 'black' }} textDecoration='none' rightIcon={<FiChevronRight style={{marginLeft: '8px'}} />} rounded="full" colorScheme="var(--clr-primary-1)Alpha" variant="outline">
                                View Events
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
               
                </Container>
                    <DJS />
                    <Counter />
        </Box>      
        </>
    )
}