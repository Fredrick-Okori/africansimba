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
    useBreakpointValue,
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

const ShopsItems = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const itemWidth = useBreakpointValue({ base: "90%", sm: "280px", md: "280px", lg: "280px" });
    const itemHeight = useBreakpointValue({ base: "350px", sm: "400px", md: "400px", lg: "400px" });
    const fontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
    const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
    const smallFontSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <Box color="white" py={10} px={5}>
            <Container maxW='container.2xl' data-aos='fade-in-up' data-aos-duration='300'>
                <Flex justify="space-between" align="center" mb={5} flexDirection={{ base: "column", md: "row" }}>
                    <Text fontSize={fontSize} fontWeight="bold" mb={{ base: 4, md: 0 }}>New Arrivals</Text>
                    <HStack spacing={3}>
                        <Button _hover={{ bg: 'white', color: 'black' }} rightIcon={<FiExternalLink />} rounded="full" colorScheme="whiteAlpha" variant="outline" size={buttonSize}>
                            Calendar
                        </Button>
                    </HStack>
                </Flex>
                <Carousel
                    scrollable={true}
                    responsive={responsive}                 
                    infinite={true}
                    arrows={true}
                    ssr={true}
                    itemClass=""
                >
                    {events.map((event, index) => (
                        <Box
                            key={index}
                            position="relative"
                            bg='hsla(0, 0%, 0%, 0.5)'
                            backgroundBlendMode='soft-light'
                            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
                            borderRadius="md"
                            overflow="hidden"
                            mb={5}
                            mx={2}
                            rounded={20}
                            width={itemWidth}
                            height={itemHeight}
                        >
                            <Image
                                width="100%"
                                height="100%"
                                objectFit='cover'
                                src={event.image}
                                alt={event.title}
                            />
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                height="100%"
                                bgGradient="linear(to-t, rgba(0, 0, 0, 0.9), transparent)"
                                zIndex="1"
                            />
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                p={4}
                                zIndex="2"
                                color="white"
                                borderRadius="md"
                            >
                                <Text fontSize={fontSize} fontWeight="bold" mb={2}>{event.title}</Text>
                                <Flex align="center" mb={1}>
                                    <Text ml={2} whiteSpace="pre-line" fontSize={smallFontSize}>{event.date}</Text>
                                </Flex>
                                <Flex align="center" mb={4}>
                                    <FiMapPin />
                                    <Text ml={2} fontSize={smallFontSize}>{event.location}</Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Button _hover={{ bg: 'white', color: 'black' }} rounded='full' size={buttonSize} variant='outline' colorScheme="whiteAlpha">More Info</Button>
                                    <Button _hover={{ bg: 'white', color: 'black' }} rounded='full' size={buttonSize} variant='outline' colorScheme="whiteAlpha">Add to Cart</Button>
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
