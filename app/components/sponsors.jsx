"use client";
import React, { useEffect } from "react";
import { Box, Text, VStack, SimpleGrid, Heading, Container } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const partners = [
  { src: "/logos/magnum.webp", name: "Magnum" },
  { src: "/logos/CLM-LOGO.webp", name: "CLM Logo" },
  { src: "/logos/simba_saloon.webp", name: "African Simba Saloon" },
];

const peopleWorkedWith = [
  { src: "/logos/pa.webp", name: "Partner A" },
  { src: "/logos/catwalk.webp", name: "Catwalk" },
  { src: "/logos/jomboree.webp", name: "Jomboree" },
  { src: "/logos/muleba_logo.webp", name: "Muleba Festival" },
  { src: "/logos/thrones.webp", name: "Thrones" },
];

const PartnerSection = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <Box  py={{ base: 8, md: 16 }}>


      <Container maxW="container.xl" data-aos="fade-up" data-aos-duration="500">
        <VStack spacing={6} textAlign="center">
          <Heading color="var(--clr-primary-1)" size="lg">Key Partners</Heading>
          <Text color="var(--clr-primary-1)" fontSize={{ base: "sm", md: "md" }}>
            We are proud to have a strong network of partners who support our mission.
          </Text>
        </VStack>
        <Box>
          <SimpleGrid columns={{ base: 3, md: 3 }} spacing={5}>

         
        {partners.map((partner, index) => (
              <Box
                key={index}
                padding={{base: 2, md: 4}}
                textAlign="center"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(1.1)",
                  boxShadow: "2xl",
                }}
              >
                <Box
                 w={{ base: "100px", md: "180px"}}
                 height={{ base: "100px", md: "180px"}}
                  mx="auto"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                 
                >
                  <Image
                    src={partner.src}
                    width={index < 3 ? 180 : 100}
                    height={index < 3 ? 180 : 100}
                    quality={60}
                    priority
                    objectFit="contain"
                    alt={`${partner.name} Logo`}
                  />
                </Box>
              </Box>
            ))}
             </SimpleGrid>
        </Box>
        <Box mt={10}>
        {/* Partners Section */}
        <VStack spacing={6} textAlign="center">
          <Heading color="var(--clr-primary-1)" size="lg">
          People we work with
          </Heading>
          <Text color="var(--clr-primary-1)" fontSize={{ base: "sm", md: "md" }}>
            We proudly collaborate with industry-leading organizations.
          </Text>
        </VStack>

        <Box mt={10}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {peopleWorkedWith.map((person, index) => (
              <Box
                key={index}
                p={4}
                textAlign="center"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(1.1)",
                  boxShadow: "2xl",
                }}
              >
                <Box
                  w="180px"
                  h="180px"
                  mx="auto"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                 
                >
                  <Image
                    src={person.src}
                    width={index < 3 ? 240 : 100}
                    height={index < 3 ? 240 : 100}
                    objectFit="contain"
                    quality={60}
                    priority
                    alt={`${person.name} Logo`}
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnerSection;
