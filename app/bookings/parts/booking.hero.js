"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Box, VStack, Text, Heading,Button, ButtonGroup, IconButton, HStack } from "@chakra-ui/react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

// Optimized hero data with unique IDs and better structure
const heroData = [
  {
    id: "gbb-anniversary-1",
    bgImage: "/gallery/12.webp",
    title: "More to Discover",
    description: "Experience the extraordinary with us",
  
    priority: true, // First image should load with priority
  },
  {
    id: "don-julio-event",
    bgImage: "/haul/don_julio.webp", 
    title: "Don Julio Experience",
    description: "Premium events with unforgettable moments",
   
    priority: false,
  },
  {
    id: "gbb-celebration",
    bgImage: "/gallery/15.webp",
    title: "Premium Moments",
    description: "Creating memories that last forever",
 
    priority: false,
  },
];

// Memoized slide component to prevent unnecessary re-renders
const HeroSlide = React.memo(({ hero, isActive, isPrev, isNext }) => {
  const slideVariants = {
    initial: { 
      opacity: 0, 
      scale: 1.1,
      x: 100 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      x: -100,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  return (
    <motion.div
      key={hero.id}
      initial="initial"
      animate="animate" 
      exit="exit"
      variants={slideVariants}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1, // Changed from -1 to 1
      }}
    >
      {/* Background Image */}
      <Image
        src={hero.bgImage}
        alt={hero.title}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          
        }}
        quality={85}
        priority={hero.priority}
        loading={hero.priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hxuop9to16L4wfWnvjhvEfxK0WSn8Av/Z"
      />
    </motion.div>
  );
});

HeroSlide.displayName = 'HeroSlide';

// Memoized content component
const HeroContent = React.memo(({ hero }) => {
  const contentVariants = {
    initial: { 
      y: 30, 
      opacity: 0,
      filter: "blur(4px)"
    },
    animate: { 
      y: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      } 
    },
    exit: { 
      y: -30, 
      opacity: 0,
      filter: "blur(4px)",
      transition: { 
        duration: 0.5,
        ease: "easeIn" 
      } 
    },
  };

  return (
    <motion.div
      key={`content-${hero.id}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={contentVariants}
    >
      <VStack spacing={4} textAlign="center">
        <Text
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
          lineHeight={1.1}
          color="white"
          textShadow="2px 2px 8px rgba(0,0,0,0.8)"
          fontWeight="bold"
          maxW="800px"
        >
          {hero.title}
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          color="whiteAlpha.900"
          maxW="600px"
          textShadow="1px 1px 4px rgba(0,0,0,0.8)"
          fontWeight="medium"
        >
          {hero.description}
        </Text>
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
             bg="var(--clr-primary-1)"
            color="black"
            backdropFilter="blur(8px)"
            
            transition="all 0.3s ease"
          >
            More Information
              <FiChevronRight style={{ marginLeft: '8px' }} />
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
            <FiChevronRight style={{ marginLeft: '8px' }} />
          </Button>
        </ButtonGroup>
      </VStack>
    </motion.div>
  );
});

HeroContent.displayName = 'HeroContent';

// Memoized indicator dots
const CarouselIndicators = React.memo(({ total, current, onDotClick }) => (
  <HStack
    position="absolute"
    bottom="20px"
    left="50%"
    transform="translateX(-50%)"
    zIndex={4}
    spacing={3}
  >
    {Array.from({ length: total }).map((_, index) => (
      <Box
        key={`indicator-${index}`}
        as="button"
        w={current === index ? "32px" : "12px"}
        h="12px"
        borderRadius="full"
        bg={current === index ? "white" : "whiteAlpha.500"}
        transition="all 0.3s ease"
        cursor="pointer"
        onClick={() => onDotClick(index)}
        _hover={{
          bg: current === index ? "white" : "whiteAlpha.700",
          transform: "scale(1.1)"
        }}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </HStack>
));

CarouselIndicators.displayName = 'CarouselIndicators';

const BookingHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);

  // Memoize current hero to prevent unnecessary re-renders
  const currentHero = useMemo(() => heroData[currentIndex], [currentIndex]);

  // Navigation functions with useCallback for performance
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goToNext, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play on hover/focus
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setIsAutoPlaying(!isAutoPlaying);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isAutoPlaying]);

  return (
    <Box
      position="relative"
      height={{ base: "70vh", md: "80vh", lg: "80vh" }}
      width="100%"
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel"
      aria-live="polite"
    >
      {/* Background Images */}
      <Box position="relative" height="80%" width="100%">
        <AnimatePresence mode="wait">
          <HeroSlide
            hero={currentHero}
            isActive={true}
          />
        </AnimatePresence>
      </Box>

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        height='80%'
        inset={0}
        background="linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)"
        zIndex={2}
        pointerEvents="none"
      />

      {/* Content */}
      <VStack
        position="absolute"
        top={0} // Changed from undefined to 0
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        px={{ base: 4, md: 8 }}
        textAlign="center"
        zIndex={3} // Added explicit z-index higher than gradient
      >
        <AnimatePresence mode="wait">
          <HeroContent hero={currentHero} />
        </AnimatePresence>
      </VStack>

    
    </Box>
  );
};

export default BookingHero;