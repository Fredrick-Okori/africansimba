"use client";
import React, { useState } from 'react';
import {
    Box, Heading, SimpleGrid, VStack, Center, Text, Container, Icon, Badge, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    ModalFooter
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaHeart, FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import EventsHero from './events.hero';
import EventsListing from './eventsListing';
import Upcoming from './upcoming';

const defaultVideos = [
    {
        id: 1,
        title: "Muleba Official Aftermovie",
        videoUrl: "https://www.youtube.com/embed/cvysB_dyOd8?autoplay=1",
        thumbnail: "/videoposters/muleba_video_poster.webp",
        location: "Tanzania Muleba Fest",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=rEifWYsUPKw?autoplay=1",
        title: "Wahala Wednesday",
        thumbnail: "/videoposters/wahala_video_poster.webp",
        location: "Thrones Lounge Bugolobi",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=Y2736fANAMc?autoplay=1",
        title: "Afro Vibes ",
        thumbnail: "/videoposters/afro_vibez.webp",
        location: "CatWalk Lounge, Kololo",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=eyfDVaXVw_E?autoplay=1",
        title: "The Fiesta Sundays",
        thumbnail: "/videoposters/fiesta_sunday_copy.jpg",
        location: "The Villa Ug, Bukoto",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=0TR8qVeGygg?autoplay=1",
        title: "Gabba Big Ballers Nights at Paradigm",
        thumbnail: "/videoposters/paradigm_video_poster.webp",
        location: "Gabba, Kabagala",
    },
   
  
];

const getVideoEmbedUrl = (url) => {
    // Check if the URL is an embedded URL
    if (url.includes('embed/')) {
        return url; // Already in embed format
    }

    // Check if the URL is a standard YouTube URL
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();

    // Return the embed URL
    return `https://www.youtube.com/embed/${videoId}`;
};

const PreviousVideos = ({ videos = defaultVideos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    return (
        <Box as="section" py={10} mt={10}>
            <EventsHero />
            <EventsListing/>
            <Upcoming/>
            <Container maxW="container.xl" pt={10}>
                <Heading as="h2" size="xl" fontWeight='normal' mb={6} color="var(--clr-primary-1)">
                    Previous Videos
                </Heading>
                <SimpleGrid columns={[1, 1, 3]} spacing={6}>
                    {videos.map((video, index) => (
                        <VideoCard key={video.id} video={video} onSelect={handleVideoSelect} isNew={index === 0} />
                    ))}
                </SimpleGrid>
            </Container>

            {/* Modal for video playback */}
            <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered
                height="600px"
                backdropFilter='blur(10px) brightness(50%)'
                motionPreset='slideInBottom'
            >
                <ModalOverlay bg='blackAlpha.100'
                    backdropFilter='blur(10px)' />
                <ModalContent>
                    <ModalHeader bg='var(--clr-primary-2)' color='var(--clr-primary-1)'>{selectedVideo?.title}</ModalHeader>
                    <ModalCloseButton color='var(--clr-primary-1)' />
                    <ModalBody bg='var(--clr-primary-2)'>
                        {selectedVideo && (
                            <iframe
                                src={getVideoEmbedUrl(selectedVideo.videoUrl)}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                width="100%"
                                height="500px"
                            />
                        )}
                    </ModalBody>
                    <ModalFooter bg='var(--clr-primary-2)' color='var(--clr-primary-1)'>Join the experience on Youtube & Social media</ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

const VideoCard = ({ video, onSelect, isNew }) => {
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = (e) => {
      e.stopPropagation();
      setIsLiked(!isLiked);
    };
  
    return (
      <VStack
        spacing={3}
        align="start"
        onClick={() => onSelect(video)}
        cursor="pointer"
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.3s"
        border="1px solid transparent"
        position="relative"
        _hover={{ transform: "scale(1.01)", boxShadow: "xl" }}
      >
        <Box height="300px" width="100%" overflow="hidden" position="relative">
          {/* Thumbnail Image */}
          <Image
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
            width={700}
            height={200}
            objectFit="fill"
          />
  
          {/* Play Button */}
          <Center position="absolute" top="0" left="0" width="100%" height="100%">
  <IconButton
    icon={<Icon as={FaPlay} w={8} h={8} />}
    aria-label="Play Video"
    size="lg"
    bg="var(--clr-primary-1)"
    color="var(--clr-primary-2)"
    boxSize="80px"
    borderRadius="full"
    opacity={0.8}
    transition="all 0.3s ease-in-out, transform 0.3s ease-in-out"
    _hover={{
      bg: "var(--clr-primary-3)",
      color: "var(--clr-primary-1)",
      opacity: 1,
      transform: "scale(1.1)",
    }}
    _active={{
      transform: "scale(0.95)",
    }}
    onClick={(e) => {
      e.stopPropagation();
      onSelect(video); // Open the video in the modal
    }}
  />
</Center>

  
          {/* "New" Badge */}
          {isNew && (
            <Badge
              position="absolute"
              top="10px"
              right="10px"
              colorScheme="pink"
              variant="solid"
              fontSize="0.8em"
              px={3}
              py={1}
              borderRadius="full"
            >
              New
            </Badge>
          )}
  
          {/* Like Button */}
          <IconButton
            icon={<Icon as={FaHeart} color={isLiked ? "red.500" : "grey"} />}
            aria-label="Like"
            position="absolute"
            bottom="10px"
            right="10px"
            onClick={handleLike}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Box>
  
        {/* Video Title and Location */}
        <VStack align="start" spacing={1} px={2} width="100%">
          <Text fontWeight="normal" fontSize="lg" color="var(--clr-primary-1)" noOfLines={2}>
            {video.title}
          </Text>
          <Text fontSize="sm" color="gray.400" pb={2}>
            <Icon as={FaMapMarkerAlt} mr={1} /> {video.location}
          </Text>
        </VStack>
      </VStack>
    );
  };
  
export default PreviousVideos;