'use client';
import { Box, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <Box position="relative" h="40vh">
    

      {/* Content */}
      <Container maxW="container.xl" py={10} pt={{ base: '25%', lg: '10%' }}>
        <Box pb={10}>
          <Text
            lineHeight={1}
            fontWeight="bold"
            fontSize={{ base: '5xl', lg: '6xl' }}
            color="var(--clr-primary-1)"
            textAlign="center"
          >
            AFRICAN SIMBA EVENTS
          </Text>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color="var(--clr-primary-1)" textAlign="center">
            "The Game Changers"
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;

