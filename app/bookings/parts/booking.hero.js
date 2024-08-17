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


import { useSinglePrismicDocument } from '@prismicio/react';
import { FiArrowRight } from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';



// import { CustomLeftArrow, CustomRightArrow } from '../Home/CustomArrows';

const carouselItems = [
    {
        image: '/images/videoposter.jpg',
        heading: 'BOOK YOUR TICKET',
        text: 'NEXT SHOW AROUND THE CORNER AT CATWALK',
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

const BookingHero = () => {
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <>

           
                {carouselItems.map((item, index) => (
                    <Box
                        key={index}
                        height="50vh"
                        backgroundImage={`url(${item.image})`}
                        backgroundPosition="center"
                        mt={50}

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
                            data-aos='fade-up' data-aos-duration='2000'
                        >
                            <Heading fontSize={{ base: "5xl", lg: '8xl' }} bg='hsla(0, 0%, 0%, 0.7)'  // Adjusted background for frosted glass effect
                                backgroundBlendMode='soft-light'
                                boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)' py={20} border='5px solid grey' p={5} color="white">
                                {item.heading}

                            </Heading>
                            <Text fontSize="2xl" maxW="600px"  p={2}>
                                {item.text}
                            </Text>
                           
                        </VStack>
                    </Box>
                ))}
         




        </>
    );
};

export default BookingHero;
