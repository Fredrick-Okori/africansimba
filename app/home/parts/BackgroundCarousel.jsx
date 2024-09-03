"use client";
import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
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

const BackgroundCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(events.length - 1);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(activeIndex);
            setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 10000); // change image every 7 seconds
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <Box position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex="-1" overflow="hidden">
            {events.map((event, index) => (
                <Box
                    key={index}
                    width="100vw"
                    height="100vh"
                    backgroundImage={`url(${event.image})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity={index === activeIndex ? 1 : 0}
                    transition="opacity 2s ease-in-out"
                   
                    zIndex={-100}
                   
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                       
                        height="100%"
                        bg="rgba(0, 0, 0, 0.5)"  // Adjust the rgba value to control opacity
                        zIndex="3"
                    />
                </Box>
            ))}
        </Box>
    );
};

export default BackgroundCarousel;
