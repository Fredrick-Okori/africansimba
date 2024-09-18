import React from 'react';
import { useState } from 'react';
import { Box, Text, Flex, Heading, Container, Grid, Image } from '@chakra-ui/react';
import AudioPlayer from 'react-audio-play';

const Podcasts = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const podcasts = [
    { id: 1, title: "Podcast 1", url: "https://example.com/podcast1.mp3", image: "/images/ddane.jpg", location: "New York", duration: "1h 30m" },
    { id: 2, title: "Podcast 2", url: "https://example.com/podcast2.mp3", image: "/images/ddane.jpg", location: "Los Angeles", duration: "2h 15m" },
    { id: 3, title: "Podcast 3", url: "https://example.com/podcast3.mp3", image: "/images/ddane.jpg", location: "Chicago", duration: "1h 45m" },
    { id: 4, title: "Podcast 1", url: "https://example.com/podcast1.mp3", image: "/images/ddane.jpg", location: "New York", duration: "1h 30m" },
    { id: 5, title: "Podcast 2", url: "https://example.com/podcast2.mp3", image: "/images/ddane.jpg", location: "Los Angeles", duration: "2h 15m" },
    { id: 6, title: "Podcast 3", url: "https://example.com/podcast3.mp3", image: "/images/ddane.jpg", location: "Chicago", duration: "1h 45m" },
    // Add more podcasts as needed
  ];

  return (
      <Container maxW="container.xl" mt="25" mb={20}>
          <Heading as="h2" size="xl" fontWeight='normal' mb={6} color="var( --clr-primary-1)">
              Enriched Podcasts
          </Heading>
          <Box p="20px">
              {selectedPodcast && (
                  <Box>
                      <Text fontSize="lg" fontWeight="bold">{selectedPodcast.title}</Text>
                     <audio controls/>
                  </Box>
              )}
          </Box>
          <Flex justifyContent="space-between">
           
        <Box flex={1} p="20px" overflowY="auto" maxHeight="600px">
        
          <Grid templateColumns="repeat(1, 1fr)" gap={4}>
            {podcasts.slice(0, 5).map(podcast => (
                <Box key={podcast.id} p="10px" boxShadow='lg'
                    border='0.5px solid transparent'
                    _hover={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', border: '0.5px solid grey' }}
                    borderRadius="5px" cursor="pointer" onClick={() => setSelectedPodcast(podcast)}>
                {/* <Flex justifyContent="space-between">
                  <Image src={podcast.image} alt={podcast.title} mb="10px" />
                  <Box flex={1}>
                    <Text fontSize="lg" fontWeight="bold">{podcast.title}</Text>
                    <Text fontSize="sm" color="gray.500">Location: {podcast.location}</Text>
                    <Text fontSize="sm" color="gray.500">Duration: {podcast.duration}</Text>
                  </Box>
                </Flex> */}
                    
                    <Flex justifyContent="space-between" gap={2}>
                        <Box>
                            <Image src={podcast.image} width={100} rounded={5} alt={podcast.title} mb="10px" />
                        
                        </Box>
                        <Box flex={1}>

                            <Text fontSize="lg" color="var( --clr-primary-1)" fontWeight="normal">{podcast.title}</Text>
                            <Text fontSize="sm" color="gray.500">Location: {podcast.location}</Text>
                            <Text fontSize="sm" color="gray.500">Duration: {podcast.duration}</Text>
                        </Box>
                    </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
              <Box flex={1}>
                  
       </Box>
      </Flex>
    </Container>
  );
};

export default Podcasts;
