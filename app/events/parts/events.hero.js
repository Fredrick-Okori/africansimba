'use client'
import React from 'react';
import { 
    Container, 
    Box, 
    Text, 
    Grid, 
    VStack, 
    HStack, 
    ButtonGroup,
    Button,
    useColorModeValue
} from '@chakra-ui/react';
import { FiPhone, FiGlobe, FiArrowRight, FiMapPin, FiInfo, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

export default function EventsHero() {
 // Weekly programs data - UPDATED with bookingLink
const weeklyPrograms = [

    {
        day: "20",
        dayName: "WEDNESDAY",
        event: "WAHALA WEDNESDAYS",
        venue: "Thrones Lounge",
        location: "Bugolobi",
        genre: "Afrobeats",
        description: "Midweek Party Madness",
        bookingLink: "https://kayetickets.com/event/wahala-wednesdays" // ADDED booking link
    },
    {
        day: "22",
        dayName: "FRIDAY",
        event: "SWIFT FRIDAYS",
        venue: "NOMAD Lounge",
        location: "Ggaba",
        description: "Premium Hyper Party",
        bookingLink: "https://kayetickets.com/event/swift-fridays" // ADDED booking link
    },
    {
        day: "23",
        dayName: "SATURDAY",
        event: "GGABA BIG BALLERS",
        venue: "Paradigm Lounge",
        location: "Ggaba",
        description: "Big Baller Experience",
        bookingLink: "https://kayetickets.com/event/ggaba-big-ballers" // ADDED booking link
    }
];

    return (
        <Box
            minH="100vh"

            position="relative"
            overflow="hidden"
        >
            {/* Abstract Background Elements */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.1"
            >
                {/* Curved shapes */}
                <Box
                    position="absolute"
                    top="-20%"
                    left="-10%"
                    width="60%"
                    height="80%"
                    borderRadius="50%"
                    bg="red"
                    transform="rotate(-15deg)"
                />
                <Box
                    position="absolute"
                    bottom="-30%"
                    right="-15%"
                    width="70%"
                    height="90%"
                    borderRadius="50%"
                    bg="red"
                    transform="rotate(25deg)"
                />
                <Box
                    position="absolute"
                    top="20%"
                    right="10%"
                    width="40%"
                    height="60%"
                    borderRadius="50%"
                    bg="red"
                    transform="rotate(-45deg)"
                />
            </Box>

            <Container maxW="container.xl" position="relative" zIndex="1" py={{ base: 8, md: 16 }}>
                <Grid templateColumns={{ base: "1fr", lg: "300px 1fr" }} gap={{ base: 8, lg: 12 }} alignItems="start">
                    
                    {/* Left Side - Branding & Header */}
                    <VStack spacing={8} align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }}>
                       

{/* Vertical Text */}
<Box display={{ base: "none", lg: "block" }} position="relative">
    <Text
        color="white"
        fontSize="6xl"
        fontWeight="900"
        lineHeight="0.8"
        letterSpacing="-0.05em"
        transform="rotate(-90deg)"
        transformOrigin="center"
        whiteSpace="nowrap"
        position="absolute"
        top="120px"
        left="-10" // Adjust this value to control spacing
    >
        Weekly 
    </Text>
    <Text
        color="white"
        fontSize="6xl"
        fontWeight="900"
        lineHeight="0.8"
        letterSpacing="-0.05em"
        transform="rotate(-90deg)"
        transformOrigin="center"
        whiteSpace="nowrap"
        position="absolute"
        top="120px" // Adjust this value to control spacing
        left="0"
        opacity="0.7"
    >
        Schedule
    </Text>
</Box>

                        {/* Mobile Header */}
                        <Box display={{ base: "block", lg: "none" }} textAlign="center">
                            <Text
                                color="white"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                fontWeight="900"
                                lineHeight="0.9"
                                letterSpacing="-0.03em"
                            >
                                EVENT
                            </Text>
                            <Text
                                color="white"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                fontWeight="900"
                                lineHeight="0.9"
                                letterSpacing="-0.03em"
                                opacity="0.7"
                            >
                                SCHEDULE
                            </Text>
                        </Box>
                    </VStack>

                    {/* Right Side - Schedule */}
                    <VStack spacing={0} align="stretch">
                        {/* Month/Year Header */}
                        <Box mb={8} textAlign={{ base: "center", lg: "left" }}>
                            <Text
                                color="#ffffffff"
                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                fontWeight="900"
                                letterSpacing="-0.02em"
                            >
                               Be part of the Game Changers
                            </Text>
                        </Box>

                        {/* Schedule Items */}
                        <VStack spacing={0} align="stretch">
                            {weeklyPrograms.map((program, index) => (
                                <Grid
                               
                                target="_blank"
                                rel="noopener noreferrer"
                                    key={index}
                                    templateColumns={{ base: "80px 1fr", md: "100px 1fr" }}
                                    gap={{ base: 4, md: 6 }}
                                    py={{ base: 4, md: 6 }}
                                    borderBottom="1px solid rgba(255,255,255,0.2)"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        bg: "rgba(255,255,255,0.1)",
                                        transform: "translateX(8px)"
                                    }}
                                    cursor="pointer"
                                    borderRadius="lg"
                                    px={{ base: 2, md: 4 }}
                                >
                                    {/* Date */}
                                    <VStack spacing={0} align="center">
                                       
                                        <Text
                                            color="#F59E0B"
                                            fontSize={{ base: "xs", md: "sm" }}
                                            fontWeight="bold"
                                            letterSpacing="0.1em"
                                        >
                                            {program.dayName}
                                        </Text>
                                    </VStack>

                                    {/* Event Details */}
                                    <VStack align="start" spacing={{ base: 2, md: 3 }}>
                                        <HStack justify="space-between" width="100%" flexWrap="wrap">
                                            <Text
                                                color="#F59E0B"
                                                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                                                fontWeight="bold"
                                                lineHeight="1.2"
                                            >
                                                {program.event}
                                            </Text>
                                          
                                        </HStack>

                                        <HStack spacing={4} flexWrap="wrap">
                                            <FiMapPin color='white'/>
                                            <Text
                                                color="white"
                                                fontSize={{ base: "sm", md: "md" }}
                                                opacity="0.8"
                                            >
                                                
                                                {program.venue} • {program.location}
                                            </Text>
                                           
                                            <Text
                                                color="white"
                                                fontSize={{ base: "sm", md: "md" }}
                                                opacity="0.8"
                                            >
                                                {program.time}
                                            </Text>
                                        </HStack>

                                        <Text
                                            color="white"
                                            fontSize={{ base: "sm", md: "md" }}
                                            opacity="0.7"
                                            lineHeight="1.5"
                                            display={{ base: "none", md: "block" }}
                                        >
                                            {program.description}
                                        </Text>

                                        {/* Mobile Book Button */}
                                        <Button
                                            size="sm"
                                            bg="rgba(255,255,255,0.2)"
                                            color="white"
                                            _hover={{
                                                bg: "rgba(255,255,255,0.3)",
                                                transform: "translateY(-2px)"
                                            }}
                                            borderRadius="full"
                                            px={4}
                                            as={Link}
                                            // UPDATED: Use the specific bookingLink
                                            href={program.bookingLink}
                                            // Added external link properties for kayetickets.com
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            fontWeight="bold"
                                            rightIcon={<FiArrowRight />}
                                            display={{ base: "inline-flex", md: "none" }}
                                        >
                                            Book
                                        </Button>
                                    </VStack>
                                </Grid>
                            ))}
                        </VStack>

                        {/* Contact Info */}
                        <Box
                            mt={12}
                            p={{ base: 6, md: 8 }}
                            bg="rgba(0,0,0,0.3)"
                            borderRadius="2xl"
                            backdropFilter="blur(20px)"
                     
                       
                        alignItems={{ base: "start", md: "center" }}
                        >
                             <Text
                                color="#ffffffff"
                                fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
                                fontWeight="900"
                                letterSpacing="-0.02em"
                            >
                                 Book your premium spot now
                            </Text>
                            
                            <VStack spacing={3} align="start">
                              
                                <HStack spacing={3}>
                                  
                                    <Text
                                                                          fontWeight="bold"
                                                                          fontSize={{ base: "sm", lg: "md" }}
                                                                          color="var(--clr-primary-1)"
                                                                          mt={2}
                                                                          textShadow="1px 1px 4px rgba(0,0,0,0.8)"
                                                                        >
                                                                         An emotional and authentic experience with the Game <br/> Changers including the high-energy DJs
                                                                        </Text>
                                </HStack>
                            </VStack>

                            {/* CTA Buttons - Assuming these will link to a general events/booking page */}
                            <HStack spacing={4} mt={6} flexWrap="wrap">
                                <ButtonGroup spacing={8}>
                                          
                                             <Button
                                               as={Link}
                                               href="/contact-us" // Example: general booking page on kayetickets
                                               target="_blank" // Open in new tab
                                               rel="noopener noreferrer"
                                                bg='var(--clr-primary-1)'
                                               color='black'
                                              
                                                 transform="translateY(-2px)"
                                                 boxShadow="0 8px 25px rgba(0,0,0,0.3)"
                                               _hover={{
                                                 textDecoration: "none",
                                                 bg: "var(--clr-primary-1)",
                                                 color: "black",
                                                 transform: "translateY(-2px)",
                                                 boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
                                               }}
                                               rounded="full"
                                               size="md"
                                               variant="outline"
                                               
                                             
                                               backdropFilter="blur(8px)"
                                            
                                               transition="all 0.3s ease"
                                             >
                                              Book Now
                                              <FiChevronRight style={{ marginLeft: '8px' }} />
                                             </Button>
                                           </ButtonGroup>
                            </HStack>
                        </Box>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    );
}