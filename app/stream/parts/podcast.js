import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    VStack,
    Container
} from '@chakra-ui/react';

const podcastList = [
    {
        id: 1,
        title: "Armin van Buuren's Weekend Kick-Off",
        episode: "Show 259 - August 30, 2024",
        coverImage: "/images/ddane.jpg",
        soundCloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1494004108&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        id: 2,
        title: "TechTalk with Sarah Johnson",
        episode: "Episode 42 - The Future of AI",
        coverImage: "/images/ddane.jpg",
        soundCloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567890&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        id: 3,
        title: "History Unveiled",
        episode: "Ancient Egypt: Secrets of the Pharaohs",
        coverImage: "/images/ddane.jpg",
        soundCloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/0987654321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
];

const PodcastPlayer = ({ podcast }) => {
    return (
        <Box
            bg='hsla(0, 0%, 0%, 0.5)'  // Adjusted background for frosted glass effect
            backgroundBlendMode='soft-light'
            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
            borderRadius="lg"
            overflow="hidden"
         
            width="50%"
            p={4}
            mb={4}
        >
            <Flex alignItems="center">
             
                <Box flex="1">
                    <Text fontSize="lg" fontWeight="bold" color="white">
                        {podcast.title}
                    </Text>
                    <Text fontSize="sm" color="gray.300" mb={2}>
                        {podcast.episode}
                    </Text>
                    <Box>
                        <iframe
                            width="100%"
                            height="20px"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src={podcast.soundCloudUrl}
                        ></iframe>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

const Podcast = () => {
    return (
        <Container maxW="container.xl">
            <VStack spacing={4} align="stretch">
                {podcastList.map(podcast => (
                    <PodcastPlayer key={podcast.id} podcast={podcast} />
                ))}
            </VStack>
        </Container>
    );
};

export default Podcast;
