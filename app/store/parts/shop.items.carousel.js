

"use client";
import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    HStack,
    Container,
} from "@chakra-ui/react";
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Aos from 'aos';
import 'aos/dist/aos.css';

const events = [
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/boldfit-head-caps-with-adjustable-strap-in-summer-for-men-caps-men-for-all-sports-black-product-images-orvbhpbfyho-p600039429-0-202304121406.webp",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/Boksen-Gorilla-Mannen-Grappige-T-shirt-Mma-Muay-Thai-Kick-Boxing-Training-Top-Mannen-2019-Nieuwe.webp",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/BlackMelangeGreenEyeFront-scaled.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/baseball.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/caps.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/store/white_baseball.jpg",
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const ShopsItems = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <Box color="white" py={10} px={5}>
            <Container maxW='container.2xl' data-aos='fade-in-up' data-aos-duration='300'>
                <Flex justify="space-between" align="center" mb={5}>
                    <Text fontSize="4xl" fontWeight="bold">New Arrivals</Text>
                    <HStack spacing={3}>
                        <Button  _hover={{ bg: 'white', color: 'black' }} rightIcon={<FiExternalLink />} rounded="full" colorScheme="whiteAlpha" variant="outline">
                            Calendar
                        </Button>
                    </HStack>
                </Flex>
                <Carousel
                    scrollable={true}
                    responsive={responsive}                 
                    infinite={true}
                    arrows={true}
                    ssr={true}  // Enable server-side rendering for smooth scrolling
                    itemClass=""
                  
                >
                    {events.map((event, index) => (
                        <Box
                            key={index}
                            position="relative"  // Ensure proper positioning of gradient overlay
                            bg='hsla(0, 0%, 0%, 0.5)'  // Adjusted background for frosted glass effect
                            backgroundBlendMode='soft-light'
                            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
                            borderRadius="md"
                            overflow="hidden"
                            mb={5}
                            
                            mx={2}
                            rounded={20}
                            width="280px"  // Fixed width
                            height="400px" // Fixed height
                        >
                            <Image
                                width="100%"  // Ensure image covers the container width
                                height="100%" // Ensure image covers the container height
                                objectFit='cover'
                                src={event.image}
                                alt={event.title}
                            />
                            {/* Gradient Overlay */}
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                height="100%"  // Adjust this value to control gradient height
                                bgGradient="linear(to-t, rgba(0, 0, 0, 0.9), transparent)"  // Gradient from bottom to top
                                zIndex="1"
                            />
                            {/* Text Overlay */}
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                p={4}
                                zIndex="2"
                                color="white"
                                 // Optional background to ensure readability
                                borderRadius="md"
                            >
                                <Text fontSize="xl" fontWeight="bold" mb={2}>{event.title}</Text>
                                <Flex align="center" mb={1}>
                                    <Text ml={2} whiteSpace="pre-line">{event.date}</Text>
                                </Flex>
                                <Flex align="center" mb={4}>
                                    <FiMapPin />
                                    <Text ml={2}>{event.location}</Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Button  _hover={{ bg: 'white', color: 'black' }} rounded='full' size="sm" variant='outline' colorScheme="whiteAlpha">More Info</Button>
                                    <Button  _hover={{ bg: 'white', color: 'black' }} rounded='full' size="sm" variant='outline' colorScheme="whiteAlpha">Add to Cart</Button>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default ShopsItems;
