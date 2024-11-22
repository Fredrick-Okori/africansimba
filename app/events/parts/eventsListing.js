"use client";
import React from "react";
import { Box, Container, Text, Image, VStack, Flex, useBreakpointValue } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { events } from "./data";

const EventsListing = () => {
  const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
  const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }}>
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize={fontSize} fontWeight="bold" color="var(--clr-primary-1)" mb={3}>
            Hosted Nights
          </Text>
          <Text fontSize={subFontSize} fontWeight="normal" color="white">
            Join the Game Changers
          </Text>
        </Box>
      </Flex>

      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} keyBoardControl>
        {events.map((event, index) => (
          <Box
            key={index}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: "scale(1.01)" }}
            transition="all 0.3s"
            mx={2} // Add some margin between slides
          >
            <Image src={event.image} alt={event.name} w="100%" h={imageHeight} objectFit="cover" />
            <Box
              position="absolute"
              borderRadius="lg"
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
                <Text color="var(--clr-primary-1)" fontSize={["sm", "md", "lg"]} fontWeight="bold">
                  {event.name}
                </Text>
                <Text color="gray.300" fontSize={["xs", "sm", "md"]}>
                  {event.host}
                </Text>
              </VStack>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default EventsListing;
