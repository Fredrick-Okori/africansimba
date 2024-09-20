"use client";
import React from 'react';
import { Box, Container, Text, Image, Button, VStack, Flex, HStack, Grid, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const ROUTE_POST_ID = 'store/[id]';



import { products } from './data';

const FullStore = () => {
    const fontSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const subFontSize = useBreakpointValue({ base: "md", md: "xl" });
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
    const imageHeight = useBreakpointValue({ base: "300px", md: "400px" });

    return (
        <Container maxW="container.xl" py={10}>
            <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }}>
                <Box mb={{ base: 4, md: 0 }}>
                    <Text fontSize={fontSize} fontWeight="bold" color="var( --clr-primary-2)" mb={3}>All from our Stores</Text>
                    {/* <Text fontSize={subFontSize} fontWeight="normal" color="white">Check out our latest products and merchandise!</Text> */}
                </Box>

            </Flex>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
                {products.map((product, index) => (
                  
                        <Box key={index} position="relative" borderRadius="lg" overflow="hidden" _hover={{ transform: 'scale(1.01)' }} transition="all 0.3s">
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
                                    <Text color="var( --clr-primary-1)" fontSize={["sm", "md", "lg"]} fontWeight="bold">{product.name}</Text>
                                    <Text color="gray.300" fontSize={["xs", "sm", "md"]}>{product.price}</Text>
                                    <Button
                                        rounded='full'
                                        textDecoration='none'
                                        variant='outline'

                                        colorScheme='whiteAlpha'
                                    _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-2)', color: 'var(--clr-primary-3)' }}
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
            </Grid>
        </Container>
    );
};

export default FullStore;
