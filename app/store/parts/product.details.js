"use client";
import {
    Box,
    Button,
    Container,
    Flex,
    Text,
    Image,
    Stack,
    IconButton,
    HStack,
    RadioGroup,
    Radio,
    Badge,
} from "@chakra-ui/react";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useRouter } from 'next/router'; // Import useRouter
import { products } from "./parts/data"; // Ensure this path is correct

const ProductDetails = () => {
    
    const router = useRouter();
    const { id } = router.query; // Get product ID from the URL

    const productId = id ? parseInt(id) : null;

    console.log("Product ID from URL:", id); // Debugging line
    // Find the product with the matching id
    const selectedProduct = products.find(
        (product) => product.id === productId
    );

    if (!selectedProduct) {
        return <div>Item not found in store.</div>;
    }

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

    return (
        <Container maxW="container.xl" mt={10}>
            <Flex direction={{ base: "column", md: "row" }} gap={10}>
                {/* Image Carousel */}
                <Box w={{ base: "100%", md: "50%" }}>
                    <Carousel responsive={responsive}>
                        {products.map((product) => (
                            product.id === id && ( // Only show images for the selected product
                                <Box key={product.name}>
                                    <Image src={product.image} alt={`Product Image ${product.name}`} />
                                </Box>
                            )
                        ))}
                    </Carousel>
                </Box>

                {/* Product Information */}
                <Box w={{ base: "100%", md: "50%" }}>
                    <Text fontSize="2xl" fontWeight="bold">{selectedProduct.name}</Text>
                    <Text fontSize="lg" color="gray.600">{selectedProduct.price}</Text>
                    <Text mt={2}>{selectedProduct.details}</Text>

                    {/* Color and Size Selection */}
                    <Stack direction="row" mt={5} spacing={5}>
                        <Box>
                            <Text fontWeight="bold">Color:</Text>
                            <HStack mt={2}>
                                <Box bg="black" boxSize="30px" borderRadius="full" />
                                <Box bg="gray.500" boxSize="30px" borderRadius="full" />
                                <Box bg="gray.300" boxSize="30px" borderRadius="full" />
                            </HStack>
                            <Badge mt={1} colorScheme="yellow">Low stock</Badge>
                        </Box>

                        <Box>
                            <Text fontWeight="bold">Size:</Text>
                            <RadioGroup defaultValue="32mm">
                                <HStack spacing={4}>
                                    <Radio value="32mm">32</Radio>
                                    <Radio value="36mm">36</Radio>
                                    <Radio value="40mm">40</Radio>
                                </HStack>
                            </RadioGroup>
                            <Text color="blue.500" mt={2} cursor="pointer">
                                View our sizing guide
                            </Text>
                        </Box>
                    </Stack>

                    {/* Quantity Selector */}
                    <Stack direction="row" mt={5} align="center">
                        <Text fontWeight="bold">Quantity:</Text>
                        <Flex align="center" border="1px" borderColor="gray.300">
                            <IconButton
                                icon={<FiMinus />}
                                onClick={() => { }}
                                aria-label="decrease quantity"
                            />
                            <Text px={4}>1</Text>
                            <IconButton
                                icon={<FiPlus />}
                                onClick={() => { }}
                                aria-label="increase quantity"
                            />
                        </Flex>
                    </Stack>

                    {/* Add to Cart and Favorite Buttons */}
                    <Stack direction="row" mt={5} spacing={5}>
                        <Button
                            size="lg"
                            colorScheme="blue"
                            leftIcon={<FiPlus />}
                            flex="1"
                        >
                            Add to cart
                        </Button>
                        <IconButton
                            aria-label="Add to favorites"
                            icon={<FiHeart />}
                            colorScheme="gray"
                        />
                    </Stack>
                </Box>
            </Flex>
        </Container>
    );
};

export default ProductDetails;