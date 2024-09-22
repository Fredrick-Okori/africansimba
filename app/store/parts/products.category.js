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
        <Text fontSize="lg" color="var( --clr-primary-2)" fontWeight="bold" mb={4}>
        Store Categories
      </Text>
        <Flex flexWrap="wrap" gap={4} color="var( --clr-primary-2)">
        {categories.map((category) => (
          <Button
            rounded='full'
            key={category.name}
            as={Link} href={category.href}
            _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-1)' }}
            leftIcon={<Icon as={category.icon} w={6} h={6} />}
          >
            {category.name}
          </Button>
        ))}
      </Flex>
    </Container>
      </Box>
  );
};

export default ProductCategoryNav;
