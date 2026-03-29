'use client';
import React from 'react';
import { Container, Box, Text, SimpleGrid, VStack, HStack, Heading, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { events } from '../data.upcoming';

const MotionBox = motion(Box);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08 },
    }),
};

const EventCard = React.memo(({ event, index }) => (
    <MotionBox
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
    >
        <Box
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.06)"
            transition="all 0.4s ease"
            role="group"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                borderColor: "rgba(239,178,9,0.2)",
            }}
        >
            <Box position="relative" h={{ base: "300px", md: "350px" }}>
                <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    quality={75}
                    loading="lazy"
                />
                <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9) 100%)"
                    transition="all 0.4s ease"
                    _groupHover={{ bg: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.95) 100%)" }}
                />

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
    </MotionBox>
));

EventCard.displayName = 'EventCard';

export default function Upcoming() {
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
                    Highlights
                </Text>
                <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="var(--clr-primary-1)"
                    mb={2}
                >
                    Previous{' '}
                    <Text as="span" color="var(--clr-primary-3)">Events</Text>
                </Heading>
                <Text fontSize="sm" color="rgba(255,255,255,0.5)">
                    A look back at our greatest nights
                </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {events.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
