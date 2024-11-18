'use client'

import { Box, Flex, Heading, Text, VStack, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const About = () => {
    return (
        <>
            {/* Background Image */}
            <Box position="relative" w="100%" h={{ base: "50px", md: "50px" }} overflow="hidden">
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
                        <Heading size={{ base: "2xl", md: "lg" }} mb={4} color="var(--clr-primary-2)">
                            About Us
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md" }} color="var(--clr-primary-2)" maxW="700px">
                            We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do.
                            From event planning to execution, we believe in creating memorable experiences that make a difference.
                        </Text>
                        <Heading as="h2" size="lg" mt={6} mb={4} color="var(--clr-primary-2)">
                            Our Mission
                        </Heading>
                        <Text fontSize={{ base: "sm", md: "md" }} color="var(--clr-primary-2)" maxW="700px">
                            Our mission is to create and execute exceptional events that leave a lasting impression.
                            We aim to provide innovative and effective solutions through our passion for event management.
                        </Text>
                    </Box>

                    {/* Team Section */}
                    <Box w="100%">
                        <Heading as="h2" size="lg" color="var(--clr-primary-2)" textAlign="center" mb={6}>
                            Meet Our CEO
                        </Heading>

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
  {/* Team Member Cards */}
  {["ceo_1.jpeg", "ceo_2.webp", "ceo_3.jpeg", "ceo_4.webp"].map((image, index) => (
    <Box
      key={index}
      shadow="md"
      rounded="lg"
      overflow="hidden"
      _hover={{
        shadow: "lg",
        transform: "scale(1.05)",
        transition: "0.3s ease-in-out",
      }}
    >
      {/* Use Box to fix the size */}
      <Box w="100%" h="370px" position="relative">
        <Image
          src={`/compressed/${image}`}
          alt={`CEO ${index + 1}`}
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Ensures the image maintains aspect ratio while covering
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  ))}
</SimpleGrid>

                    </Box>
                </VStack>
            </Container>
        </>
    );
};

export default About;
