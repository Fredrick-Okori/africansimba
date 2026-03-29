'use client';
import React from 'react';
import {
    Container,
    Box,
    Text,
    VStack,
    HStack,
    Button,
    Heading,
    Flex,
    Icon,
    SimpleGrid,
} from '@chakra-ui/react';
import { FiMapPin, FiChevronRight, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const weeklyPrograms = [
    {
        dayName: "WEDNESDAY",
        event: "Wahala Wednesdays",
        venue: "Thrones Lounge",
        location: "Bugolobi",
        description: "Midweek Party Madness",
        bookingLink: "#",
    },
    {
        dayName: "FRIDAY",
        event: "Swift Fridays",
        venue: "NOMAD Lounge",
        location: "Ggaba",
        description: "Premium Hyper Party",
        bookingLink: "#",
    },
    {
        dayName: "SATURDAY",
        event: "Ggaba Big Ballers",
        venue: "Paradigm Lounge",
        location: "Ggaba",
        description: "Big Baller Experience",
        bookingLink: "#",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

const ScheduleCard = React.memo(({ program, index }) => (
    <MotionBox
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
    >
        <Box
            as={Link}
            href={program.bookingLink}
            target="_parent"
            rel="noopener noreferrer"
            display="block"
            bg="rgba(255,255,255,0.03)"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="2xl"
            p={{ base: 5, md: 6 }}
            transition="all 0.4s ease"
            _hover={{
                bg: "rgba(255,255,255,0.06)",
                borderColor: "rgba(239,178,9,0.3)",
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                textDecoration: "none",
            }}
            role="group"
            position="relative"
            overflow="hidden"
        >
            {/* Day badge */}
            <Box
                position="absolute"
                top={5}
                right={5}
            >
                <Box
                    bg="rgba(239,178,9,0.12)"
                    border="1px solid rgba(239,178,9,0.25)"
                    borderRadius="full"
                    px={3}
                    py={1}
                >
                    <Text
                        fontSize="2xs"
                        fontWeight="bold"
                        color="var(--clr-primary-3)"
                        textTransform="uppercase"
                        letterSpacing="0.1em"
                    >
                        {program.dayName}
                    </Text>
                </Box>
            </Box>

            <VStack align="start" spacing={3}>
                <Box
                    w="40px"
                    h="40px"
                    borderRadius="xl"
                    bg="rgba(239,178,9,0.1)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{ bg: "rgba(239,178,9,0.2)" }}
                >
                    <Icon as={FiCalendar} color="var(--clr-primary-3)" boxSize={4} />
                </Box>

                <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="var(--clr-primary-3)"
                    lineHeight={1.2}
                >
                    {program.event}
                </Text>

                <HStack spacing={2} color="rgba(255,255,255,0.6)">
                    <Icon as={FiMapPin} boxSize={3.5} />
                    <Text fontSize="sm">
                        {program.venue} &bull; {program.location}
                    </Text>
                </HStack>

                <Text
                    fontSize="sm"
                    color="rgba(255,255,255,0.4)"
                    lineHeight="1.6"
                >
                    {program.description}
                </Text>
            </VStack>
        </Box>
    </MotionBox>
));

ScheduleCard.displayName = 'ScheduleCard';

export default function EventsHero() {
    return (
        <Box position="relative" overflow="hidden" py={{ base: 10, md: 16 }}>
            {/* Subtle background glow */}
            <Box
                position="absolute"
                top="20%"
                left="-10%"
                w="500px"
                h="500px"
                bg="radial-gradient(circle, rgba(239,178,9,0.06) 0%, transparent 70%)"
                pointerEvents="none"
            />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                {/* Header */}
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
                        Weekly Schedule
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        color="var(--clr-primary-1)"
                        fontWeight="900"
                        lineHeight={1.1}
                        mb={4}
                    >
                        Be part of the{' '}
                        <Text as="span" color="var(--clr-primary-3)">
                            Game Changers
                        </Text>
                    </Heading>
                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="rgba(255,255,255,0.5)"
                        maxW="500px"
                    >
                        Join us at the hottest weekly events in Kampala. Every night is an experience.
                    </Text>
                </MotionBox>

                {/* Schedule Cards */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={{ base: 10, md: 14 }}>
                    {weeklyPrograms.map((program, index) => (
                        <ScheduleCard key={program.event} program={program} index={index} />
                    ))}
                </SimpleGrid>

                {/* CTA Banner */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box
                        bg="rgba(239,178,9,0.05)"
                        border="1px solid rgba(239,178,9,0.15)"
                        borderRadius="3xl"
                        p={{ base: 8, md: 12 }}
                        position="relative"
                        overflow="hidden"
                    >
                        {/* Accent line */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            h="3px"
                            bgGradient="linear(to-r, transparent, var(--clr-primary-3), transparent)"
                        />

                        <Flex
                            direction={{ base: "column", md: "row" }}
                            align={{ base: "start", md: "center" }}
                            justify="space-between"
                            gap={6}
                        >
                            <Box>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: "2xl", md: "3xl" }}
                                    color="var(--clr-primary-1)"
                                    fontWeight="bold"
                                    mb={3}
                                >
                                    Book your{' '}
                                    <Text as="span" color="var(--clr-primary-3)">premium</Text>{' '}
                                    spot now
                                </Heading>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    color="rgba(255,255,255,0.6)"
                                    maxW="500px"
                                    lineHeight="1.7"
                                >
                                    An emotional and authentic experience with the Game Changers including the high-energy DJs.
                                </Text>
                            </Box>

                            <Button
                                as={Link}
                                href="/contact-us"
                                bg="var(--clr-primary-3)"
                                color="black"
                                rounded="2xl"
                                size="lg"
                                px={8}
                                py={7}
                                fontWeight="bold"
                                fontSize="sm"
                                flexShrink={0}
                                transition="all 0.3s ease"
                                _hover={{
                                    textDecoration: "none",
                                    bg: "var(--clr-primary-5)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 10px 30px -5px rgba(239,178,9,0.3)",
                                }}
                                _active={{ transform: "translateY(0)" }}
                            >
                                Book Now
                                <FiChevronRight style={{ marginLeft: '8px' }} />
                            </Button>
                        </Flex>
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
}
