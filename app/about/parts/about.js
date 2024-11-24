'use client';

import { Box, Flex, Heading, Text, SimpleGrid, VStack, Container } from "@chakra-ui/react";
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
          
                    {/* Header Section */}
                    <Box display='flex' dir={{base: 'row', lg: 'column'}} mt={10} mb={10} alignItems='center' justifyContent='space-evenly'>
                    
                        <Box textAlign="left" mb={10} w={{ base: "100%", md: "50%" }}>
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
                        <Box  color='var(--clr-primary-1)'>
                        <Heading color='var(--clr-primary-1'>Our Services</Heading>
                        <Text as='p'  color='var(--clr-primary-1)' mb={5} textAlign='left' >
                        Activities
                        </Text>
                        <Text as='ul'  color='var(--clr-primary-1)' mb={5} textAlign='left' >
                        <li>Hosting</li>
                        <li>Marketing</li>
                        <li>Event Planning</li>
                        <li>Talent Management</li>
                        <li>Video Coverage</li>
                        <li>Conceptualisation</li>
                       
                        </Text>
                        </Box>
                   
                    </Box>

                    {/* CEO Section */}
                    <Box w="100%">
                        <Heading as="h2" size="2xl" color="var(--clr-primary-1)" textAlign="left" mb={6}>
                            Our Team
                        </Heading>
                        <Flex 
                            direction={{ base: "column", md: "row" }} 
                            align="center" 
                            gap={8} 
                            
                        >
                            {/* CEO Image */}
                           
                                <Image
                                    src="/compressed/ceo_2.webp"
                                    alt="CEO Image"
                                  width={300}
                                  height={200}
                                    objectFit="contain"
                                    quality={80}
                                    style={{borderRadius: '10px'}}
                                    priority
                                   
                                />
                         

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
                              
                                CEO/Host/Bookwriter/Marketer/Speaker
                                </Text>
                                <Text mt={2} fontSize="md" color="var(--clr-primary-1)">
                                    African Simba is a visionary leader committed to fostering innovation and excellence
                                    across all aspects of our company. With years of experience in event management,
                                    his leadership has been instrumental in achieving our mission and vision.
                                </Text>
                            </VStack>
                        </Flex>
                    </Box>
             
            </Container>
        </>
    );
};

export default About;
