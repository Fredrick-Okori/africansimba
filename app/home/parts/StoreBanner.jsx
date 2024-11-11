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

import Video from 'next-video';

import MulebaIntroductionVideo from '@/videos/introduction_video.mp4'
export const StoreBanner = () => {
    const [isVideoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
            <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                <Box
                    width={{ lg: 'sm' }}
                    rounded={{ base: '10', lg: '10' }}
                    transform={{ base: 'translateY(-50%)', lg: 'none' }}
                    mx={{ base: '6', md: '8', lg: '0' }}
                    px={{ base: '6', md: '8', lg: '0' }}
                    py={{ base: '6', md: '8', lg: '12' }}
                    bg={{ base: 'var(--clr-primary-3)', md: 'var(--clr-primary-3)', lg: 'transparent' }}
                >
                    <Stack spacing={{ base: '8', lg: '10' }} >
                        <Stack spacing={{ base: '2', lg: '4' }}>
                            <Heading size="xl" color={{ base: 'var(--clr-primary-2)', md: 'var(--clr-primary-2)', lg: 'var(--clr-primary-1)' }} fontWeight="bold">
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
                <Flex flex="1" overflow="hidden" position="relative">
                    <Video src={MulebaIntroductionVideo} style={{maxWidth: '55rem'}} accentColor="#ff0000" onLoadedData={handleVideoLoad} />
                </Flex>
            </Stack>
        </Box>
    );
};