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
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setPrevIndex(activeIndex);
            setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
            setTimeout(() => setIsTransitioning(false), 2000); // Match transition duration
        }, 20000); // change image every 20 seconds
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <Box position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex="-1" overflow="hidden">
            {events.map((event, index) => (
                <Box
                    key={index}
                    width="100vw"
                    // data-aos='zoom-up' data-aos-duration='2000'
                    height="100vh"
                    backgroundImage={`url(${event.image})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity={index === activeIndex ? 1 : index === prevIndex ? 0 : 0}
                    transition="opacity 4s ease-in-out"
                    zIndex={index === activeIndex ? -99 : -100}
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="rgba(0, 0, 0, 0.3)"
                        zIndex="3"
                    />
                </Box>
            ))}
        </Box>
    );
};

export default BackgroundCarousel;