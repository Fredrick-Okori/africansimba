import React from 'react';
import { Box, Stack, Heading, HStack, Button, Text, Flex, VStack, SimpleGrid, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

const teamMembers = [
    {
        name: 'Tyra Tyra',
        position: 'Events Organizer',
        bio: 'John is the visionary leader with over 20 years of experience.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    {
        name: 'Jane Smith',
        position: 'CTO',
        bio: 'Jane is the tech mastermind behind our innovative solutions.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    {
        name: 'Emily Johnson',
        position: 'Lead Designer',
        bio: 'Emily brings creativity and aesthetics to the forefront of our projects.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    {
        name: 'Emily Johnson',
        position: 'Lead Designer',
        bio: 'Emily brings creativity and aesthetics to the forefront of our projects.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    {
        name: 'Emily Johnson',
        position: 'Lead Designer',
        bio: 'Emily brings creativity and aesthetics to the forefront of our projects.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    {
        name: 'Emily Johnson',
        position: 'Lead Designer',
        bio: 'Emily brings creativity and aesthetics to the forefront of our projects.',
        imageUrl: '/videoposters/afro_beauty.avif'
    },
    // Add more team members as needed
];

const TeamSection = () => {
    return (
        <Container maxW="container.lg" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {teamMembers.map((member, index) => (
                    <Box
                        key={index}
                        borderRadius="md"
                        overflow="hidden"
                        boxShadow="lg"
                        bg="white"
                        maxW="sm"
                        p={5}
                        _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
                    >
                        <Box borderRadius="full" overflow="hidden" width="100px" height="100px" mx="auto">
                            <Image
                                src={member.imageUrl}
                                alt={`${member.name}'s photo`}
                                width={100}
                                height={100}
                                objectFit="cover"
                                quality={100}
                            />
                        </Box>
                        <VStack mt={4} spacing={1} textAlign="center">
                            <Text fontWeight="bold" fontSize="xl">
                                {member.name}
                            </Text>
                            <Text color="gray.500" fontSize="md">
                                {member.position}
                            </Text>
                            <Text fontSize="sm" color="gray.600" mt={2}>
                                {member.bio}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
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
                            <Heading size="xl" color={{ base: 'var(--clr-primary-3)', md: 'var(--clr-primary-2)', lg: 'var(--clr-primary-3)' }} fontWeight="bold">
                                We are the Game Changers
                            </Heading>
                            <Heading size="sm" fontWeight="normal" color='var(--clr-primary-2)'>
                                An emotional and authentic experience with the Game Changers including the high-energy DJs
                            </Heading>
                        </Stack>
                        <HStack spacing="3">
                            <Button as={Link} href='/store' _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-3)', color: 'var(--clr-primary-1' }} textDecoration='none' rightIcon={<FiExternalLink />} rounded="full" colorScheme="var(--clr-primary-3)" variant="outline">
                                View Events
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden" position="relative" padding={{ base: '0', lg: '0' }}>
                    <Image src="/compressed/new_muleba.jpeg" loading='lazy' alt="African Simba Team" style={{borderRadius: '10px'}} width={500} height={200} objectFit="cover" quality={100} />
                </Flex>
            </Stack>
        </Box>
        </Container>
    );
};

export default TeamSection;
