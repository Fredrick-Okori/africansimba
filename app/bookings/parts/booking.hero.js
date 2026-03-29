"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Box, VStack, Text, HStack, Container } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const MotionBox = motion(Box);

const heroData = [
  {
    id: "gbb-anniversary-1",
    bgImage: "/updates/crowd_hero.webp",
    title: "More to Discover",
    subtitle: "Experience the extraordinary with us",
    priority: true,
  },
  {
    id: "don-julio-event",
    bgImage: "/updates/crowd_hero_group.webp",
    title: "Baller Experience",
    subtitle: "Premium events with unforgettable moments",
    priority: false,
  },
  {
    id: "gbb-celebration",
    bgImage: "/updates/crowd_green.webp",
    title: "Premium Moments",
    subtitle: "Creating memories that last forever",
    priority: false,
  },
];

const HeroSlide = React.memo(({ hero, shouldReduceMotion }) => {
  const variants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
      }
    : {
        initial: { opacity: 0, scale: 1.05 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      };

  return (
    <motion.div
      key={hero.id}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        willChange: shouldReduceMotion ? "opacity" : "opacity, transform",
      }}
    >
      <Image
        src={hero.bgImage}
        alt={hero.title}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        quality={85}
        priority={hero.priority}
        loading={hero.priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hxuop9to16L4wfWnvjhvEfxK0WSn8Av/Z"
      />
    </motion.div>
  );
});

HeroSlide.displayName = "HeroSlide";

const CarouselIndicators = React.memo(({ total, current, onDotClick }) => (
  <HStack
    position="absolute"
    bottom={{ base: "20px", md: "30px" }}
    left="50%"
    transform="translateX(-50%)"
    zIndex={4}
    spacing={2}
  >
    {Array.from({ length: total }).map((_, index) => (
      <Box
        key={`indicator-${index}`}
        as="button"
        w={current === index ? "28px" : "8px"}
        h="8px"
        borderRadius="full"
        bg={current === index ? "var(--clr-primary-3)" : "rgba(255,255,255,0.3)"}
        transition="all 0.4s ease"
        cursor="pointer"
        onClick={() => onDotClick(index)}
        _hover={{ bg: current === index ? "var(--clr-primary-3)" : "rgba(255,255,255,0.5)" }}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </HStack>
));

CarouselIndicators.displayName = "CarouselIndicators";

const BookingHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const currentHero = useMemo(() => heroData[currentIndex], [currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(true);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      distance > 0 ? goToNext() : goToPrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goToNext, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") { goToPrev(); setIsAutoPlaying(false); }
      if (e.key === "ArrowRight") { goToNext(); setIsAutoPlaying(false); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % heroData.length;
    const img = new window.Image();
    img.src = heroData[nextIndex].bgImage;
  }, [currentIndex]);

  return (
    <Box
      position="relative"
      height={{ base: "70vh", md: "80vh" }}
      minHeight={{ base: "500px", md: "600px" }}
      maxHeight="900px"
      width="100%"
      overflow="hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      <Box position="absolute" inset={0}>
        <AnimatePresence mode="wait">
          <HeroSlide hero={currentHero} shouldReduceMotion={shouldReduceMotion} />
        </AnimatePresence>
      </Box>

      {/* Gradient overlays */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)"
        zIndex={2}
        pointerEvents="none"
      />

      {/* Gold accent glow */}
      <Box
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "300px", md: "500px" }}
        h={{ base: "300px", md: "500px" }}
        bg="radial-gradient(circle, rgba(239,178,9,0.1) 0%, transparent 70%)"
        zIndex={2}
        pointerEvents="none"
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={3}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentHero.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
          >
            <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.3em"
                color="var(--clr-primary-3)"
              >
                Reserve Your Spot
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
                lineHeight={0.95}
                color="white"
                fontWeight="900"
                letterSpacing="-0.02em"
              >
                {currentHero.title}
              </Text>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                color="rgba(255,255,255,0.6)"
                maxW="500px"
                fontWeight="light"
              >
                {currentHero.subtitle}
              </Text>
            </VStack>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="60px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={4}
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

      <CarouselIndicators total={heroData.length} current={currentIndex} onDotClick={goToSlide} />
    </Box>
  );
};

export default BookingHero;
