'use client'
import { Container, Text, Image, Box, Flex, Button, VStack, SimpleGrid, HStack, Icon } from '@chakra-ui/react';
import { FaCalendar, FaShoppingBag, FaVideo } from 'react-icons/fa';

const FeatureSection = () => {
    return (
        <Container maxW='container.xl' position="relative" mt={{ base: '0', lg: '0' }} >
            <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between" bottom={0} left={0} w='100%' h='100%' bg=' var(--clr-primary-3)' rounded='xl'>
                <Box>

                    <Text fontSize={{ base: 'xl', lg: '2xl' }} lineHeight={1.1} p={5} color='var(--clr-primary-2)'>
                      Find and book your perfect stay
                    </Text>
                </Box>
                
                <Box w={{ base: '100%', lg: '100%' }} mt={{ base: 10, lg: 0 }} position="relative">
                    <Box position="relative"  >
                        <Flex p={5} gap={5}>
                           
                            <Box >
                                <SimpleGrid columns={{ base: 1, md: 3 }} display={{ base: 'none', md: 'flex' }} spacing={10} overflowX="auto">
                                    <Box bg='var(--clr-primary-4)' rounded='xl'>
                                        <Text p={17}>
                                            <Icon as={FaShoppingBag} size={25} mr={2} /> Earn rewards on every night you stay
                                        </Text>
                                    </Box>
                                    <Box bg='var(--clr-primary-4)' rounded='xl'>
                                        <Text p={17}>
                                            <Icon as={FaVideo} size={25} mr={2} /> Earn rewards on every night you stay
                                        </Text>
                                    </Box>
                                    <Box bg='var(--clr-primary-4)' rounded='xl'>
                                        <Text p={17}>
                                            <Icon as={FaCalendar} size={25}  mr={2} /> Earn rewards on every night you stay
                                        </Text>
                                    </Box>
                                </SimpleGrid>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            
        </Container>
    );
};

export default FeatureSection;

