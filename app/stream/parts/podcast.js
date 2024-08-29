import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text, Container } from '@chakra-ui/react';
import Player from "@madzadev/audio-player";

const podcastEpisodes = [
    {
        id: 1,
        title: "African Music Evolution",
        src: "https://example.com/african-music-evolution.mp3",
    },
    {
        id: 2,
        title: "Afrobeats: The Global Phenomenon",
        src: "https://example.com/afrobeats-global-phenomenon.mp3",
    },
    {
        id: 3,
        title: "Exploring African Jazz",
        src: "https://example.com/exploring-african-jazz.mp3",
    },
    // Add more podcast episodes as needed
];

const PodcastPlayer = ({ episode }) => {
    return (
        <VStack
            spacing={3}
            align="start"
            borderRadius="md"
          
            p={4}
            transition="all 0.3s"
            _hover={{ bg: 'gray.600' }}
        >
            <Text fontWeight="bold" fontSize="lg" color="white">
                {episode.title}
            </Text>
            <Player
                src={episode.src}
                color="#ff5500"
                sliderColor="#ff5500"
                
            />
        </VStack>
    );
};

const Podcast = () => {
    return (
        <Box as="section" py={10} mt={20}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" mb={6} color="white">
                    Podcasts
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                    {podcastEpisodes.map((episode) => (
                        <PodcastPlayer
                            key={episode.id}
                            episode={episode}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Podcast;
