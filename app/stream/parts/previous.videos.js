import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, VStack, Image, Text, Container, Icon, Badge, IconButton } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const defaultVideos = [
    {
        id: 1,
        title: "African Vibes Sunday ",
        videoUrl: "https://www.youtube.com/watch?v=BebqIJoMuYc",
        thumbnail: "/videoposters/african_vibes.jpeg",
        location: "Lagos, Nigeria",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/afro_beauty.avif",
        location: "Accra, Ghana",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Amapiano Balcony mix episode 1",
        thumbnail: "/videoposters/amaps.jpg",
        location: "Johannesburg, South Africa",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/beauty_cover.jpg",
        location: "Nairobi, Kenya",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/art.jpeg",
        location: "Cairo, Egypt",
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Amapiano Balcony mix episode 1",
        thumbnail: "/videoposters/amaps.jpg",
        location: "Cape Town, South Africa",
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/beauty_cover.jpg",
        location: "Addis Ababa, Ethiopia",
    },
    {
        id: 8,
        videoUrl: "https://www.youtube.com/watch?v=-a-b0jO248Q&t=25s",
        title: "Wahallah Wednesday Highlights",
        thumbnail: "/videoposters/art.jpeg",
        location: "Dakar, Senegal",
    },
    // ... other video objects ...
];

const PreviousVideos = ({ videos = defaultVideos, onVideoSelect }) => {
    useEffect(() => {
        if (videos.length > 0) {
            onVideoSelect(videos[0]);
        }
    }, []);

    const handleVideoSelect = (video) => {
        onVideoSelect(video);
    };

    return (
        <Box as="section" py={10} mt={10}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" fontWeight='normal' mb={6} color="var( --clr-primary-1)">
                    Previous Videos
                </Heading>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                    {videos.map((video, index) => (
                        <VideoCard key={video.id} video={video} onSelect={handleVideoSelect} isNew={index === 0} />
                    ))}
                </SimpleGrid>
            </Container>
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
                <Image src={video.thumbnail} alt={video.title} width="100%" height="100%" objectFit="cover" />
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
                <Text fontWeight="normal" fontSize="lg" color="var( --clr-primary-1)" noOfLines={2} >
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
