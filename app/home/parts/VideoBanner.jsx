import React from "react";
import {
  Container,
  Button,
  Grid,
  Link,
  Text,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";

export default function VideoBanner() {
  return (
    <Container
      maxW="container.2xl"
      position="relative"
      mb={5}
      p={-10}
    >
      {/* Hero Image Section */}
      <Box  position="relative" height={{ base: "400px", md: "600px" }}>
        {/* Background Image */}
        <Image
          src="/compressed/events_hero.webp"
          alt="night club"
          layout="fill"
          objectFit="cover"
           opacity={0.8}
          priority // Optimized for loading
          style={{
            mixBlendMode: "overlay", // Options: multiply, screen, overlay, etc.
            filter: "brightness(90%)",
            
          }}
        />

        {/* Enhanced Multi-Stop Gradient Overlay */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="100%"
         
          bgGradient="linear(to-t, rgba(5, 0, 48, 0.9) 0%, rgba(22, 8, 79, 0.6) 30%, rgba(5, 0, 0, 0.3) 60%, transparent 100%)"
          zIndex="1"
          borderRadius="10px"
        />

        {/* Optional: Additional Vignette Effect */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.2) 100%)"
          zIndex="1"
          borderRadius="10px"
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
            fontSize={{ base: "3xl", lg: "7xl" }}
            color="var(--clr-primary-1)"
            textAlign="center"
            textShadow="2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)"
            letterSpacing="-0.02em"
          >
            African Simba Events
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", lg: "3xl" }}
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
            Experience Immersive party that happens every week in Kampala and worldwide
          </Text>
          <Grid justifyContent="center">
            <ButtonGroup spacing={8}>
              <Button
                as={Link}
                href="/events"
                _hover={{
                  textDecoration: "none",
                  bg: "var(--clr-primary-1)",
                  color: "black",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
                }}
                rounded="full"
                size="lg"
                variant="outline"
                color="var(--clr-primary-1)"
                backdropFilter="blur(8px)"
                bg="rgba(255, 255, 255, 0.1)"
                transition="all 0.3s ease"
              >
                More Information
              </Button>
              <Button
                as={Link}
                href="/bookings"
                _hover={{
                  textDecoration: "none",
                  bg: "var(--clr-primary-1)",
                  color: "black",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
                }}
                rounded="full"
                size="lg"
                variant="outline"
                color="var(--clr-primary-1)"
                backdropFilter="blur(8px)"
                bg="rgba(255, 255, 255, 0.1)"
                transition="all 0.3s ease"
              >
                Get Ticket Now
              </Button>
            </ButtonGroup>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}