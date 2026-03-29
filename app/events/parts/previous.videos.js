"use client";
import React, { useState, useCallback } from 'react';
import {
    Box, Heading, SimpleGrid, VStack, Center, Text, Container, Icon, Badge, IconButton,
    Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, HStack,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPlay } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';
import EventsHero from './events.hero';
import EventsListing from './eventsListing';
import Upcoming from './upcoming';

const MotionBox = motion(Box);

const defaultVideos = [
    {
        id: 1,
        title: "African Simba Birthday Bash",
        videoUrl: "https://youtube.com/shorts/W1iBgno0hI4?si=clhkiSPsBgdJEdTu?autoplay=1",
        thumbnail: "/haul/simba.webp",
        location: "One Week Celebrations, Kampala",
    },
    {
        id: 5,
        videoUrl: "https://youtube.com/shorts/oyEJxlG6Eow?si=HdJOdMR5uXOFkypc?autoplay=1",
        title: "Swift Fridays at Nomad",
        thumbnail: "/gallery/48.webp",
        location: "Nomad Lounge, Ggaba Rd",
    },
    {
        id: 2,
        title: "Muleba Official Aftermovie",
        videoUrl: "https://www.youtube.com/embed/cvysB_dyOd8?autoplay=1",
        thumbnail: "/videoposters/muleba_video_poster.webp",
        location: "Tanzania Muleba Fest",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=rEifWYsUPKw?autoplay=1",
        title: "Wahala Wednesday",
        thumbnail: "/haul/addict.webp",
        location: "Thrones Lounge, Bugolobi",
    },
    {
        id: 6,
        videoUrl: "https://youtube.com/shorts/lyNWyC3IjoU?si=yJJUKM2NRtBLijW2",
        title: "Blowout Thursday at Catwalk",
        thumbnail: "/haul/roger.webp",
        location: "Catwalk Lounge, Kololo",
    },
    {
        id: 7,
        videoUrl: "https://youtube.com/shorts/lyNWyC3IjoU?si=yJJUKM2NRtBLijW2?autoplay=1",
        title: "Gabba Big Ballers Nights at Paradigm",
        thumbnail: "/haul/gbb.webp",
        location: "Paradigm Lounge, Ggaba Rd",
    },
];

const getVideoEmbedUrl = (url) => {
    if (url.includes('embed/')) return url;
    try {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return url;
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08 },
    }),
};

const VideoCard = React.memo(({ video, onSelect, isNew, index }) => (
    <MotionBox
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
    >
        <Box
            onClick={() => onSelect(video)}
            cursor="pointer"
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.06)"
            transition="all 0.4s ease"
            role="group"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                borderColor: "rgba(239,178,9,0.2)",
            }}
        >
            <Box
                position="relative"
                w="100%"
                h="220px"
                overflow="hidden"
            >
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    quality={75}
                />

                {/* Overlay */}
                <Box
                    position="absolute"
                    inset={0}
                    bg="rgba(0,0,0,0.3)"
                    transition="all 0.3s ease"
                    _groupHover={{ bg: "rgba(0,0,0,0.4)" }}
                />

                {/* Play Button */}
                <Center position="absolute" inset={0}>
                    <Box
                        w="60px"
                        h="60px"
                        borderRadius="full"
                        bg="rgba(255,255,255,0.9)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.3s ease"
                        _groupHover={{
                            bg: "var(--clr-primary-3)",
                            transform: "scale(1.1)",
                        }}
                    >
                        <Icon
                            as={FaPlay}
                            boxSize={5}
                            color="black"
                            ml="3px"
                        />
                    </Box>
                </Center>

                {/* New Badge */}
                {isNew && (
                    <Badge
                        position="absolute"
                        top="12px"
                        right="12px"
                        bg="var(--clr-primary-3)"
                        color="black"
                        fontSize="2xs"
                        fontWeight="bold"
                        px={2.5}
                        py={1}
                        borderRadius="full"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                    >
                        New
                    </Badge>
                )}
            </Box>

            {/* Info */}
            <Box p={4} bg="rgba(255,255,255,0.02)">
                <Text
                    fontWeight="bold"
                    fontSize="sm"
                    color="var(--clr-primary-1)"
                    noOfLines={1}
                    mb={1.5}
                >
                    {video.title}
                </Text>
                <HStack spacing={1.5} color="rgba(255,255,255,0.4)">
                    <Icon as={FiMapPin} boxSize={3} />
                    <Text fontSize="xs">{video.location}</Text>
                </HStack>
            </Box>
        </Box>
    </MotionBox>
));

VideoCard.displayName = 'VideoCard';

const PreviousVideos = ({ videos = defaultVideos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleVideoSelect = useCallback((video) => {
        setSelectedVideo(video);
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
        setSelectedVideo(null);
    }, []);

    return (
        <Box as="section" position="relative" zIndex={1}>
            <EventsHero />
            <EventsListing />
            <Upcoming />

            <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    mb={8}
                >
                    <Text
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                        color="var(--clr-primary-3)"
                        mb={3}
                    >
                        Watch
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        color="var(--clr-primary-1)"
                        mb={2}
                    >
                        Previous{' '}
                        <Text as="span" color="var(--clr-primary-3)">Videos</Text>
                    </Heading>
                    <Text fontSize="sm" color="rgba(255,255,255,0.5)">
                        Relive the best moments from our events
                    </Text>
                </MotionBox>

                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
                    {videos.map((video, index) => (
                        <VideoCard
                            key={`${video.id}-${index}`}
                            video={video}
                            onSelect={handleVideoSelect}
                            isNew={index === 0}
                            index={index}
                        />
                    ))}
                </SimpleGrid>
            </Container>

            {/* Video Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
                <ModalOverlay
                    bg="rgba(0,0,0,0.85)"
                    backdropFilter="blur(20px)"
                />
                <ModalContent
                    bg="rgba(15,15,15,0.98)"
                    border="1px solid rgba(255,255,255,0.08)"
                    borderRadius="3xl"
                    overflow="hidden"
                >
                    <ModalCloseButton
                        color="white"
                        size="lg"
                        bg="rgba(255,255,255,0.1)"
                        borderRadius="full"
                        m={3}
                        zIndex={10}
                        _hover={{ bg: "rgba(255,255,255,0.2)" }}
                    />
                    <ModalBody p={0}>
                        {selectedVideo && (
                            <Box>
                                <Box position="relative" pt="56.25%">
                                    <iframe
                                        src={getVideoEmbedUrl(selectedVideo.videoUrl)}
                                        title={selectedVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </Box>
                                <Box p={5}>
                                    <Text fontSize="lg" fontWeight="bold" color="var(--clr-primary-3)" mb={1}>
                                        {selectedVideo.title}
                                    </Text>
                                    <HStack spacing={2} color="rgba(255,255,255,0.5)">
                                        <Icon as={FiMapPin} boxSize={3.5} />
                                        <Text fontSize="sm">{selectedVideo.location}</Text>
                                    </HStack>
                                </Box>
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default PreviousVideos;
