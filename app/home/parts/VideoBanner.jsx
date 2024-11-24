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
      maxW="container.xl"
      position="relative"
      mb={5}
      mt={{ base: 16, lg: 18 }}
      pt={{ base: 10, lg: 20 }}
    >
      {/* Header Text */}
      <Text
        fontWeight="bold"
        fontSize={{ base: "3xl", lg: "7xl" }}
        color="var(--clr-primary-1)"
        textAlign="center"
      >
        AFRICAN SIMBA EVENTS
      </Text>
      <Text
        color="var(--clr-primary-1)"
        fontSize={{ base: "2xl", lg: "3xl" }}
        textAlign="center"
      >
        "THE GAME CHANGERS"
      </Text>

      {/* Hero Image Section */}
      <Box mt={10} position="relative" height={{ base: "300px", md: "600px" }}>
        {/* Background Image */}
        <Image
          src="/compressed/bg_image.webp"
          alt="night club"
          layout="fill"
          objectFit="cover"
          priority // Optimized for loading
          style={{
            borderRadius: "10px", // Rounded corners
            transition: "transform 0.3s", // Smooth hover effect
            opacity: 0.5,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient="linear(to-t, rgba(0, 0, 0, 0.9), transparent)" // Gradient from bottom to top
          zIndex="1"
          borderRadius="10px"
        />

        {/* Text Overlay */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          p={4}
          zIndex="2"
          color="var(--clr-primary-1)"
          textAlign="center"
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", lg: "3xl" }}
            color="var(--clr-primary-1)"
          >
            Celebrate with the Game Changers
          </Text>
          <Text color="var(--clr-primary-1)" mb={4}>
            Experience Immersive party that happens every week in Kampala,
            Uganda
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
                }}
                rounded="full"
                variant="outline"
                color="var(--clr-primary-1)"
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
                }}
                rounded="full"
                variant="outline"
                color="var(--clr-primary-1)"
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
