"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Heading, Container } from '@chakra-ui/react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const partners = [
    { src: '/partners/p-5.png.webp' },
    { src: '/partners/p-2.png.webp' },
    { src: '/partners/p-3.png.webp' },
    { src: '/partners/p-4.png.webp' },
    { src: '/partners/p-5.png.webp' },
    { src: '/partners/p-6.png.webp' },
    { src: '/partners/p-7.png.webp' },
    { src: '/partners/p-8.png.webp' },
];

const PartnerSection = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <Box  py={10}>
            <Container maxW='container.xl' data-aos='fade-in-up' data-aos-duration='300ms'>

                <VStack spacing={4} textAlign="center">
                    <Text color="pink.400" fontSize="lg" fontWeight="bold">
                        PARTNERS & SPONSORS
                    </Text>
                    <Heading color="white" size="lg">
                        OFFICIAL SPONSOR
                    </Heading>
                </VStack>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mt={10} p={5}>
                    {partners.map((partner, index) => (
                        <VStack key={index} textAlign="center" p={3} border='0.5px solid grey' _hover={{  bg:'hsla(0, 0%, 0%, 0.5)' }}  alignItems='center'>
                            <Image 
                                 src={partner.src} alt='partner' boxSize="150px" objectFit="contain" />

                        </VStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default PartnerSection;
