"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Heading, Container } from '@chakra-ui/react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const partners = [
    { src: '/logos/pa.png' },
    { src: '/logos/magnum.png' },
    { src: '/logos/CLM-LOGO.png' },
    { src: '/logos/thrones.png' },
    { src: '/logos/catwalk.png' },
    { src: '/logos/CLM-LOGO.png' },
    { src: '/logos/magnum.png' },
    { src: '/logos/pa.png' },

];

const PartnerSection = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <Box py={10}>
            <Container maxW='container.lg' data-aos='fade-in-up' data-aos-duration='300ms'>

                <VStack spacing={4} textAlign="center">

                    <Heading color="var( --clr-primary-1)" size="2xl">
                        Official Partners
                    </Heading>
                </VStack>
                <SimpleGrid columns={[4, 4, 4, 4]} spacing={10} mt={10} p={5}>
                    {partners.map((partner, index) => (
                        <VStack
                            key={index}
                            textAlign="center"
                            p={3}
                            border='0.5px solid grey'
                            _hover={{ bg: 'hsla(0, 0%, 0%, 0.5)' }}
                            alignItems='center'
                            w={{ base: "120%", sm: "120%", md: "100%" }}
                            borderRadius='md'
                        >
                            <Image
                                src={partner.src}
                                transition="all 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                alt='partner'
                                boxSize={{ base: "50px", sm: "90px", md: "120px" }}
                                objectFit="contain"
                            />
                        </VStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default PartnerSection;
