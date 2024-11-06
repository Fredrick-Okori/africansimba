'use client'
import { Box, Container,Text, Flex, Button, Icon } from '@chakra-ui/react';
import { FaShoePrints, FaTshirt, FaHatCowboy, FaBiking, FaHome, FaMusic, FaFilm } from 'react-icons/fa';
import Link from 'next/link';

const ProductCategoryNav = () => {
  const categories = [
    { name: 'Shoes', href: '/store/foot-wear', icon: FaShoePrints },
    { name: 'Clothing', href: '/store/clothing', icon: FaTshirt },
    { name: 'Accessories', href: '/store/home-accessories', icon: FaHatCowboy },
    { name: 'Sports & Outdoors', href: '/store/sports-outdoors', icon: FaBiking },
    { name: 'Home & Decor', href: '/store/home-decor', icon: FaHome },
    { name: 'Music & Instruments', href: '/store/music-instruments', icon: FaMusic },
    { name: 'Movies & TV', href: '/store/movies-tv', icon: FaFilm },
  ];

  return (
    <Box bg={'var(--clr-primary-3)'} >
    <Container maxW="container.xl" py={10} pt='10%' >
        <Box>
          <Text lineHeight={1} fontWeight='bold' fontSize={{ base: '4xl', lg: '6xl' }} color='var( --clr-primary-2)' textAlign='center'>
            African Simba Events - Store
          </Text>
          <Text color='var( --clr-primary-2)' textAlign='center'>
            African Simbas Official Fashion Store. Introducing trending style with our merchandise
          </Text>
        </Box>
     
    </Container>
      </Box>
  );
};

export default ProductCategoryNav;
