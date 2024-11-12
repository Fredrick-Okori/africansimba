import React from 'react';
import { Box, Text, Flex, VStack, SimpleGrid, Container } from '@chakra-ui/react';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
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
        </Container>
    );
};

export default TeamSection;
