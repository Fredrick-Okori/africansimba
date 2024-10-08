'use client'
import { Box, Flex, Heading, Text, VStack, Avatar, Stack, Container, HStack } from "@chakra-ui/react";

const About = () => {
    return (
        <Container maxW="container.xl" p={8}>
            <HStack mt={10} pt={10} spacing={10} display={{ base: "block", md: "flex" }}>
                {/* Header Section */}
                <Flex direction="column" align="center" textAlign="center" mb={10}>
                    <Heading size={{ base: "3xl", md: "4xl" }} mb={4} color="var(--clr-primary-1)">
                        About Us
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color="var(--clr-primary-1)" maxW={{ base: "auto", md: "600px" }}>
                        We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do.
                        From event planning to execution, we believe in creating memorable experiences that make a difference.
                    </Text>
                </Flex>

                {/* Team Section */}
                <VStack spacing={10} align="center">
                    <Heading as="h2" size="lg" color="var(--clr-primary-1)" mb={5}>
                        Meet Our Team
                    </Heading>
                    <Flex wrap="wrap" justify="center" spacing={10} display={{ base: "block", md: "flex" }}>
                        {/* Team Member 1 */}
                        <Box
                            p={5}
                            bg="white"
                            shadow="md"
                            rounded="lg"
                            w={{ base: "auto", md: "250px" }}
                            textAlign="center"
                            _hover={{ shadow: "lg", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo" mb={4} />
                            <Heading as="h3" size="md" color="purple.600">
                                Johnny Wood
                            </Heading>
                            <Text color="var(--clr-primary-1)">Event Planner</Text>
                        </Box>

                        {/* Team Member 2 */}
                        <Box
                            p={5}
                            bg="white"
                            shadow="md"
                            rounded="lg"
                            w={{ base: "auto", md: "250px" }}
                            textAlign="center"
                            _hover={{ shadow: "lg", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <Avatar size="xl" src="https://bit.ly/code-beast" mb={4} />
                            <Heading as="h3" size="md" color="var(--clr-primary-1">
                                Alex Johnson
                            </Heading>
                            <Text color="var(--clr-primary-1)">Event Manager</Text>
                        </Box>

                        {/* Team Member 3 */}
                        <Box
                            p={5}
                            bg="white"
                            shadow="md"
                            rounded="lg"
                            w={{ base: "auto", md: "250px" }}
                            textAlign="center"
                            _hover={{ shadow: "lg", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <Avatar size="xl" src="https://bit.ly/kent-c-dodds" mb={4} />
                            <Heading as="h3" size="md" color="var(--clr-primary-1">
                                Sarah Lee
                            </Heading>
                            <Text color="var(--clr-primary-1)">Event Coordinator</Text>
                        </Box>
                    </Flex>
                </VStack>

                {/* Mission Section */}
                <Flex direction="column" align="center" textAlign="center" mt={20} mb={10}>
                    <Heading as="h2" size="lg" mb={4} color="var(--clr-primary-1)">
                        Our Mission
                    </Heading>
                    <Text fontSize="lg" color="var(--clr-primary-1)" maxW={{ base: "auto", md: "600px" }}>
                        Our mission is to create and execute exceptional events that leave a lasting impression.
                        We aim to provide innovative and effective solutions through our passion for event management.
                    </Text>
                </Flex>
            </HStack>
        </Container>
    );
};

export default About;
