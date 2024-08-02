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


            <Box

                height="50vh"
                backgroundImage={`url('/images/catwalk.jpg')`}
                backgroundPosition="center"
                mt={50}

                zIndex={-100}

                display="grid"
                margin='auto'

            >
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="100%"
                    height="100%"  // Adjust this value to control gradient height
                    bgGradient="linear(to-t, rgba(0, 0, 0, 0.4), transparent)"  // Gradient from bottom to top
                    zIndex="1"
                />

                <VStack

                    position="relative"
                    zIndex="2"
                    height="100%"
                    spacing={6}
                    textAlign="center"
                    color="white"
                    justifyContent="center"
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    <Heading fontSize={{ base: "3xl", lg: '5xl' }} color="white">
                        AFRICAN SIMBA SHOP

                    </Heading>
                    <Text fontSize="2xl" maxW="600px" p={2}>
                        Get access to our luxurious African Simba shop and experience the best in artisanal crafts and handmade goods.
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Button rounded='full' size="md" variant='outline' colorScheme="whiteAlpha">Information <FiArrowRight /></Button>
                    </Stack>
                </VStack>
            </Box>
        </>
    );
};

export default StoreHeroSection;
