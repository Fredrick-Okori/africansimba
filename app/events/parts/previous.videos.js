"use client";
import React, { useState, useEffect } from 'react';
import {
    Box, Heading, SimpleGrid, VStack, Text, Container, Icon, Badge, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    ModalFooter
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import EventsHero from './events.hero';
import EventsListing from './eventsListing';

const defaultVideos = [
    {
        id: 1,
        title: "Muleba Festival highlights",
        videoUrl: "https://www.youtube.com/embed/cvysB_dyOd8?autoplay=1",
        thumbnail: "/videoposters/african_vibes.jpeg",
        location: "Lagos, Nigeria",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=YXbXzOn6rK4?autoplay=1",
        title: "Gabba Big Ballers Nights at Paradigm",
        thumbnail: "/videoposters/afro_beauty.avif",
        location: "Accra, Ghana",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=Y2736fANAMc?autoplay=1",
        title: "Afro Vibz Nights ",
        thumbnail: "/videoposters/amaps.jpg",
        location: "CatWalk Lounge, Kampala, Uganda",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=eyfDVaXVw_E?autoplay=1",
        title: "The Fiesta Sunday Show",
        thumbnail: "/videoposters/beauty_cover.jpg",
        location: "The Villa",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=0TR8qVeGygg?autoplay=1",
        title: "Gabba Big Ballers Nights at Paradigm",
        thumbnail: "/videoposters/art.jpeg",
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
            <Container maxW="container.xl" pt={10}>
                <Heading as="h2" size="xl" fontWeight='normal' mb={6} color="var(--clr-primary-1)">
                    Previous Videos
                </Heading>
                <SimpleGrid columns={[1, 2, 3, 2]} spacing={6}>
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
                <ModalOverlay bg='blackAlpha.300'
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
            border='1px solid transparent'
            position="relative"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', border: '1px solid grey' }}
        >
            <Box height="300px" width="100%" overflow="hidden" position="relative">
                <Image src={video.thumbnail} alt={video.title} loading='lazy' width={700} height={200} objectFit="cover" />
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