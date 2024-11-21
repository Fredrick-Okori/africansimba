'use client';

import { Box, Flex, Heading, Text, VStack, Container } from "@chakra-ui/react";
import Image from "next/image";

const About = () => {
    return (
        <>
            {/* Background Image */}
            <Box position="relative" w="100%" h="50px" overflow="hidden">
                <Image
                    src="/compressed/print_patterns.avif"
                    alt="African Simba Print Patterns"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                />
            </Box>

            <Container maxW="container.xl" p={{ base: 4, md: 8 }}>
                <VStack spacing={10} align="center">
                    {/* Header Section */}
                    <Box textAlign="center" mb={10}>
                        <Heading size={{ base: "2xl", md: "lg" }} mb={4} color="var(--clr-primary-1)">
                            About Us
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md" }} color="var(--clr-primary-1)" maxW="700px">
                            We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do.
                            From event planning to execution, we believe in creating memorable experiences that make a difference.
                        </Text>
                        <Heading as="h2" size="lg" mt={6} mb={4} color="var(--clr-primary-1)">
                            Our Mission
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md" }} color="var(--clr-primary-1)" maxW="700px">
                            Our mission is to create and execute exceptional events that helps people celebrate life.
                            We aim to provide innovative and effective solutions through our passion for event management.
                        </Text>
                    </Box>

                    {/* CEO Section */}
                    <Box w="100%">
                        <Heading as="h2" size="lg" color="var(--clr-primary-1)" textAlign="center" mb={6}>
                            Our Team
                        </Heading>
                        <Flex 
                            direction={{ base: "column", md: "row" }} 
                            align="center" 
                            gap={8} 
                            px={{ base: 2, md: 4 }}
                        >
                            {/* CEO Image */}
                            <Box 
                                flexShrink={0} 
                                w={{ base: "100%", md: "50%" }} 
                                h={{ base: "300px", md: "400px" }} 
                                position="relative" 
                                overflow="hidden" 
                                rounded="lg"
                            >
                                <Image
                                    src="/compressed/ceo_2.webp"
                                    alt="CEO Image"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={80}
                                    priority
                                    style={{ borderRadius: "10px" }}
                                />
                            </Box>

                            {/* CEO Description */}
                            <VStack 
                                flex="1" 
                                align="start" 
                                spacing={2} 
                                textAlign={{ base: "center", md: "left" }}
                            >
                                <Heading size="md" color="var(--clr-primary-1)">
                                    African Simba
                                </Heading>
                                <Text fontSize="sm" color="var(--clr-primary-1)">
                                    Chief Executive Officer
                                </Text>
                                <Text fontSize="sm" color="var(--clr-primary-1)">
                              
                                CEO/Host/Bookwriter/Marketer
                                </Text>
                                <Text mt={2} fontSize="md" color="var(--clr-primary-1)">
                                    Simba is a visionary leader committed to fostering innovation and excellence
                                    across all aspects of our company. With years of experience in event management,
                                    his leadership has been instrumental in achieving our mission and vision.
                                </Text>
                            </VStack>
                        </Flex>
                    </Box>
                </VStack>
            </Container>
        </>
    );
};

export default About;
