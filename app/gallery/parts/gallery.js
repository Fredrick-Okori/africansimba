'use client'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import NextImage from 'next/image';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Container,
  IconButton,
  HStack,
  VStack,
  Badge,
  Fade,
  ScaleFade,
  Spinner,
  Center,
  Flex,
} from '@chakra-ui/react';


import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { projects } from '../data';

// Memoized Gallery Item Component
const GalleryItem = React.memo(({
  project,
  index,
  isLoading,
  hoveredIndex,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => (
  <ScaleFade
    in={!isLoading}
    transition={{ duration: 0.6, delay: Math.min(index * 0.05, 2) }}
  >
    <GridItem>
      <Box
        cursor="pointer"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        position="relative"
        overflow="hidden"
        borderRadius="2xl"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(20px) saturate(180%)"
        shadow="xl"
        _hover={{
          transform: "scale(1.05) rotate(1deg)",
          shadow: "2xl",
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        role="group"
      >
        <Box position="relative" aspectRatio={1}>
          <NextImage
            src={project.url}
            alt={project.alt}
            fill
            style={{ objectFit: "cover", transition: "all 0.5s ease" }}
            loading={index < 10 ? "eager" : "lazy"}
            priority={index < 5}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            quality={75}
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.800, transparent, transparent)"
            opacity={hoveredIndex === index ? 1 : 0}
            transition="opacity 0.3s ease"
          />

          {/* Project Info Overlay */}
          <Box
            position="absolute"
            bottom={4}
            left={4}
            right={4}
            opacity={hoveredIndex === index ? 1 : 0}
            transform={hoveredIndex === index ? "translateY(0)" : "translateY(10px)"}
            transition="all 0.3s ease"
          >
            <VStack align="start" spacing={2}>
              <Badge
                colorScheme="whiteAlpha"
                variant="solid"
                borderRadius="full"
                px={3}
                py={1}
              >
                {project.category}
              </Badge>
              <Text size="md" color="white">
                {project.alt}
              </Text>
              <Text fontSize="sm" color="gray.300">
                Click to view
              </Text>
            </VStack>
          </Box>

          {/* Hover Glow Effect */}
          <Box
            position="absolute"
            inset={0}
            borderRadius="2xl"
            bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
            opacity={hoveredIndex === index ? 0.2 : 0}
            transition="opacity 0.3s ease"
            pointerEvents="none"
            mixBlendMode="overlay"
          />
        </Box>
      </Box>
    </GridItem>
  </ScaleFade>
));

GalleryItem.displayName = 'GalleryItem';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(20);
  const thumbnailRef = useRef(null);

  const isOpen = selectedImageIndex !== null;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Virtualized loading
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        setVisibleItems(prev => Math.min(prev + 20, projects.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModalWithImage = useCallback((index) => {
    setSelectedImageIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const showPrevImage = useCallback(() => {
    setSelectedImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          showNextImage();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          showPrevImage();
          break;
        case 'Escape':
          event.preventDefault();
          closeModal();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal, showNextImage, showPrevImage]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (isOpen && thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.querySelector(`[data-index="${selectedImageIndex}"]`);
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedImageIndex, isOpen]);

  const visibleProjects = useMemo(() =>
    projects.slice(0, visibleItems),
    [visibleItems]
  );

  const currentProject = isOpen ? projects[selectedImageIndex] : null;

  if (isLoading) {
    return (
      <Box minH="100vh">
        <Center minH="100vh">
          <VStack spacing={4}>
            <Spinner size="xl" color="white" thickness="3px" speed="0.8s" />
            <Text fontSize="lg" color="white">Loading Gallery...</Text>
          </VStack>
        </Center>
      </Box>
    );
  }

  return (
    <Box minH="100vh">
      <Container maxW="" py={16} mt={16}>
        {/* Header Section */}
        <Fade in={!isLoading} transition={{ duration: 0.5 }}>
          <VStack spacing={8} textAlign="center" mb={16}>
            <Box mb={8} textAlign={{ base: "center", lg: "left" }}>
              <Text
                color="white"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
                as="h1"
              >
                Be part of the Game Changers
              </Text>

              <Text
                fontSize="xl"
                color='white'
                maxW="2xl"
                mx="auto"
                align='center'
                lineHeight="relaxed"
                as="p"
              >
                A weekly nightlife you cannot afford to miss out
              </Text>
            </Box>
          </VStack>
        </Fade>

        {/* Gallery Grid */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={6}
          role="grid"
          aria-label="Photo gallery"
        >
          {visibleProjects.map((project, index) => (
            <GalleryItem
              key={`${project.id}-${index}`}
              project={project}
              index={index}
              isLoading={isLoading}
              hoveredIndex={hoveredIndex}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openModalWithImage(index)}
            />
          ))}
        </Grid>

        {/* Load More Indicator */}
        {visibleItems < projects.length && (
          <Center mt={8}>
            <Spinner size="md" color="white" />
            <Text ml={3} color="white">Loading more images...</Text>
          </Center>
        )}
      </Container>

      {/* Lightbox Modal */}
      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={9999}
          bg="rgba(0, 0, 0, 0.95)"
          display="flex"
          flexDirection="column"
        >
          {/* Top Bar */}
          <Flex
            justify="space-between"
            align="center"
            px={4}
            py={3}
            flexShrink={0}
          >
            <Badge
              bg="whiteAlpha.200"
              backdropFilter="blur(10px)"
              borderRadius="full"
              px={4}
              py={2}
              color="white"
              fontSize="sm"
            >
              {selectedImageIndex + 1} / {projects.length}
            </Badge>

            <HStack spacing={2}>
              <Text color="gray.400" fontSize="sm" display={{ base: 'none', md: 'block' }}>
                Use arrow keys to navigate
              </Text>
              <IconButton
                aria-label="Close gallery"
                icon={<FaTimes />}
                size="md"
                borderRadius="full"
                bg="whiteAlpha.200"
                color="white"
                _hover={{ bg: "whiteAlpha.400" }}
                onClick={closeModal}
              />
            </HStack>
          </Flex>

          {/* Main Image Area */}
          <Flex
            flex="1"
            align="center"
            justify="center"
            position="relative"
            minH={0}
            px={{ base: 2, md: 16 }}
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            {/* Prev Button */}
            <IconButton
              aria-label="Previous image"
              icon={<FaChevronLeft />}
              position="absolute"
              left={{ base: 2, md: 4 }}
              top="50%"
              transform="translateY(-50%)"
              size="lg"
              borderRadius="full"
              bg="whiteAlpha.200"
              backdropFilter="blur(10px)"
              color="white"
              zIndex={2}
              _hover={{
                bg: "whiteAlpha.400",
                transform: "translateY(-50%) scale(1.1)",
              }}
              transition="all 0.2s ease"
              onClick={showPrevImage}
            />

            {/* Main Image */}
            <Box
              borderRadius="xl"
              overflow="hidden"
              maxH="calc(100vh - 220px)"
              maxW="90vw"
              position="relative"
            >
              <NextImage
                src={currentProject?.url || ''}
                alt={currentProject?.alt || ''}
                width={1200}
                height={1200}
                style={{
                  maxWidth: "100%",
                  maxHeight: "calc(100vh - 220px)",
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
                priority
                sizes="90vw"
                quality={85}
              />
            </Box>

            {/* Next Button */}
            <IconButton
              aria-label="Next image"
              icon={<FaChevronRight />}
              position="absolute"
              right={{ base: 2, md: 4 }}
              top="50%"
              transform="translateY(-50%)"
              size="lg"
              borderRadius="full"
              bg="whiteAlpha.200"
              backdropFilter="blur(10px)"
              color="white"
              zIndex={2}
              _hover={{
                bg: "whiteAlpha.400",
                transform: "translateY(-50%) scale(1.1)",
              }}
              transition="all 0.2s ease"
              onClick={showNextImage}
            />
          </Flex>

          {/* Thumbnail Strip */}
          <Box
            flexShrink={0}
            py={3}
            px={2}
            bg="rgba(0, 0, 0, 0.8)"
          >
            <HStack
              ref={thumbnailRef}
              spacing={2}
              overflowX="auto"
              justify="center"
              sx={{
                '&::-webkit-scrollbar': { height: '4px' },
                '&::-webkit-scrollbar-track': { bg: 'transparent' },
                '&::-webkit-scrollbar-thumb': { bg: 'whiteAlpha.300', borderRadius: 'full' },
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.3) transparent',
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={project.id}
                  data-index={index}
                  flexShrink={0}
                  w={{ base: '50px', md: '70px' }}
                  h={{ base: '50px', md: '70px' }}
                  borderRadius="md"
                  overflow="hidden"
                  cursor="pointer"
                  position="relative"
                  border="2px solid"
                  borderColor={index === selectedImageIndex ? "var(--clr-primary-1)" : "transparent"}
                  opacity={index === selectedImageIndex ? 1 : 0.5}
                  _hover={{ opacity: 1 }}
                  transition="all 0.2s ease"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <NextImage
                    src={project.url}
                    alt={project.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="70px"
                    quality={30}
                  />
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Gallery;
