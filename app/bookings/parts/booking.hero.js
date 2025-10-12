"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Box, VStack, Grid, Text, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

// Optimized hero data
const heroData = [
  {
    id: "gbb-anniversary-1",
    bgImage: "/updates/crowd_hero.webp",
    title: "More to Discover",
    description: "Experience the extraordinary with us",
    priority: true,
  },
  {
    id: "don-julio-event",
    bgImage: "/updates/crowd_hero_group.webp", 
    title: "Baller Experience",
    description: "Premium events with unforgettable moments",
    priority: false,
  },
  {
    id: "gbb-celebration",
    bgImage: "/updates/crowd_green.webp",
    title: "Premium Moments",
    description: "Creating memories that last forever",
    priority: false,
  },
];

// Memoized slide component with performance optimizations
const HeroSlide = React.memo(({ hero, shouldReduceMotion }) => {
  const slideVariants = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  } : {
    initial: { 
      opacity: 0, 
      scale: 1.05,
      x: 50 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      x: -50,
      transition: { 
        duration: 0.5, 
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
        zIndex: 1,
        willChange: shouldReduceMotion ? 'opacity' : 'opacity, transform',
      }}
    >
      <Image
        src={hero.bgImage}
        alt={hero.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
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

// Memoized content component with optimized animations
const HeroContent = React.memo(({ hero, shouldReduceMotion }) => {
  const contentVariants = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  } : {
    initial: { 
      y: 20, 
      opacity: 0,
    },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.2,
        ease: "easeOut" 
      } 
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { 
        duration: 0.4,
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
      style={{ willChange: shouldReduceMotion ? 'opacity' : 'opacity, transform' }}
    >
      <VStack spacing={{ base: 3, md: 4, lg: 5 }} textAlign="center">
        <Text
          as="h1"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          lineHeight={{ base: 1.2, md: 1.1 }}
          color="white"
          textShadow="2px 2px 8px rgba(0,0,0,0.8)"
          fontWeight="bold"
          maxW={{ base: "90%", md: "700px", lg: "800px" }}
          px={{ base: 2, md: 0 }}
        >
          {hero.title}
        </Text>
        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
          color="whiteAlpha.900"
          maxW={{ base: "85%", md: "500px", lg: "600px" }}
          textShadow="1px 1px 4px rgba(0,0,0,0.8)"
          fontWeight="medium"
          px={{ base: 2, md: 0 }}
        >
          {hero.description}
        </Text>
        <Grid justifyContent="center" width="100%" pt={{ base: 2, md: 3 }}>
          <ButtonGroup 
            spacing={{ base: 3, sm: 4, md: 6 }}
            flexDirection={{ base: "column", sm: "row" }}
            alignItems="center"
            width={{ base: "100%", sm: "auto" }}
            px={{ base: 4, sm: 0 }}
          >
            <Button
              as={Link}
              href="/events"
              bg='var(--clr-primary-1)'
              color='black'
              transform="translateY(0)"
              boxShadow="0 4px 15px rgba(0,0,0,0.3)"
              _hover={{
                textDecoration: "none",
                bg: "var(--clr-primary-1)",
                color: "black",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)"
              }}
              _active={{
                transform: "translateY(0)",
              }}
              rounded="full"
              size={{ base: "md", md: "lg" }}
              px={{ base: 6, md: 8 }}
              py={{ base: 5, md: 6 }}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              variant="solid"
              transition="all 0.2s ease"
              width={{ base: "100%", sm: "auto" }}
              minW={{ base: "full", sm: "180px", md: "200px" }}
            >
              More Information
              <FiChevronRight style={{ marginLeft: '6px' }} />
            </Button>
            <Button
              as={Link}
              href="/bookings"
              bg='var(--clr-primary-1)'
              color='black'
              transform="translateY(0)"
              boxShadow="0 4px 15px rgba(0,0,0,0.3)"
              _hover={{
                textDecoration: "none",
                bg: "var(--clr-primary-1)",
                color: "black",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)"
              }}
              _active={{
                transform: "translateY(0)",
              }}
              rounded="full"
              size={{ base: "md", md: "lg" }}
              px={{ base: 6, md: 8 }}
              py={{ base: 5, md: 6 }}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              variant="solid"
              transition="all 0.2s ease"
              width={{ base: "100%", sm: "auto" }}
              minW={{ base: "full", sm: "180px", md: "200px" }}
            >
              Reserve Now
              <FiChevronRight style={{ marginLeft: '6px' }} />
            </Button>
          </ButtonGroup>
        </Grid>
      </VStack>
    </motion.div>
  );
});

HeroContent.displayName = 'HeroContent';

// Optimized indicator dots
const CarouselIndicators = React.memo(({ total, current, onDotClick }) => (
  <HStack
    position="absolute"
    bottom={{ base: "15px", md: "20px" }}
    left="50%"
    transform="translateX(-50%)"
    zIndex={4}
    spacing={{ base: 2, md: 3 }}
  >
    {Array.from({ length: total }).map((_, index) => (
      <Box
        key={`indicator-${index}`}
        as="button"
        w={current === index ? { base: "24px", md: "32px" } : { base: "10px", md: "12px" }}
        h={{ base: "10px", md: "12px" }}
        borderRadius="full"
        bg={current === index ? "white" : "whiteAlpha.500"}
        transition="all 0.3s ease"
        cursor="pointer"
        onClick={() => onDotClick(index)}
        _hover={{
          bg: current === index ? "white" : "whiteAlpha.700",
          transform: "scale(1.1)"
        }}
        _active={{
          transform: "scale(0.95)"
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
  const shouldReduceMotion = useReducedMotion();

  // Memoize current hero
  const currentHero = useMemo(() => heroData[currentIndex], [currentIndex]);

  // Navigation functions
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

  // Optimized touch handlers with debouncing
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
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  // Auto-play with cleanup
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goToNext, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, goToNext]);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
        setIsAutoPlaying(false);
      }
      if (e.key === 'ArrowRight') {
        goToNext();
        setIsAutoPlaying(false);
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Preload next image for performance
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % heroData.length;
    const img = new window.Image();
    img.src = heroData[nextIndex].bgImage;
  }, [currentIndex]);

  return (
    <Box
      position="relative"
      height={{ base: '500px', sm: '600px', md: "70vh", lg: "80vh" }}
      minHeight={{ base: '500px', md: '600px' }}
      maxHeight={{ base: '800px', md: '900px' }}
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
      sx={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Background Images Container */}
      <Box 
        position="absolute" 
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%" 
        height="100%"
      >
        <AnimatePresence mode="wait">
          <HeroSlide
            hero={currentHero}
            shouldReduceMotion={shouldReduceMotion}
          />
        </AnimatePresence>
      </Box>

      {/* Gradient Overlay - Synced with slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`gradient-${currentHero.id}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              duration: shouldReduceMotion ? 0.3 : 0.7, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: shouldReduceMotion ? 0.3 : 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.75) 100%)",
            zIndex: 2,
            pointerEvents: "none",
            willChange: 'opacity'
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <VStack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        spacing={{ base: 4, md: 6 }}
        px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        py={{ base: 4, md: 6 }}
        textAlign="center"
        zIndex={3}
      >
        <AnimatePresence mode="wait">
          <HeroContent hero={currentHero} shouldReduceMotion={shouldReduceMotion} />
        </AnimatePresence>
      </VStack>

      {/* Carousel Indicators */}
      <CarouselIndicators 
        total={heroData.length} 
        current={currentIndex} 
        onDotClick={goToSlide}
      />
    </Box>
  );
};

export default BookingHero;