'use client'

import React from 'react';
import { Container, Text, Image, Box, Flex, Button, VStack, SimpleGrid, HStack, Icon } from '@chakra-ui/react';
import { FaCalendar, FaShoppingBag, FaVideo } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <Container maxW='container.xl' position="relative" mt={15} >
            <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
                <Box w={{ base: '100%', lg: '50%' }}>
                    <Text lineHeight={1} textAlign='left' mb={2} fontWeight='bold' fontSize={{ base: '4xl', lg: '8xl' }} color='var( --clr-primary-2)'>
                        African Simba <span color='var(--clr-primary-3)'>Saloon</span> 
                    </Text>
                    <Text color='var( --clr-primary-2)' textAlign='left'>
                        African Simbas Official Saloon. <br/> Introducing trending style with our merchandise
                    </Text>
                    <Button variant='outline' rounded='full' size='lg' bg='var( --clr-primary-3)' mt={5}>Book Now</Button>
                </Box>
                <Box w={{ base: '100%', lg: '50%' }} mt={{ base: 10, lg: 0 }} position="relative">
                    <Image
                        w='100%'

                        objectFit='cover'
                        rounded={10}
                        src="/saloon/klimax 3x500.png"
                        alt='saloon'
                        transition="all 0.3s"
                        _hover={{ transform: 'scale(1.01)' }}
                    />
                    {/* Gradient Overlay */}

                    {/* Text Overlay */}

                </Box>
            </Flex>
            
        </Container>
    );
};

export default HeroSection;
