"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

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
        title: "Wahallah Wednesdays",
        date: "Wednesdays Summer 2024",
        location: "Thrones Lounge",
        image: "/images/wahallawednesday.jpg",
    },
    {
        title: "Wahallah Wednesdays",
        date: "Wednesdays Summer 2024",
        location: "Thrones Lounge",
        image: "/images/wahallawednesday.jpg",
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
            <Text fontSize={{base: '3xl', lg: '4xl'}} fontWeight="bold" color='white' mb={10}>Exciting events all through</Text>
            
        </Container>
    );
};

export default UpcomingEvents;
