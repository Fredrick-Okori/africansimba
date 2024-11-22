'use client'
import { Box, Container,Text, Flex, Button, Icon } from '@chakra-ui/react';
import { FaShoePrints, FaTshirt, FaHatCowboy, FaBiking, FaHome, FaMusic, FaFilm } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ContactHero = () => {
 

  return (
    <Box position="relative" h="40vh" bg="var(--clr-primary-3)">
    

      {/* Content */}
      <Container maxW="container.xl" py={10} pt={{ base: '25%', lg: '10%' }}>
        <Box pb={10}>
          <Text
            lineHeight={1}
            fontWeight="bold"
            fontSize={{ base: '5xl', lg: '6xl' }}
            color="var(--clr-primary-2)"
            textAlign="center"
          >
            AFRICAN SIMBA EVENTS
          </Text>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color="var(--clr-primary-2)" textAlign="center">
            "The Game Changers"
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactHero;
