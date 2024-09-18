"use client"
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    Box,
    VStack,
    Text,
    Button,
    Stack,
    Heading,
    Container
} from '@chakra-ui/react';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

//Carousel Arrows
import { CustomLeftArrow, CustomRightArrow } from '@/app/home/parts/customArrows';

import { useSinglePrismicDocument } from '@prismicio/react';
import { FiArrowRight } from 'react-icons/fi';



// import { CustomLeftArrow, CustomRightArrow } from '../Home/CustomArrows';





const StoreHeroSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <>

            <Container maxW="container.xl" py={16} px={6}>
                

            <Box

              
                    width={'100%'}
                    
                    height={{ base: '100%', md: '100%', lg: '100%', xl: '100%' }}
                    backgroundImage={`url('https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80')`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position="relative"
            >
               

                <VStack
                    mt={{ base: 16, lg: 20 }}
                    position="relative"
                    zIndex="2"
                  
                    spacing={6}
                    textAlign="center"
                    color="var( --clr-primary-1)"
                    justifyContent="center"
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    <Heading lineHeight={{ base: '1', lg: '1.5' }} fontSize={{ base: "6xl", lg: '8xl' }} color="var( --clr-primary-1)">
                        AFRICAN SIMBA SHOP

                    </Heading>
                    <Text fontSize="2xl" maxW="600px" p={2}>
                        Get access to our luxurious African Simba shop and experience the best in artisanal crafts and handmade goods.
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Button  _hover={{ bg: 'var( --clr-primary-1)', color: 'black' }} rounded='full' size="md" variant='outline' colorScheme="whiteAlpha">Information <FiArrowRight /></Button>
                    </Stack>
                </VStack>
                </Box>
            </Container>
        </>
    );
};

export default StoreHeroSection;
