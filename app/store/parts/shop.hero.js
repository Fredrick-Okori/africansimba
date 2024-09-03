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

                height="60vh"
                backgroundImage={`url('/images/capa-shotgun_kytf4f.png')`}
                backgroundPosition="center"
             
                backgroundAttachment="fixed"
                zIndex={-100}
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
              
                margin='auto'

            >
               

                <VStack
                    mt={{ base: 16, lg: 20 }}
                    position="relative"
                    zIndex="2"
                  
                    spacing={6}
                    textAlign="center"
                    color="white"
                    justifyContent="center"
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    <Heading lineHeight={{ base: '1', lg: '1.5' }} fontSize={{ base: "6xl", lg: '8xl' }} color="white">
                        AFRICAN SIMBA SHOP

                    </Heading>
                    <Text fontSize="2xl" maxW="600px" p={2}>
                        Get access to our luxurious African Simba shop and experience the best in artisanal crafts and handmade goods.
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Button  _hover={{ bg: 'white', color: 'black' }} rounded='full' size="md" variant='outline' colorScheme="whiteAlpha">Information <FiArrowRight /></Button>
                    </Stack>
                </VStack>
            </Box>
        </>
    );
};

export default StoreHeroSection;
