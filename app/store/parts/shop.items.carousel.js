"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const products = [
    {
        name: "African Tint Art",
        image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        price: "UGX 15000",
        detailsUrl: "/product/african-tint-art"
    },
    {
        name: "Branded Simba Cap",
        image: "/videoposters/art.jpeg",
        price: "UGX 140,000",
        detailsUrl: "/product/branded-simba-cap"
    },
    {
        name: "Bold Gucci Cap",
        image: "/store/boldfit-head-caps-with-adjustable-strap-in-summer-for-men-caps-men-for-all-sports-black-product-images-orvbhpbfyho-p600039429-0-202304121406.webp",
        price: "UGX 90,000",
        detailsUrl: "/product/bold-gucci-cap"
    },
    {
        name: "African Fibonnaci Wristband",
        image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        price: "UGX 150,000",
        detailsUrl: "/product/african-fibonacci-wristband"
    },
    {
        name: "African Simba Logo T-shirt",
        image: "/store/images.asos-media.avif",
        price: "UGX 120,000",
    },
    {
        name: "African Simba Logo T-shirt",
        image: "/store/wholesale-blank-cotton-tshirts.avif",
        price: "UGX 120,000",
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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

const ShopItems = () => {
    const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
    const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

    return (
        <Container maxW="container.xl" py={10}>
            <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }}>
                <Box mb={{ base: 4, md: 0 }}>
                    <Text fontSize={fontSize} fontWeight="bold" color="white" mb={3}>Liked by many customers</Text>
                    <Text fontSize={subFontSize} fontWeight="normal" color="white">Check out our latest products and merchandise!</Text>
                </Box>
                <Button
                    rightIcon={<FiExternalLink />}
                    rounded="full"
                    colorScheme="whiteAlpha"
                    variant="outline"
                    _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }}
                    size={buttonSize}
                >
                    View All
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
                    <Box key={index}position="relative" borderRadius="lg" m={2} overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s">
                        <Image src={product.image} alt={product.name} w="100%" h={imageHeight} objectFit="cover" />
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
                            >
                                <Text color="white" fontSize={["sm", "md", "lg"]} fontWeight="bold">{product.name}</Text>
                                <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{product.price}</Text>
                                <Button
                                    rounded='full'
                                    textDecoration='none'
                                    variant='outline'

                                    colorScheme='whiteAlpha'
                                    _hover={{ textDecoration: 'none', bg: 'white', color: 'black' }}
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

export default ShopItems;
