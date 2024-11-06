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
const carouselItems = [
    {
        image: '/images/videoposter.jpg',
        heading: 'Buy your Ticket',
        text: 'Next Show around the corner at Catwalk',
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
               
                   
                >

                    <VStack

                        position="relative"
                        zIndex="2"
                        height="100%"
                        spacing={4}
                        textAlign="center"
                        color="var( --clr-primary-1)"
                        justifyContent="center"
                        data-aos='fade-up' data-aos-duration='2000'
                    >
                        <Heading fontSize={{ base: "5xl", lg: '7xl' }} bg='hsla(0, 0%, 0%, 0.7)'  // Adjusted background for frosted glass effect
                            backgroundBlendMode='soft-light'
                            lineHeight={1}
                            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)' py={20} borderLeft='5px dotted grey' p={5} color="white">
                            {item.heading}

                        </Heading>
                        <Text fontSize="xl" maxW="600px" p={2}>
                            {item.text}
                        </Text>

                    </VStack>
                </Box>
            ))}





        </>
    );
};

export default BookingHero;
