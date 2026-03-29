"use client";
import React from "react";
import { Box, Container, Text, Button, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import DJS from "./DJ";
import Counter from "./Counter";

const MotionBox = motion(Box);

export default function EventSchedule() {
    return (
        <Box>
            <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "start", md: "end" }}
                    gap={6}
                    mb={{ base: 6, md: 0 }}
                >
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Text
                            fontSize="xs"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="0.3em"
                            color="var(--clr-primary-3)"
                            mb={3}
                        >
                            Who We Are
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: "2xl", md: "4xl" }}
                            color="var(--clr-primary-1)"
                            fontWeight="bold"
                            lineHeight={1.2}
                            mb={3}
                        >
                            We are the{" "}
                            <Text as="span" color="var(--clr-primary-3)">
                                Game Changers
                            </Text>
                        </Heading>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            color="rgba(255,255,255,0.5)"
                            maxW="500px"
                            lineHeight="1.7"
                        >
                            An emotional and authentic experience with the Game
                            Changers including the high-energy DJs
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        flexShrink={0}
                    >
                        <Button
                            as={Link}
                            href="/events"
                            rounded="2xl"
                            size="lg"
                            px={8}
                            py={7}
                            fontWeight="bold"
                            fontSize="sm"
                            bg="rgba(255,255,255,0.08)"
                            color="var(--clr-primary-1)"
                            border="1px solid rgba(255,255,255,0.1)"
                            transition="all 0.3s ease"
                            _hover={{
                                textDecoration: "none",
                                bg: "rgba(255,255,255,0.12)",
                                transform: "translateY(-2px)",
                                borderColor: "rgba(239,178,9,0.3)",
                            }}
                            _active={{ transform: "translateY(0)" }}
                        >
                            View Events
                            <FiChevronRight style={{ marginLeft: "8px" }} />
                        </Button>
                    </MotionBox>
                </Flex>
            </Container>

            <DJS />
            <Counter />
        </Box>
    );
}
