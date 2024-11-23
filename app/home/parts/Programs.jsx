"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const products = [
    {
        id:1,
        name: "White Jomboree Branded Cap ",
        image: "/store/jamboree_cap.webp",
        price: "UGX 15000",
        
    },
    {
        id: 2,
        name: "White Jomboree Branded T-shirt",
        image: "/store/jamboree_branded_tshirt.webp",
        price: "UGX 140,000",
      
    },
    {
        id: 3,
        name: "Black Jomboree Collar Shirt",
        image: "/store/jamboree_collar_shirt.webp",
        price: "UGX 90,000",
        
    },
    {
        id: 4,
        name: "Black Jomboree Branded Cap",
        image: "/store/jamboree_cap_black.webp",
        price: "UGX 150,000",
        detailsUrl: "/product/african-fibonacci-wristband"
    },
    {
        id: 5,
        name: "Black Jomboree Hoodie",
        image: "/store/black_jamboree_hoodie.webp",
        price: "UGX 120,000",
    },
    {
        id: 6,
        name: "African Simba Logo T-shirt",
        image: "/store/store_tshirt_dark.webp",
        price: "UGX 120,000",
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 20
    }
};

const ProductCarousel = () => {
    const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
    const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

    return (
        <Container maxW="container.xl" py={10}>
            <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }}>
                <Box mb={{ base: 4, md: 0 }}>
                    <Text fontSize={fontSize} fontWeight="bold" color="var( --clr-primary-1)" mb={3}>From our Stores</Text>
                    <Text fontSize={subFontSize} fontWeight="normal" color="var( --clr-primary-1)">Check out our latest products and merchandise!</Text>
                </Box>
                <Button 
                    as={Link}
                    href='/store'
                    rightIcon={<FiExternalLink />} 
                    rounded="full" 
                    colorScheme="whiteAlpha" 
                    variant="outline" 
                    _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}
                    size={buttonSize}
                >
                    View More
                </Button>
            </Flex>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                allowSwipe={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
     
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {products.map((product, index) => (
                    <Box key={index} position="relative" borderRadius="lg" m={2} overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s">
                        <Image src={product.image}  alt={product.name} w="100%" h={imageHeight} objectFit="cover" />
                        <Box 
                            position="absolute" 
                            borderRadius='lg'
                            top={0} 
                            left={0} 
                            right={0} 
                            bottom={0} 
                            bgGradient="linear(to-b, rgba(0,0,0,0.1), rgba(0,0,0,0.9))"
                        >
                            <VStack 
                                position="absolute" 
                                bottom={0} 
                                left={0} 
                                right={0} 
                                p={4} 
                                align="stretch" 
                                spacing={2}
                                rounded='xl'
                            >
                                <Text color="var( --clr-primary-1)" fontSize={["sm", "md", "lg"]} fontWeight="bold">{product.name}</Text>
                                <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{product.price}</Text>
                                <Button 
                                    rounded='full' 
                                    textDecoration='none' 
                                    variant='outline' 
                                    
                                    colorScheme='whiteAlpha' 
                                    _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}
                                    size={buttonSize}
                                    fontSize={["xs", "sm"]}
                                    alignSelf={{ base: "center", sm: "flex-end" }}
                                >
                                    Add to Cart
                                </Button>
                            </VStack>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Container>
    );
};

export default ProductCarousel;
