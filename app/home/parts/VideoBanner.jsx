"use client"

import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Grid,
  Link,
  Text,
  Box,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const carouselImages = [
  "/new/1c51433f-f816-4ff9-9eac-9e49dbd7f66c 3.webp",
  "/new/25b0f125-9619-462d-87b3-98bfbe2531b2 3.webp",
  "/new/99ed9580-8364-4c1d-8fbb-567d0150345a 3.webp",
  "/new/362a6b0c-d42b-4fa6-98d0-0bfcdaa392f7 3.webp",
  "/new/382b35f3-f6ee-4992-af96-4d4416399d2f 3.webp",
  "/new/d970093c-225e-4df0-84b8-f6aabe748c89 3.webp",
];

export default function VideoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container
      maxW="container.2xl"
      position="relative"
      mb={5}
      p={0}
    >
      {/* Hero Image Section */}
      <Box position="relative" height={{ base: "400px", md: "600px" }}>
        {/* Carousel Images */}
        {carouselImages.map((src, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 1s ease-in-out"
            zIndex={0}
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              style={{
                mixBlendMode: "overlay",
                filter: "brightness(90%)",
              }}
            />
          </Box>
        ))}



        {/* Carousel Indicators */}
        <Box
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          zIndex={10}
          display="flex"
          gap={2}
        >
          {carouselImages.map((_, index) => (
            <Box
              key={index}
              width={index === currentIndex ? "24px" : "8px"}
              height="8px"
              borderRadius="full"
              bg={index === currentIndex ? "var(--clr-primary-3)" : "whiteAlpha.600"}
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
              transition="all 0.3s ease"
              _hover={{ bg: "var(--clr-primary-3)" }}
            />
          ))}
        </Box>

        {/* Enhanced Multi-Stop Gradient Overlay - Dark Fade */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient="linear(to-t, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.1) 100%)"
          zIndex="1"
          borderRadius="20px"
        />

        {/* Optional: Additional Vignette Effect - Dark */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)"
          zIndex="1"
          borderRadius="20px"
        />

        {/* Text Overlay */}
        <Box
          position="absolute"
          bottom="10"
          left="0"
          width="100%"
          p={4}
          zIndex="2"
          color="var(--clr-primary-1)"
          textAlign="center"
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "3xl", lg: "8xl" }}
            color="var(--clr-primary-1)"
            textAlign="center"
            textShadow="2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)"
            
          >
            African Simba Events
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", lg: "4xl" }}
            color="var(--clr-primary-1)"
            textShadow="1px 1px 4px rgba(0,0,0,0.8)"
          >
            Celebrate life with the Game Changers
          </Text>
          <Text 
            color="var(--clr-primary-1)" 
            mb={4}
            textShadow="1px 1px 2px rgba(0,0,0,0.8)"
            opacity="0.95"
            maxW="600px"
            mx="auto"
          >
            Experience Immersive party that happens every week
          </Text>
          <Grid justifyContent="center">
            <ButtonGroup 
              spacing={{ base: 4, md: 8 }}
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
            >
              <Button
                as={Link}
                href="/events"
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
                size={{ base: "sm", md: "md" }}
                variant="outline"
                backdropFilter="blur(8px)"
                transition="all 0.3s ease"
                width={{ base: "full", sm: "auto" }}
                minW={{ base: "200px", sm: "auto" }}
              >
              More Information
               <FiChevronRight style={{ marginLeft: '8px' }} />
              </Button>
              <Button
                as={Link}
                href="/bookings"
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
                size={{ base: "sm", md: "md" }}
                variant="outline"
                backdropFilter="blur(8px)"
                transition="all 0.3s ease"
                width={{ base: "full", sm: "auto" }}
                minW={{ base: "200px", sm: "auto" }}
              >
               Reserve Now
               <FiChevronRight style={{ marginLeft: '8px' }} />
              </Button>
            </ButtonGroup>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

