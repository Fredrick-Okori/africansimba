import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';

const ProductCategoryNav = () => {
  const categories = [
    { name: 'Electronics', href: '/store/electronics' },
    { name: 'Fashion', href: '/store/fashion' },
    { name: 'Home & Garden', href: '/store/home-garden' },
    { name: 'Sports & Outdoors', href: '/store/sports-outdoors' },
  ];

  return (
    <Box bg={'var(--clr-primary-3)'} >
    <Container maxW="container.xl" py={10} pt='10%' >
        <Text fontSize="lg" color="var( --clr-primary-2)" fontWeight="bold" mb={4}>
        Product Categories
      </Text>
        <Flex flexWrap="wrap" gap={4} color="var( --clr-primary-2)">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            _hover={{ textDecoration: 'none', color: 'var(--clr-primary-1)' }}
          >
            {category.name}
          </Link>
        ))}
      </Flex>
    </Container>
      </Box>
  );
};

export default ProductCategoryNav;

