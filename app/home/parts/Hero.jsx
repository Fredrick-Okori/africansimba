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
import { CustomLeftArrow, CustomRightArrow } from './customArrows';

import { useSinglePrismicDocument } from '@prismicio/react';
import { FiArrowRight } from 'react-icons/fi';



// import { CustomLeftArrow, CustomRightArrow } from '../Home/CustomArrows';

const carouselItems = [
    {
        image: '/miages/catwalk.jpg',
        heading: 'AFRICAN SIMBA EVENTS',
        text: 'SHANGRI-LA HOTEL BANGKOK, BANGKOK, CHINA',
    },

    {
        image: '/iamges/catwalk.jpg',
        heading: 'PARADIGM LOUNGE GGABA',
        text: 'Hilton Hotel, New York, USA',
    }
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const HeroSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <>
            <Container maxW='container.xl'>
                <Carousel responsive={responsive}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}

                >
                    {carouselItems.map((item, index) => (
                        <Box
                            key={index}
                            height="60vh"
                            backgroundImage={`url(${item.image})`}
                            backgroundPosition="fixed"
                           
                            zIndex={-100}

                            display="grid"
                            margin='auto'

                        >

                            <VStack

                                position="relative"
                                zIndex="2"
                                height="100%"
                                spacing={6}
                                textAlign="center"
                                color="white"
                                justifyContent="center"
                                mt={{ base: 16, lg: 20 }}
                                data-aos='fade-up' data-aos-duration='2000'
                            >
                                <Heading lineHeight={{ base: '1', lg: '1.5' }} fontSize={{ base: "50px", lg: '8xl' }} color="white">
                                    {item.heading}

                                </Heading>
                                <Text fontSize={{ base: '12px', lg: '2xl' }} maxW="600px" background='rgba(255, 255, 200, 0.1)' p={2}>
                                    {item.text}
                                </Text>
                                <Stack direction="row" spacing={4}>
                                    <Button _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }} textDecoration='none' rounded='full' size="md" variant='outline' colorScheme="whiteAlpha">Information <FiArrowRight /></Button>
                                </Stack>
                            </VStack>
                        </Box>
                    ))}
                </Carousel>
            </Container>



        </>
    );
};

export default HeroSection;
