'use client'
import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  HStack,
  VStack,
  Badge,
  Fade,
  ScaleFade,
  useColorModeValue,
  Spinner,
  Center,
  Flex,
} from '@chakra-ui/react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import projects data
import { projects } from '../data';

// Memoized Gallery Item Component for better performance
const GalleryItem = React.memo(({ 
  project, 
  index, 
  isLoading, 
  hoveredIndex, 
  onMouseEnter, 
  onMouseLeave, 
  onClick,
  cardBg 
}) => (
  <ScaleFade
    in={!isLoading}
    transition={{ duration: 0.6, delay: Math.min(index * 0.05, 2) }} // Cap delay for better UX
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
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" // Faster transition
        role="group"
      >
        {/* Image Container */}
        <Box position="relative" aspectRatio={1}>
          <Image
            src={project.url}
            alt={project.alt}
            objectFit="cover"
            w="full"
            h="full"
            transition="all 0.5s ease" // Faster transition
            _groupHover={{
              transform: "scale(1.1)",
              filter: "brightness(1.1)",
            }}
            loading={index < 10 ? "eager" : "lazy"} // Load first 10 images eagerly
            fetchPriority={index < 5 ? "high" : "low"} // High priority for first 5 images
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
            decoding="async"
          />
          
          {/* Overlay */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.800, transparent, transparent)"
            opacity={hoveredIndex === index ? 1 : 0}
            transition="opacity 0.3s ease" // Faster transition
          />

          {/* Project Info Overlay */}
          <Box
            position="absolute"
            bottom={4}
            left={4}
            right={4}
            opacity={hoveredIndex === index ? 1 : 0}
            transform={hoveredIndex === index ? "translateY(0)" : "translateY(10px)"}
            transition="all 0.3s ease" // Faster transition
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
                Click to view details
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
            transition="opacity 0.3s ease" // Faster transition
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(20); // Virtual scrolling for large datasets

  // Memoized color values
  const bgGradient = useColorModeValue(
    'linear(to-br, black.50, blue.50, purple.50)',
    'linear(to-br, black.900, purple.900, gray.900)'
  );
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');

  // Optimized loading with reduced timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300); // Reduced from 800ms
    return () => clearTimeout(timer);
  }, []);

  // Virtualized loading - load more items as needed
  useEffect(() => {
    const loadMoreItems = () => {
      if (visibleItems < projects.length) {
        setVisibleItems(prev => Math.min(prev + 20, projects.length));
      }
    };

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems, projects.length]);

  // Memoized callbacks for better performance
  const openModalWithImage = useCallback((index) => {
    setSelectedImageIndex(index);
    onOpen();
  }, [onOpen]);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const showPrevImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Optimized keyboard navigation with cleanup
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
          onClose();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, showNextImage, showPrevImage]);

  // Memoized visible projects for better performance
  const visibleProjects = useMemo(() => 
    projects.slice(0, visibleItems), 
    [visibleItems]
  );

  // Memoized current project data
  const currentProject = useMemo(() => 
    projects[selectedImageIndex], 
    [selectedImageIndex]
  );

  // Optimized loading state
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
        {/* Optimized Header Section */}
        <Fade in={!isLoading} transition={{ duration: 0.5 }}>
          <VStack spacing={8} textAlign="center" mb={16}>
            <Box mb={8} textAlign={{ base: "center", lg: "left" }}>
              <Text
                color="white"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
                as="h1" // Better SEO
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
                as="p" // Better SEO
              >
                A weekly nightlife you cannot afford to miss out
              </Text>
            </Box>
          </VStack>
        </Fade>

        {/* Optimized Gallery Grid */}
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
              key={`${project.id}-${index}`} // More stable key
              project={project}
              index={index}
              isLoading={isLoading}
              hoveredIndex={hoveredIndex}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openModalWithImage(index)}
              cardBg={cardBg}
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

      {/* Optimized Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        isCentered
        motionPreset="slideInBottom"
        closeOnOverlayClick={true}
        closeOnEsc={true}
      >
        <ModalOverlay
          bg="blackAlpha.900"
          backdropFilter="blur(4px)"
        />
        <ModalContent
          bg="transparent"
          shadow="none"
          maxW="90vw"
          maxH="90vh"
        >
          <ModalCloseButton
            size="lg"
            color="white"
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            borderRadius="full"
            _hover={{
              bg: "whiteAlpha.300",
              transform: "scale(1.1)",
            }}
            transition="all 0.2s ease" // Faster transition
            zIndex={3}
          />
          
          <ModalBody p={0} position="relative">
            <Flex align="center" justify="center" h="full">
              {/* Image Counter */}
              <Badge
                position="absolute"
                top={4}
                left="50%"
                transform="translateX(-50%)"
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                borderRadius="full"
                px={4}
                py={2}
                color="white"
                fontSize="sm"
                zIndex={2}
              >
                {selectedImageIndex + 1} / {projects.length}
              </Badge>

              {/* Optimized Main Image */}
              <Box
                borderRadius="2xl"
                overflow="hidden"
                shadow="2xl"
                maxW="full"
                maxH="full"
              >
                <Image
                  src={currentProject?.url}
                  alt={currentProject?.alt}
                  maxW="full"
                  maxH="90vh"
                  objectFit="contain"
                  loading="eager"
                  fetchPriority="high"
                  sizes="90vw"
                  decoding="async"
                />
              </Box>

              {/* Navigation Buttons */}
              <IconButton
                aria-label="Previous image"
                icon={<FaChevronLeft />}
                position="absolute"
                left={6}
                top="50%"
                transform="translateY(-50%)"
                size="lg"
                borderRadius="full"
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-50%) scale(1.1)",
                }}
                transition="all 0.2s ease"
                onClick={showPrevImage}
                isDisabled={projects.length <= 1}
              />

              <IconButton
                aria-label="Next image"
                icon={<FaChevronRight />}
                position="absolute"
                right={6}
                top="50%"
                transform="translateY(-50%)"
                size="lg"
                borderRadius="full"
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-50%) scale(1.1)",
                }}
                transition="all 0.2s ease"
                onClick={showNextImage}
                isDisabled={projects.length <= 1}
              />

              {/* Project Info at Bottom */}
              <HStack
                position="absolute"
                bottom={6}
                left="50%"
                transform="translateX(-50%)"
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                borderRadius="full"
                px={6}
                py={3}
                spacing={3}
                md='hidden'
                maxW="90vw"
                overflow="hidden"
              >
                <Badge colorScheme="whiteAlpha" borderRadius="full">
                  {currentProject?.category}
                </Badge>
                <Text size="md" color="white" noOfLines={1}>
                  {currentProject?.alt}
                </Text>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;