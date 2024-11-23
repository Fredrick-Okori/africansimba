import React from 'react';
import { Box, Text, SimpleGrid, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from "react-icons/fi";


const teamMembers = [
    {
        name: 'Shillah Angel',
        position: 'Personal Assistant',
        imageUrl: '/team/shillah_Angel.webp'
    },
    {
        name: 'Tyra Osbert',
        position: 'Media and Production Manager',   
        imageUrl: '/team/Tyra_Osbert.webp'
    },
    {
      name: 'Raoul Mak',
      position: 'Management',    
      imageUrl: '/team/Raoul_Mak.webp'
  },
  {
    name: 'Bivince Mugisho',
    position: 'Management',  
    imageUrl: '/team/Mugisho.webp'
  },
  {
    name: 'Luois 256',
    position: 'Media and Videography',   
    imageUrl: '/team/luois.jpeg'
},
{
  name: 'Allan',
  position: 'Director of Photography',   
  imageUrl: '/team/allan.jpeg'
},
    {
        name: 'Kimnana Lil Stunner',
        position: 'Host',   
        imageUrl: '/team/kimnana_lil_stunner.webp'
    },
    {
        name: 'Laylah Mckenzie',
        position: 'Host',      
        imageUrl: '/team/Laylah_mak.webp'
    },
    {
      name: 'Brenda Cloudz',
      position: 'Host',  
      imageUrl: '/team/brenda_cloudz.webp'
    },
    {
        name: 'Hannah Tewodross',
        position: 'Hostess',    
        imageUrl: '/team/hannah_tewodross_copy.jpg'
    },
   
    {
        name: 'Gift Kihembo',
        position: 'Hostess',  
        imageUrl: '/team/gift_kihembo.webp'
    },
    {
      name: 'Tracy Belaire',
      position: 'Hostess',  
      imageUrl: '/team/tracy_belaire.webp'
    },
    {
        name: 'Dj Katso',
        position: 'Official Deejay',  
        imageUrl: '/team/dj_katso.webp'
    },
    {
        name: 'Dj Ashley',
        position: 'Official Deejay',  
        imageUrl: '/team/dj_ashley_copy.jpg'
    },
    {
      name: 'Dj Wizzy',
      position: 'Official Deejay',  
      imageUrl: '/team/dj_wizzy.webp'
  },
  {
    name: 'Selecta Ryan',
    position: 'Official Deejay',  
    imageUrl: '/team/selecta_ryan.webp'
  },
  {
    name: 'Future MC',
    position: 'Official MC',  
    imageUrl: '/team/future_mc.webp'
},

{
  name: 'Petrie MC',
  position: 'Official MC',  
  imageUrl: '/team/petrie_mc.webp'
},



    // Add more team members as needed
];

const TeamSection = () => {
    return (
        <Container maxW="container.lg" pt={10}>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} padding={5} spacing={8}>
                {teamMembers.map((member, index) => (
                 <Box
                 key={index}
                 w="100%"
                 borderRadius="md"
                 overflow="hidden"
                 boxShadow="lg"
                 position="relative"
               
                
               >
                 {/* Image Wrapper */}
                 <Box position="relative"  overflow="hidden" w="100%" h="300px">
                   <Image
                     src={member.imageUrl}
                     alt={`${member.name}'s photo`}
                     layout='fill'
                     objectFit='cover'
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
