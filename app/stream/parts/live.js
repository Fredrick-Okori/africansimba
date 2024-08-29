"use client";
import React from 'react';
import { Box, Heading, Text, AspectRatio, Container } from '@chakra-ui/react';

const Live = ({ currentVideo }) => {
    return (
        <Box as="section" py={10} mt={20}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" mb={6} color="white">
                    Live Stream
                </Heading>
                {currentVideo ? (
                    <Box>
                        <Heading as="h5" fontWeight="normal" size="lg" mb={4} color="white">
                            {currentVideo.title}
                        </Heading>
                        <AspectRatio ratio={16 / 9}>
                            {currentVideo.videoUrl.includes('youtube.com') ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${currentVideo.videoUrl.split('v=')[1].split('&')[0]}`}
                                    title={currentVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    src={currentVideo.videoUrl}
                                    poster={currentVideo.thumbnail}
                                    controls
                                    width="100%"
                                    height="100%"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </AspectRatio>
                    </Box>
                ) : (
                    <Text fontSize="lg" color="white">
                        No video selected. Please choose a video from the list below.
                    </Text>
                )}
            </Container>
        </Box>
    );
};

export default Live;
