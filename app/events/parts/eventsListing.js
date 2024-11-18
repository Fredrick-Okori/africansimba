"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, Grid, useBreakpointValue, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ROUTE_POST_ID = 'store/[id]';

import { events } from './data';

const EventsListing = () => {
    const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
    const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

    return (
        <Container maxW="container.xl" py={10}>
            <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }}>
                <Box mb={{ base: 4, md: 0 }}>
                    <Text fontSize={fontSize} fontWeight="bold" color="var( --clr-primary-1)" mb={3}>Every event is special</Text>
                    <Text fontSize={subFontSize} fontWeight="normal" color="white">Join the Game Changers</Text>
                </Box>
            </Flex>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
                {events.map((event, index) => (
                    <Link href={`/events/${event.id}`} key={index}>
                        <a>
                            <Box position="relative" borderRadius="lg" overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s">
                                <Image src={event.image} alt={event.name} w="100%" h={imageHeight} objectFit="cover" />
                                <Box
                                    position="absolute"
                                    borderRadius='lg'
                                    top={0}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    bgGradient="linear(to-b, rgba(0,0,0,0.1), rgba(0,0,0,0.9))"
                                >
                                    <VStack
                                        position="absolute"
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        p={4}
                                        align="stretch"
                                        spacing={2}
                                    >
                                        <Text color="var( --clr-primary-1)" fontSize={["sm", "md", "lg"]} fontWeight="bold">{event.name}</Text>
                                        <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{event.host}</Text>
                                       
                                    </VStack>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                ))}
            </Grid>
        </Container>
    );
};

export default EventsListing;
