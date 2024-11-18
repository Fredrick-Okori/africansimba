'use client'
import { Box, Container,Text, Flex, Button, Icon } from '@chakra-ui/react';
import { FaShoePrints, FaTshirt, FaHatCowboy, FaBiking, FaHome, FaMusic, FaFilm } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const AboutHero = () => {
 

  return (
    <Box bg={'var(--clr-primary-3)'} >
    <Container maxW="container.xl" py={10} pt={{base: '25%', lg: '10%'}} >
        <Box pb={10}>
          <Text lineHeight={1} fontWeight='bold' fontSize={{ base: '5xl', lg: '6xl' }} color='var( --clr-primary-2)' textAlign='center'>
            African Simba Events - About Us
          </Text>
          <Text color='var( --clr-primary-2)' textAlign='center' >
            African Simbas Official Fashion Store. Introducing trending style with our merchandise
          </Text>
        </Box>
     
    </Container>
      </Box>
  );
};

export default AboutHero;
