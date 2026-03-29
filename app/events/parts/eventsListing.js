"use client";
import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { Chakra_Image as ChakraImage } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

import { events } from "./data";

const MotionBox = motion(Box);

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1200, min: 992 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
};

const EventCard = React.memo(({ event }) => (
    <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        mx={2}
        transition="all 0.4s ease"
        border="1px solid rgba(255,255,255,0.06)"
        role="group"
        _hover={{
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
            borderColor: "rgba(239,178,9,0.2)",
        }}
    >
        <Box position="relative" h={{ base: "400px", md: "380px" }}>
            <Image
                src={event.image}
                alt={event.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                quality={75}
                loading="lazy"
            />
            {/* Gradient overlay */}
            <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9) 100%)"
                transition="all 0.4s ease"
                _groupHover={{ bg: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.95) 100%)" }}
            />

            {/* Content */}
            <VStack
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={5}
                align="start"
                spacing={2}
            >
                <Text
                    color="var(--clr-primary-3)"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    textShadow="0 2px 4px rgba(0,0,0,0.5)"
                    lineHeight={1.2}
                >
                    {event.name}
                </Text>
                <HStack spacing={2} color="rgba(255,255,255,0.7)">
                    <Icon as={FiMapPin} boxSize={3} />
                    <Text fontSize="xs" textShadow="0 1px 2px rgba(0,0,0,0.5)">
                        {event.host}
                    </Text>
                </HStack>
            </VStack>
        </Box>
    </Box>
));

EventCard.displayName = "EventCard";

const EventsListing = () => {
    return (
        <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                mb={8}
            >
                <Text
                    fontSize="xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                    color="var(--clr-primary-3)"
                    mb={3}
                >
                    Featured
                </Text>
                <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="var(--clr-primary-1)"
                    mb={2}
                >
                    Hosted{' '}
                    <Text as="span" color="var(--clr-primary-3)">Nights</Text>
                </Heading>
                <Text fontSize="sm" color="rgba(255,255,255,0.5)">
                    Join the Game Changers
                </Text>
            </MotionBox>

            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                keyBoardControl
                removeArrowOnDeviceType={["mobile"]}
            >
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </Carousel>
        </Container>
    );
};

export default EventsListing;
