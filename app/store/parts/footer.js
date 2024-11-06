'use client'
import { Box, Flex, Divider, AbsoluteCenter, Text, Link, Image, Container, VStack, SimpleGrid } from '@chakra-ui/react';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { useSearchParams, useRouter } from 'next/navigation'; // Changed import statement

import { Suspense, lazy } from 'react';

const ShopFooter = () => {
    const currentYear = new Date().getFullYear();


    return (
        <Suspense>
            <Box color='var(--clr-primary-2)' py={20}>
                <Container maxW="container.xl">

                    <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-evenly" mt={{ base: '20', lg: 'auto' }} align="center" w="full" gap={5}>
                        <Box textAlign={{ base: 'center', lg: 'left' }}>
                            <Text>Copyright &copy; {currentYear} African Simba Events. All rights reserved.</Text>
                        </Box>
                        <Box textAlign={{ base: 'center', lg: 'right' }}>
                            <Text>
                                <Link href="#" isExternal>Privacy Policy</Link> | <Link href="#" isExternal>Terms of Service</Link>
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Suspense>
    );
};

export default ShopFooter;
