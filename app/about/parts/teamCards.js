'use client'
import React, { useState } from 'react';
import { 
    Box, 
    Text, 
    SimpleGrid, 
    Container, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    VStack, 
    HStack,
    Badge,
    Icon,
    Flex,
    Button,
    useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink, FiUser, FiBriefcase, FiStar, FiAward } from "react-icons/fi";

const teamMembers = [
    {
        name: 'Shillah Angel',
        position: 'Personal Assistant',
        imageUrl: '/team/shillah_Angel.webp',
        bio: 'Dedicated personal assistant ensuring smooth operations and coordination across all events and activities.',
        experience: '2+ years',
        specialties: ['Event Coordination', 'Administrative Support', 'Client Relations'],
        social: { instagram: '@shillah_angel', twitter: '@shillah' }
    },
    {
        name: 'Tyra Osbert',
        position: 'Media and Production Management',   
        imageUrl: '/team/Tyra_Osbert.webp',
        bio: 'Expert in media production and content management, bringing creative vision to life through visual storytelling.',
        experience: '2+ years',
        specialties: ['Video Production', 'Content Strategy', 'Post-Production'],
        social: { instagram: '@tyra_osbert', twitter: '@tyra' }
    },
    {
        name: 'Raoul Mak',
        position: 'Management',    
        imageUrl: '/team/Raoul_Mak.webp',
        bio: 'Strategic leader focused on business development and team coordination for optimal event execution.',
        experience: '1+ years',
        specialties: ['Team Leadership', 'Business Strategy', 'Operations Management'],
        social: { instagram: '@raoul_mak', twitter: '@raoul' }
    },
    {
        name: 'Bivince Mugisho',
        position: 'Management',  
        imageUrl: '/team/Mugisho.webp',
        bio: 'Experienced manager specializing in logistics and ensuring seamless event operations.',
        experience: '2+ years',
        specialties: ['Logistics Management', 'Vendor Relations', 'Quality Control'],
        social: { instagram: '@bivince', twitter: '@bivince' }
    },
    {
        name: 'Delphin Jack',
        position: 'Floor Management',  
        imageUrl: '/team/delphin_jack.webp',
        bio: 'On-site floor manager ensuring perfect event flow and guest experience management.',
        experience: '3+ years',
        specialties: ['Floor Operations', 'Crowd Control', 'Guest Services'],
        social: { instagram: '@delphin_jack', twitter: '@delphin' }
    },
    {
        name: 'Freeman',
        position: 'Photographer',  
        imageUrl: '/team/freeman.jpeg',
        bio: 'Professional photographer capturing memorable moments and creating stunning visual content.',
        experience: '1+ years',
        specialties: ['Event Photography', 'Portrait Photography', 'Visual Documentation'],
        social: { instagram: '@freeman_photos', twitter: '@freeman' }
    },
    {
        name: 'Kimnana Lil Stunner',
        position: 'Host',   
        imageUrl: '/team/kimnana_lil_stunner.webp',
        bio: 'Charismatic host bringing energy and entertainment to every event with exceptional stage presence.',
        experience: '1+ years',
        specialties: ['Live Hosting', 'Audience Engagement', 'Entertainment'],
        social: { instagram: '@kimnana_stunner', twitter: '@kimnana' }
    },
    {
        name: 'Laylah Mckenzie',
        position: 'Host',      
        imageUrl: '/team/Laylah_mak.webp',
        bio: 'Dynamic host with natural charm and ability to connect with diverse audiences.',
        experience: '1+ years',
        specialties: ['Event Hosting', 'Public Speaking', 'Crowd Interaction'],
        social: { instagram: '@laylah_mckenzie', twitter: '@laylah' }
    },
    {
        name: 'Hannah Tewodross',
        position: 'Hostess',    
        imageUrl: '/team/hannah_tewodross_copy.jpg',
        bio: 'Professional hostess providing exceptional guest welcome and hospitality services.',
        experience: '2+ years',
        specialties: ['Guest Relations', 'Hospitality', 'Customer Service'],
        social: { instagram: '@hannah_tew', twitter: '@hannah' }
    },
 
    {
        name: 'Tracy Belaire',
        position: 'Hostess',  
        imageUrl: '/team/tracy_belaire.webp',
        bio: 'Experienced hostess with a focus on creating memorable first impressions for all guests.',
        experience: '1+ years',
        specialties: ['Guest Experience', 'Protocol Management', 'Event Assistance'],
        social: { instagram: '@tracy_belaire', twitter: '@tracy' }
    },

    {
        name: 'Dj Ashley',
        position: 'Official Deejay',  
        imageUrl: '/team/dj_ashley_copy.jpg',
        bio: 'Talented DJ specializing in diverse music genres and creating unforgettable party experiences.',
        experience: '1+ years',
        specialties: ['Multi-Genre Mixing', 'Party Atmosphere', 'Sound Engineering'],
        social: { instagram: '@dj_ashley', twitter: '@djashley' }
    },
    {
        name: 'Dj Wizzy',
        position: 'Official Deejay',  
        imageUrl: '/team/dj_wizzy.webp',
        bio: 'Creative DJ known for innovative mixes and keeping dance floors packed all night long.',
        experience: '2+ years',
        specialties: ['Creative Mixing', 'Dance Music', 'Technical Skills'],
        social: { instagram: '@dj_wizzy', twitter: '@djwizzy' }
    },
    {
        name: 'Selecta Ryan',
        position: 'Official Deejay',  
        imageUrl: '/team/selecta_ryan.webp',
        bio: 'Versatile selector with deep music knowledge and ability to adapt to any event style.',
        experience: '2+ years',
        specialties: ['Music Selection', 'Reggae/Dancehall', 'Event Adaptation'],
        social: { instagram: '@selecta_ryan', twitter: '@selectaryan' }
    },
    {
        name: 'Future MC',
        position: 'Official MC',  
        imageUrl: '/team/future_mc.webp',
        bio: 'Professional MC with commanding stage presence and ability to energize any crowd.',
        experience: '1+ years',
        specialties: ['Stage Presence', 'Crowd Control', 'Live Performance'],
        social: { instagram: '@future_mc', twitter: '@futuremc' }
    },
    {
        name: 'Petrie MC',
        position: 'Official MC',  
        imageUrl: '/team/petrie.jpeg',
        bio: 'Experienced MC with natural charisma and talent for keeping events flowing smoothly.',
        experience: '2+ years',
        specialties: ['Event Flow', 'Audience Interaction', 'Entertainment'],
        social: { instagram: '@petrie_mc', twitter: '@petriemc' }
    }
];

const TeamSection = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
        setSelectedMember(null);
    };

    return (
        <>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} spacing={8}>
                    {teamMembers.map((member, index) => (
                        <Box
                            key={index}
                            w="100%"
                            bg="rgba(255, 255, 255, 0.05)"
                            backdropFilter="blur(20px)"
                            borderRadius="2xl"
                            overflow="hidden"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                            position="relative"
                            cursor="pointer"
                            transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            _hover={{ 
                                transform: "translateY(-12px) scale(1.02)",
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                                bg: "rgba(255, 255, 255, 0.08)",
                                "& .image-container": { 
                                    transform: "scale(1.1)" 
                                },
                                "& .overlay": { 
                                    opacity: 1,
                                    backdropFilter: "blur(8px)"
                                },
                                "& .view-profile": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }}
                            onClick={() => handleMemberClick(member)}
                        >
                            {/* Modern Image Container */}
                            <Box 
                                position="relative" 
                                overflow="hidden" 
                                w="100%" 
                                h="320px"
                                borderRadius="2xl"
                            >
                                <Box
                                    className="image-container"
                                    transition="transform 0.6s ease"
                                    w="100%"
                                    h="100%"
                                >
                                    <Image
                                        src={member.imageUrl}
                                        alt={`${member.name}'s photo`}
                                        layout='fill'
                                        objectFit='cover'
                                        quality={90}
                                        priority
                                    />
                                </Box>
                                
                                {/* Modern Gradient Overlay */}
                                <Box
                                    className="overlay"
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    w="100%"
                                    h="100%"
                                    bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.8) 100%)"
                                    opacity={0.7}
                                    transition="all 0.4s ease"
                                />
                                
                                {/* Floating Action Button */}
                                <Box
                                    className="view-profile"
                                    position="absolute"
                                    top="20px"
                                    right="20px"
                                    bg="rgba(255, 255, 255, 0.9)"
                                    backdropFilter="blur(10px)"
                                    borderRadius="full"
                                    p={3}
                                    opacity={0}
                                    transform="translateY(-10px)"
                                    transition="all 0.3s ease"
                                    border="1px solid rgba(255, 255, 255, 0.2)"
                                >
                                    <Icon as={FiExternalLink} color="black" boxSize={5} />
                                </Box>

                                {/* Bottom Info Overlay */}
                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    w="100%"
                                    p={6}
                                    zIndex={2}
                                >
                                    <VStack align="start" spacing={2}>
                                        <Text 
                                            fontSize="xl" 
                                            fontWeight="bold" 
                                            color="white"
                                            textShadow="0 2px 4px rgba(0,0,0,0.5)"
                                        >
                                            {member.name}
                                        </Text>
                                        <Text 
                                            fontSize="sm" 
                                            color="rgba(255,255,255,0.9)"
                                            textShadow="0 1px 2px rgba(0,0,0,0.5)"
                                            fontWeight="medium"
                                        >
                                            {member.position}
                                        </Text>
                                        <Badge
                                            variant="solid"
                                            bg="rgba(255, 255, 255, 0.2)"
                                            color="white"
                                            backdropFilter="blur(10px)"
                                            borderRadius="full"
                                            px={3}
                                            py={1}
                                            fontSize="xs"
                                        >
                                            {member.experience}
                                        </Badge>
                                    </VStack>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Ultra Modern Profile Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay 
                    bg='rgba(0, 0, 0, 0.8)' 
                    backdropFilter='blur(20px)' 
                />
                <ModalContent 
                    bg="rgba(20, 20, 20, 0.95)"
                    backdropFilter="blur(20px)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="3xl"
                    overflow="hidden"
                    maxH="90vh"
                >
                    {selectedMember && (
                        <>
                            {/* Hero Header */}
                            <Box
                                position="relative"
                                h="200px"
                                bg={`linear-gradient(135deg, var(--clr-primary-1), var(--clr-primary-3))`}
                            >
                                <ModalCloseButton 
                                    color="white" 
                                    size="lg" 
                                    bg="rgba(0,0,0,0.5)"
                                    borderRadius="full"
                                    m={4}
                                    _hover={{ bg: "rgba(0,0,0,0.7)" }}
                                />
                                
                                {/* Profile Image Floating */}
                                <Box
                                    position="absolute"
                                    bottom="-60px"
                                    left="40px"
                                    w="120px"
                                    h="120px"
                                    borderRadius="full"
                                    overflow="hidden"
                                    border="4px solid white"
                                    boxShadow="0 10px 30px rgba(0,0,0,0.3)"
                                >
                                    <Image
                                        src={selectedMember.imageUrl}
                                        alt={`${selectedMember.name}'s photo`}
                                        width={120}
                                        height={120}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover' 
                                        }}
                                    />
                                </Box>
                            </Box>
                            
                            <ModalBody p={0} pt={16}>
                                <Box p={8}>
                                    {/* Name and Position */}
                                    <VStack align="start" spacing={4} mb={8}>
                                        <Box>
                                            <HStack mb={2}>
                                                <Text 
                                                    fontSize="3xl" 
                                                    fontWeight="bold" 
                                                    color="white"
                                                >
                                                    {selectedMember.name}
                                                </Text>
                                                <Icon as={FiStar} color="gold" boxSize={6} />
                                            </HStack>
                                            
                                            <HStack spacing={3} mb={4}>
                                                <Icon as={FiBriefcase} color="var(--clr-primary-1)" boxSize={5} />
                                                <Text 
                                                    fontSize="xl" 
                                                    color="var(--clr-primary-1)" 
                                                    fontWeight="semibold"
                                                >
                                                    {selectedMember.position}
                                                </Text>
                                            </HStack>
                                            
                                            <HStack>
                                                <Badge 
                                                    variant="solid"
                                                    bg="var(--clr-primary-1)"
                                                    color="var(--clr-primary-2)"
                                                    fontSize="sm" 
                                                    px={4} 
                                                    py={2} 
                                                    borderRadius="full"
                                                >
                                                    <Icon as={FiAward} mr={2} />
                                                    {selectedMember.experience} Experience
                                                </Badge>
                                            </HStack>
                                        </Box>
                                    </VStack>

                                    {/* Bio */}
                                    <Box mb={8}>
                                        <Text 
                                            fontSize="lg" 
                                            color="rgba(255,255,255,0.9)" 
                                            lineHeight="1.8"
                                        >
                                            {selectedMember.bio}
                                        </Text>
                                    </Box>

                                    {/* Skills Grid */}
                                    <Box mb={8}>
                                        <Text 
                                            fontSize="xl" 
                                            fontWeight="bold" 
                                            color="white" 
                                            mb={4}
                                        >
                                            Core Expertise
                                        </Text>
                                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
                                            {selectedMember.specialties?.map((specialty, index) => (
                                                <Box
                                                    key={index}
                                                    bg="rgba(255,255,255,0.05)"
                                                    border="1px solid rgba(255,255,255,0.1)"
                                                    borderRadius="xl"
                                                    p={4}
                                                    textAlign="center"
                                                    transition="all 0.3s ease"
                                                    _hover={{
                                                        bg: "rgba(255,255,255,0.1)",
                                                        transform: "translateY(-2px)"
                                                    }}
                                                >
                                                    <Text
                                                        fontSize="sm"
                                                        color="white"
                                                        fontWeight="medium"
                                                    >
                                                        {specialty}
                                                    </Text>
                                                </Box>
                                            ))}
                                        </SimpleGrid>
                                    </Box>

                                    {/* Social Links */}
                                    <Box>
                                        <Text 
                                            fontSize="lg" 
                                            fontWeight="semibold" 
                                            color="white" 
                                            mb={3}
                                        >
                                            Connect
                                        </Text>
                                        <HStack spacing={4}>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                borderColor="rgba(255,255,255,0.3)"
                                                color="white"
                                                _hover={{
                                                    bg: "rgba(255,255,255,0.1)",
                                                    borderColor: "white"
                                                }}
                                            >
                                                {selectedMember.social?.instagram || '@username'}
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                borderColor="rgba(255,255,255,0.3)"
                                                color="white"
                                                _hover={{
                                                    bg: "rgba(255,255,255,0.1)",
                                                    borderColor: "white"
                                                }}
                                            >
                                                {selectedMember.social?.twitter || '@username'}
                                            </Button>
                                        </HStack>
                                    </Box>
                                </Box>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default TeamSection;
