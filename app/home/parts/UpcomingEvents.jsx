"use client";
import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
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
                <Flex justify="space-between" align="center" mb={5}>
                    <Text fontSize="4xl" fontWeight="bold">Upcoming Festivals & Events</Text>
                    <HStack spacing={3}>
                        <Button rightIcon={<FiExternalLink />} rounded="full" colorScheme="whiteAlpha" variant="outline">
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
                            width="300px"  // Fixed width
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
                                    <Button rounded='full' size="sm" variant='outline' colorScheme="whiteAlpha">More Info</Button>
                                    <Button rounded='full' size="sm" variant='outline' as={Link} href='/bookings' colorScheme="whiteAlpha">Tickets</Button>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default UpcomingEvents;