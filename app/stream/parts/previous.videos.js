import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Image, Text, Container } from '@chakra-ui/react';

const defaultVideos = [
    {
        id: 1,
        title: "African Vibes Sunday ",
        videoUrl: "https://www.youtube.com/watch?v=BebqIJoMuYc",
        thumbnail: "/videoposters/african_vibes.jpeg",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/afro_beauty.avif",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Amapiano Balcony mix episode 1",
        thumbnail: "/videoposters/amaps.jpg",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/beauty_cover.jpg",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/art.jpeg",
    },
    // ... other video objects ...
];

const PreviousVideos = ({ videos = defaultVideos, onVideoSelect }) => {
    return (
        <Box as="section" py={10} mt={10}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" mb={6} color="white">
                    Previous Videos
                </Heading>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} onSelect={onVideoSelect} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

const VideoCard = ({ video, onSelect }) => {
    return (
        <VStack
            spacing={3}
            align="start"
            onClick={() => onSelect(video)}
            cursor="pointer"
            borderRadius="md"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
        >
            <Box height="300px" width="100%" overflow="hidden">
                <Image src={video.thumbnail} alt={video.title} width="100%" height="100%" objectFit="cover" />
            </Box>
            <Text fontWeight="normal" fontSize="lg" color="white" noOfLines={2} height="48px">
                {video.title}
            </Text>
        </VStack>
    );
};

export default PreviousVideos;
