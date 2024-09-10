"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FiExternalLink } from 'react-icons/fi';

const events = [
    {
        title: "Wahallah Wednesdays",
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
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 20
    }
};

const UpcomingEvents = () => {
    const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
    const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

    return (
        <Container maxW="container.xl" py={10}>
            <Text fontSize="4xl" fontWeight="bold" color='white' mb={10}>Exiting Events All Through</Text>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                
                allowSwipe={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {events.map((event, index) => (
                    <Box key={index} position="relative" borderRadius="lg" m={2} overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s">
                        <Image src={event.image} alt={event.title} w="100%" h={imageHeight} objectFit="cover" />
                        <Box 
                            position="absolute" 
                            borderRadius='lg'
                            top={0} 
                            left={0} 
                            right={0} 
                            bottom={0} 
                            bgGradient="linear(to-b, rgba(0,0,0,0.3), rgba(0,0,0,0.9))"
                        >
                            <VStack 
                                position="absolute" 
                                bottom={0} 
                                left={0} 
                                right={0} 
                                p={4} 
                                align="stretch" 
                                spacing={2}
                            >
                                <Text color="white" fontSize={["sm", "md", "lg"]} fontWeight="bold">{event.title}</Text>
                                <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{event.date} at {event.location}</Text>
                                <Button 
                                    rounded='full' 
                                    textDecoration='none' 
                                    variant='outline' 
                                    colorScheme='whiteAlpha' 
                                    _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }}
                                    size={buttonSize}
                                    fontSize={["xs", "sm"]}
                                    alignSelf={{ base: "center", sm: "flex-end" }}
                                >
                                    Learn More
                                </Button>
                            </VStack>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Container>
    );
};

export default UpcomingEvents;
