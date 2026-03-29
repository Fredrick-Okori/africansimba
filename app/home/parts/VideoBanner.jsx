"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Container,
  Button,
  Text,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

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
  const intervalRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [goToNext]);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    const img = new window.Image();
    img.src = carouselImages[nextIndex];
  }, [currentIndex]);

  return (
    <Box position="relative" h={{ base: "85vh", md: "90vh" }} maxH="950px" overflow="hidden">
      {/* Carousel Images */}
      {carouselImages.map((src, index) => (
        <Box
          key={index}
          position="absolute"
          inset={0}
          opacity={index === currentIndex ? 1 : 0}
          transition="opacity 1s ease-in-out"
          zIndex={0}
        >
          <Image
            src={src}
            alt={`Event highlight ${index + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            quality={85}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </Box>
      ))}

      {/* Gradient overlays */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%)"
        zIndex={1}
      />

      {/* Gold accent glow */}
      <Box
        position="absolute"
        top="35%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "350px", md: "600px" }}
        h={{ base: "350px", md: "600px" }}
        bg="radial-gradient(circle, rgba(239,178,9,0.1) 0%, transparent 70%)"
        zIndex={1}
        pointerEvents="none"
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={2}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={{ base: 5, md: 7 }} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.3em"
              color="var(--clr-primary-3)"
              mb={3}
            >
              The Game Changers
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text
              fontWeight="900"
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
              color="var(--clr-primary-1)"
              lineHeight={0.95}
              letterSpacing="-0.02em"
            >
              African Simba
            </Text>
            <Text
              fontWeight="900"
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
              bgGradient="linear(to-r, var(--clr-primary-3), var(--clr-primary-5))"
              bgClip="text"
              lineHeight={0.95}
              letterSpacing="-0.02em"
            >
              Events
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="rgba(255,255,255,0.6)"
              maxW="500px"
              fontWeight="light"
            >
              Experience immersive events that happen every week. Celebrate life with us.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HStack
              spacing={4}
              flexDirection={{ base: "column", sm: "row" }}
              w={{ base: "100%", sm: "auto" }}
            >
              <Button
                as={Link}
                href="/events"
                bg="var(--clr-primary-3)"
                color="black"
                rounded="2xl"
                size="lg"
                px={8}
                py={7}
                fontWeight="bold"
                fontSize="sm"
                transition="all 0.3s ease"
                w={{ base: "100%", sm: "auto" }}
                _hover={{
                  textDecoration: "none",
                  bg: "var(--clr-primary-5)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px -5px rgba(239,178,9,0.3)",
                }}
                _active={{ transform: "translateY(0)" }}
              >
                Explore Events
                <FiChevronRight style={{ marginLeft: "8px" }} />
              </Button>
              <Button
                as={Link}
                href="/bookings"
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
                w={{ base: "100%", sm: "auto" }}
                _hover={{
                  textDecoration: "none",
                  bg: "rgba(255,255,255,0.12)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px -5px rgba(0,0,0,0.2)",
                }}
                _active={{ transform: "translateY(0)" }}
              >
                Reserve Now
                <FiChevronRight style={{ marginLeft: "8px" }} />
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>

      {/* Carousel indicators */}
      <HStack
        position="absolute"
        bottom={{ base: "20px", md: "30px" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={3}
        spacing={2}
      >
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            w={index === currentIndex ? "28px" : "8px"}
            h="8px"
            borderRadius="full"
            bg={index === currentIndex ? "var(--clr-primary-3)" : "rgba(255,255,255,0.3)"}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            transition="all 0.4s ease"
            _hover={{
              bg: index === currentIndex ? "var(--clr-primary-3)" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </HStack>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="60px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={3}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box
          w="24px"
          h="40px"
          borderRadius="full"
          border="2px solid rgba(255,255,255,0.2)"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          pt="8px"
        >
          <Box w="3px" h="8px" borderRadius="full" bg="rgba(255,255,255,0.4)" />
        </Box>
      </MotionBox>
    </Box>
  );
}
