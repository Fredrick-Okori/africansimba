"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'; // Use Next.js Link
import { FiExternalLink } from 'react-icons/fi';

import { products } from './data';
const ROUTE_POST_ID = 'store/[id]';

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
                {products.map((product) => (
                    <Box key={product.id}>
                        <Link href={`/store/${product.id}`} as={`/store/${product.id}`}>
                            
                                <Box position="relative" borderRadius="lg" m={2} overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s" cursor="pointer">
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
                                            <Text color="var(--clr-primary-1)" fontSize={["sm", "md", "lg"]} fontWeight="bold">{product.name}</Text>
                                            <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{product.price}</Text>
                                            <Button
                                                rounded='full'
                                                textDecoration='none'
                                                variant='outline'
                                                colorScheme='whiteAlpha'
                                                _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-1)', color: 'black' }}
                                                size={buttonSize}
                                                fontSize={["xs", "sm"]}
                                                alignSelf={{ base: "center", sm: "flex-end" }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Box>
                            
                        </Link>
                    </Box>
                ))}
            </Carousel>
        </Container>
    );
};

export default ShopItems;
