"use client";
import React, { useEffect } from "react";
import { Box, SimpleGrid, Text, VStack, Heading, Container } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const partners = [
  { src: "/logos/pa.png", name: "Partner A" },
  { src: "/logos/magnum.png", name: "Magnum" },
  { src: "/logos/CLM-LOGO.png", name: "CLM Logo" },
  { src: "/logos/thrones.png", name: "Thrones" },
  { src: "/logos/catwalk.png", name: "Catwalk" },
];

const peopleWorkedWith = [
    { src: "/logos/pa.png", name: "Partner A" },
    { src: "/logos/magnum.png", name: "Magnum" },
    { src: "/logos/CLM-LOGO.png", name: "CLM Logo" },
    { src: "/logos/thrones.png", name: "Thrones" },
    { src: "/logos/catwalk.png", name: "Catwalk" },
];

const PartnerSection = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <Box py={{ base: 8, md: 16 }}>
      <Container maxW="container.xl" data-aos="fade-up" data-aos-duration="500">
        {/* Partners Section */}
        <VStack spacing={6} textAlign="center">
          <Heading color="var(--clr-primary-1)" size="lg">
            Official Partners
          </Heading>
          <Text color="var(--clr-primary-1)" fontSize={{ base: "sm", md: "md" }}>
            We proudly collaborate with industry-leading organizations.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={6} mt={10}>
          {partners.map((partner, index) => (
            <VStack
              key={index}
              textAlign="center"
              p={4}
              borderRadius="lg"
              transition="transform 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
              }}
              alignItems="center"
            >
              <Image
                src={partner.src}
                width={index === 0 || index === 4 ? 200 : index === 3 ? 100 : 150} // Larger for index 0 & 4, smaller for index 3
                height={index === 0 || index === 4 ? 150 : index === 3 ? 70 : 100} // Larger height for index 0 & 4
                objectFit="contain"
                alt={`${partner.name} Logo`}
              />
            </VStack>
          ))}
        </SimpleGrid>

        {/* People We Have Worked With Section */}
        <VStack textAlign="center" mt={16}>
          <Heading color="var(--clr-primary-1)" size="lg">
            People We Have Worked With
          </Heading>
          <Text color="var(--clr-primary-1)" fontSize={{ base: "sm", md: "md" }}>
            Meet the incredible people who have been part of our journey.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={6} >
          {peopleWorkedWith.map((person, index) => (
            <VStack
              key={index}
              textAlign="center"
              p={4}
              borderRadius="lg"
              transition="transform 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
              }}
              alignItems="center"
            >
              <Image
                src={person.src}
                width={index === 0 || index === 4 ? 200 : index === 3 ? 100 : 150} // Larger for index 0 & 4, smaller for index 3
                height={index === 0 || index === 4 ? 150 : index === 3 ? 70 : 100} // Larger height for index 0 & 4
                objectFit="contain"
                alt={`${person.name}`}
               
              />
              
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PartnerSection;
