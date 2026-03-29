"use client";
import React from "react";
import {
    Box,
    Flex,
    Text,
    Stack,
    Button,
    VStack,
    HStack,
    Container,
    Heading,
    Icon,
    Skeleton,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const UpcomingEvents = () => (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        {/* Section Header */}
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            mb={{ base: 8, md: 12 }}
        >
            <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.3em"
                color="var(--clr-primary-3)"
                mb={3}
            >
                Coming Up
            </Text>
            <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                color="var(--clr-primary-1)"
                fontWeight="bold"
            >
                Upcoming{" "}
                <Text as="span" color="var(--clr-primary-3)">
                    Event
                </Text>
            </Heading>
        </MotionBox>

        {/* Event Card */}
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
        >
            <Box
                bg="rgba(255,255,255,0.03)"
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius="3xl"
                overflow="hidden"
                position="relative"
            >
                {/* Accent line */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="3px"
                    bgGradient="linear(to-r, transparent, var(--clr-primary-3), transparent)"
                    zIndex={1}
                />

                <Stack
                    direction={{ base: "column", lg: "row" }}
                    spacing={0}
                >
                    {/* Images */}
                    <Flex
                        flex="1"
                        overflow="hidden"
                        direction={{ base: "column", sm: "row" }}
                        gap={0}
                    >
                        <Box position="relative" flex={1} h={{ base: "250px", sm: "300px", lg: "500px" }}>
                            <ChakraImage
                                src="/team/future_mc.avif"
                                alt="The Ibiza Experience"
                                fallback={<Skeleton h="100%" />}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                inset={0}
                                bg="linear-gradient(90deg, transparent 70%, rgba(0,0,0,0.3) 100%)"
                            />
                        </Box>
                        <Box
                            position="relative"
                            flex={1}
                            h={{ base: "250px", sm: "300px", lg: "500px" }}
                            display={{ base: "none", sm: "block" }}
                        >
                            <ChakraImage
                                src="/events/the_future_is_now.avif"
                                alt="African Simba"
                                fallback={<Skeleton h="100%" />}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                            />
                        </Box>
                    </Flex>

                    {/* Content */}
                    <Box
                        w={{ base: "100%", lg: "400px" }}
                        flexShrink={0}
                        p={{ base: 8, md: 10 }}
                        display="flex"
                        alignItems="center"
                    >
                        <VStack spacing={6} align="start" w="100%">
                            {/* Event badge */}
                            <HStack
                                bg="rgba(239,178,9,0.12)"
                                border="1px solid rgba(239,178,9,0.25)"
                                borderRadius="full"
                                px={3}
                                py={1}
                                spacing={1.5}
                            >
                                <Icon as={FiCalendar} color="var(--clr-primary-3)" boxSize={3} />
                                <Text
                                    fontSize="2xs"
                                    fontWeight="bold"
                                    color="var(--clr-primary-3)"
                                    textTransform="uppercase"
                                    letterSpacing="0.1em"
                                >
                                    Thurs, 30th April 2026
                                </Text>
                            </HStack>

                            <Box>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: "2xl", md: "3xl" }}
                                    color="var(--clr-primary-3)"
                                    fontWeight="bold"
                                    lineHeight={1.1}
                                    mb={4}
                                >
                                    THE FUTURE IS NOW
                                </Heading>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    color="rgba(255,255,255,0.6)"
                                    lineHeight="1.8"
                                >
                                    They said next up.. but he's already here. The Future is here Now. 
                                    The Future is now. The Future is now. The Future is now. The Future is now.
                                    And he is here to Stay!
                                </Text>
                            </Box>

                            <Button
                                as={Link}
                                href="https://wa.me/256754033164"
                                target="_blank"
                                rel="noopener noreferrer"
                                bg="var(--clr-primary-3)"
                                color="black"
                                rounded="2xl"
                                size="lg"
                                px={8}
                                py={7}
                                fontWeight="bold"
                                fontSize="sm"
                                w={{ base: "100%", md: "auto" }}
                                transition="all 0.3s ease"
                                _hover={{
                                    textDecoration: "none",
                                    bg: "var(--clr-primary-5)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 10px 30px -5px rgba(239,178,9,0.3)",
                                }}
                                _active={{ transform: "translateY(0)" }}
                            >
                                BOOK NOW
                                <FiChevronRight style={{ marginLeft: "8px" }} />
                            </Button>
                        </VStack>
                    </Box>
                </Stack>
            </Box>
        </MotionBox>
    </Container>
);

export default UpcomingEvents;
