'use client'
import {
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
    Button,
    Skeleton,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';


export const StoreBanner = () => {
  
    return (
        <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                <Box
                    width={{ lg: 'sm' }}
                    rounded={{ base: '10', lg: '10' }}
                  
                    mx={{ base: '6', md: '8', lg: '0' }}
                    px={{ base: '6', md: '8', lg: '0' }}
                    py={{ base: '6', md: '8', lg: '12' }}
                    bg={{ base: 'none', md: 'var(--clr-primary-3)', lg: 'transparent' }}
                >
                    <Stack spacing={{ base: '8', lg: '10' }} >
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            <Heading size="xl" color={{ base: 'var(--clr-primary-1)', md: 'var(--clr-primary-2)', lg: 'var(--clr-primary-1)' }} fontWeight="bold">
                                We are the Game Changers
                            </Heading>
                            <Heading size="md" fontWeight="normal" color='var(--clr-primary-1)'>
                                An emotional and authentic experience with the Game Changers including the high-energy DJs
                            </Heading>
                        </Stack>
                        <HStack spacing="3" color='var(--clr-primary-1)'>
                            <Button as={Link} href='/store' _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-1)', color: 'black' }} textDecoration='none' rightIcon={<FiExternalLink />} rounded="full" colorScheme="var(--clr-primary-1)Alpha" variant="outline">
                                View Events
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
                {/* <Flex flex="1" overflow="hidden" position="relative" padding={{ base: '0', lg: '0' }}>
                    <Video src={MulebaIntroductionVideo} style={{maxWidth: '55rem', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}} accentColor="var(--clr-primary-)" onLoadedData={handleVideoLoad} />
                </Flex> */}
            </Stack>
        </Box>
    );
};