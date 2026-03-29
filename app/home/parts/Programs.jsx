"use client";
import React from "react";
import {
    Box,
    Container,
    Text,
    Button,
    VStack,
    Heading,
    Flex,
    HStack,
    Icon,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronRight, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const products = [
    {
        id: 1,
        name: "White Jomboree Branded Cap",
        image: "/store/jamboree_cap.webp",
        price: "UGX 15,000",
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
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 20,
    },
};

const ProductCard = React.memo(({ product }) => (
    <Box
        position="relative"
        borderRadius="2xl"
        m={2}
        overflow="hidden"
        border="1px solid rgba(255,255,255,0.06)"
        transition="all 0.4s ease"
        role="group"
        _hover={{
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
            borderColor: "rgba(239,178,9,0.2)",
        }}
    >
        <Box position="relative" h={{ base: "350px", md: "400px" }}>
            <ChakraImage
                src={product.image}
                alt={product.name}
                w="100%"
                h="100%"
                objectFit="cover"
            />
            <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9) 100%)"
                transition="all 0.4s ease"
                _groupHover={{
                    bg: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.95) 100%)",
                }}
            />

            <VStack
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={5}
                align="start"
                spacing={3}
            >
                <Box>
                    <Text
                        color="var(--clr-primary-1)"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="bold"
                        lineHeight={1.3}
                        mb={1}
                    >
                        {product.name}
                    </Text>
                    <Text
                        color="var(--clr-primary-3)"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                        {product.price}
                    </Text>
                </Box>
                <Button
                    size="sm"
                    rounded="xl"
                    bg="rgba(255,255,255,0.1)"
                    color="var(--clr-primary-1)"
                    border="1px solid rgba(255,255,255,0.1)"
                    fontSize="xs"
                    fontWeight="bold"
                    _hover={{
                        bg: "var(--clr-primary-3)",
                        color: "black",
                        borderColor: "var(--clr-primary-3)",
                    }}
                    transition="all 0.3s ease"
                >
                    <Icon as={FiShoppingBag} mr={2} boxSize={3} />
                    Add to Cart
                </Button>
            </VStack>
        </Box>
    </Box>
));

ProductCard.displayName = "ProductCard";

const ProductCarousel = () => {
    return (
        <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
            <Flex
                justify="space-between"
                align={{ base: "start", md: "end" }}
                mb={8}
                direction={{ base: "column", md: "row" }}
                gap={5}
            >
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Text
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                        color="var(--clr-primary-3)"
                        mb={3}
                    >
                        Merch
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        color="var(--clr-primary-1)"
                        mb={2}
                    >
                        From our{" "}
                        <Text as="span" color="var(--clr-primary-3)">
                            Store
                        </Text>
                    </Heading>
                    <Text fontSize="sm" color="rgba(255,255,255,0.5)">
                        Check out our latest products and merchandise
                    </Text>
                </MotionBox>

                <Button
                    as={Link}
                    href="/store"
                    rounded="2xl"
                    size="md"
                    px={6}
                    py={6}
                    fontWeight="bold"
                    fontSize="sm"
                    bg="rgba(255,255,255,0.08)"
                    color="var(--clr-primary-1)"
                    border="1px solid rgba(255,255,255,0.1)"
                    transition="all 0.3s ease"
                    flexShrink={0}
                    _hover={{
                        textDecoration: "none",
                        bg: "rgba(255,255,255,0.12)",
                        transform: "translateY(-2px)",
                        borderColor: "rgba(239,178,9,0.3)",
                    }}
                    _active={{ transform: "translateY(0)" }}
                >
                    View More
                    <FiChevronRight style={{ marginLeft: "8px" }} />
                </Button>
            </Flex>

            <Carousel
                swipeable
                draggable={false}
                responsive={responsive}
                ssr
                infinite
                autoPlay
                autoPlaySpeed={5000}
                keyBoardControl
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Carousel>
        </Container>
    );
};

export default ProductCarousel;
