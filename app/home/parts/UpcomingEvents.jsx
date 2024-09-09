"use client";
import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    VStack,
    HStack,
    Link,
    Container,
} from "@chakra-ui/react";
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from './customArrows';
import Aos from 'aos';
import 'aos/dist/aos.css';

const events = [
    {
        title: " Wahallah Wednesdays",
        date: "Wednesdays Summer 2024",
        location: "Thrones Lounge",
        image: "/images/wahallawednesday.jpg",
    },
    {
        title: "Simba Fiesta Sundays",
        date: "Sundays Summer 2024",
        location: "The Villa, Kampala",
        image: "/images/fiesta_sunday.jpg",
    },
    {
        title: "Afro Vibez Friday",
        date: "Wednesdays Summer 2024",
        location: "The CatWalk Lounge",
        image: "/images/afrovibes.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/images/ddane.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/images/eventposter.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/images/image_event.jpg",
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const UpcomingEvents = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <Box color="white" py={10} px={5}>
            <Container maxW='container.xl' data-aos='fade-in-up' data-aos-duration='300'>
                <Flex justify="space-between" align="center" mb={6}>
                    <Text fontSize="4xl" lineHeight={1.2} fontWeight="bold">Upcoming Festivals & Events</Text>
                    <HStack spacing={3}>
                        <Button rightIcon={<FiExternalLink />}
                            _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }} textDecoration='none'
                            rounded="full" colorScheme="whiteAlpha" variant="outline">
                            Calendar
                        </Button>
                    </HStack>
                </Flex>
                <Carousel
                    responsive={responsive}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    infinite={true}
                    ssr={true}
                    itemClass="carousel-item-padding-40-px"
                >
                    {events.map((event, index) => (
                        <VStack
                            key={index}
                            spacing={3}
                            align="start"
                          
                            cursor="pointer"
                            borderRadius="xl"
                            overflow="hidden"
                        
                            border='1px solid transparent'
                            position="relative"
                         
                            width="300px"  // Fixed width
                            height="400px" // Fixed height
                        >
                        <Box
                            // key={index}
                            // position="relative"  // Ensure proper positioning of gradient overlay
                            // bg='hsla(0, 0%, 0%, 0.5)'  // Adjusted background for frosted glass effect
                            // backgroundBlendMode='soft-light'
                            // boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
                       
                            // borderRadius="md"
                            // overflow="hidden"
                            // mb={5}
                            // mx={2}
                            // rounded={20}
                          
                        >
                            <Image
                                width="100%"  // Ensure image covers the container width
                                height="100%" // Ensure image covers the container height
                                    objectFit='cover'
                                    transition="all 0.3s"
                                    _hover={{ transform: 'scale(1.05)' }}
                                src={event.image}
                                alt={event.title}
                            />
                            {/* Gradient Overlay */}
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                height="40%"  // Adjust this value to control gradient height
                                bgGradient="linear(to-t, rgba(0, 0, 0, 0.7), transparent)"  // Gradient from bottom to top
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
                                bg='rgba(0, 0, 0, 0.9)'  // Optional background to ensure readability
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
                                    <Button rounded='full' size="sm" _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }} textDecoration='none' variant='outline' colorScheme="whiteAlpha">More Info</Button>
                                    <Button rounded='full' size="sm" _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }} textDecoration='none' variant='outline' as={Link} href='/bookings' colorScheme="whiteAlpha">Tickets</Button>
                                </Flex>
                            </Box>
                            </Box>
                            </VStack>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default UpcomingEvents;
