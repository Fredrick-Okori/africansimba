"use client";
import React, { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Aos from 'aos';
import 'aos/dist/aos.css';

const events = [
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        image: "/images/redbg.jpg",
    },
    {
        title: "Tomorrowland Belgium",
        image: "/images/eventsbg.jpg",
    },
    {
        title: "Love Tomorrow Conference",
        image: "/images/bg.jpg",
    },
    {
        title: "Tomorrowland Brasil",
        image: "/images/defaultbg.jpg",
    },
];

const responsive = {
    superLargeDesktop: {
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

const BackgroundCarousel = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    

    return (
        <Box position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex="-1" overflow="hidden">
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={5000}
                swipeable={true}
                customTransition="fade-in 7s ease-in"                
                keyBoardControl={true}
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                sliderClass="carousel-slider"
            >
                {events.map((event, index) => (
                    <Box
                        key={index}
                        width="100vw"
                        height="100vh"
                        backgroundImage={`url(${event.image})`}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        position="relative"
                      
                        transition='opacity 2s ease-in-out'
                        // filter='brightness(1.5)'
                        overflow="hidden"
                    >
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            bg="rgba(0, 0, 0, 0.4)"  // Adjust the rgba value to control opacity
                            zIndex="1"
                        />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default BackgroundCarousel;
