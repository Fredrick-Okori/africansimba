import React from 'react';
import { Box, Stack, Heading, HStack, Button, Text, Flex, VStack, SimpleGrid, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

const teamMembers = [
    {
        name: 'Shilla Angel',
        position: 'Personal Assistant',
        imageUrl: '/team/shillah_Angel.webp'
    },
    {
        name: 'Tyra Osbert',
        position: 'Media and Production Manager',   
        imageUrl: '/team/Tyra_Osbert.webp'
    },
    {
        name: 'Kimnana Lil Stunner',
        position: 'Official Hostess',   
        imageUrl: '/team/kimnana_lil_stunner.webp'
    },
    {
        name: 'Laylah Mckenzie',
        position: 'Official Hostess',      
        imageUrl: '/team/Laylah_mak.webp'
    },
    {
        name: 'Hannah Tewodross',
        position: 'Official Hostess',    
        imageUrl: '/team/hannah_tewodross.webp'
    },
    {
        name: 'Gift Kihembo',
        position: 'Offical Hostess',  
        imageUrl: '/team/gift_kihembo.webp'
    },
    {
        name: 'Dj Katso',
        position: 'Official Deejay',  
        imageUrl: '/team/dj_katso.webp'
    },
    {
        name: 'Dj Ashley',
        position: 'Offical Deejay',  
        imageUrl: '/team/dj_ashley.webp'
    },
    {
        name: 'Raoul Mak',
        position: 'Management',    
        imageUrl: '/team/Raoul_Mak.webp'
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
                 position="relative"
                
               >
                 {/* Image Wrapper */}
                 <Box position="relative" overflow="hidden" w="100%" h="300px">
                   <Image
                     src={member.imageUrl}
                     alt={`${member.name}'s photo`}
                     layout="fill"
                     objectFit="cover"
                     quality={80}
                     priority
                     style={{ borderRadius: "lg" }}
                   />
                   {/* Overlay */}
                   <Box
                     className="overlay"
                     position="absolute"
                     top={0}
                     left={0}
                     w="100%"
                     h="100%"
                     bg="rgba(0, 0, 0, 0.6)"
                     opacity={0}
                     zIndex={1}
                   />
                   {/* Hover Text Content */}
                  
                 </Box>
                 
                 {/* Default Text Content */}
                 <Box textAlign="center" mt={4}>
                   <Text fontWeight="bold" color="var(--clr-primary-1)" fontSize="lg">
                     {member.name}
                   </Text>
                   <Text color="var(--clr-primary-1)" fontSize="sm">
                     {member.position}
                   </Text>
                   <Text fontSize="xs" mt={2} color="gray.600">
                     {member.bio}
                   </Text>
                 </Box>
               </Box>
        

                ))}
            </SimpleGrid>
       
        </Container>
    );
};

export default TeamSection;
