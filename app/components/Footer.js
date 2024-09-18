import { Box, Flex, Divider, AbsoluteCenter, Text, Link, Image, Container, VStack, SimpleGrid } from '@chakra-ui/react';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box color="white" py={20}>
            <Container maxW="container.xl">
                <Box position='relative' my={25}>
                    <Divider />
                    <AbsoluteCenter bg='white' backgroundBlendMode='soft-light' px='2' rounded={10}>
                       
                        <Flex p={2} alignItems='center'>
                            <Image src="/images/logo.webp" mr={3} maxW="18" alt="logo" mb={{ base: 6, lg: 0 }} />
                            <Divider orientation='horizontal' color='black'/>
                            <Link href="#" mr={2} isExternal>
                                <FiYoutube color='var( --clr-primary-2)' fontSize={{base: 20, lg: 30}} />
                            </Link>
                          
                            <Link href="#" mr={2} isExternal>
                                <FiFacebook color='var( --clr-primary-2)' fontSize={{base: 20, lg: 30}} />
                            </Link>
                            <Link href="#" mr={2} isExternal>
                                <FiTwitter color='var( --clr-primary-2)' fontSize={{base: 20, lg: 30}} />
                            </Link>
                            <Link href="#" mr={2} isExternal>
                                <FiInstagram color='var( --clr-primary-2)' fontSize={{base: 20, lg: 30}} />
                            </Link>
                        </Flex>
                    </AbsoluteCenter>
                </Box>
               
               
                <SimpleGrid minChildWidth='100%' align="center"  display={{base: 'none', lg: 'contents'}} >
                    <Flex wrap="wrap" justify="space-around" w="full" my={20}>
                        <Box textAlign='start'  align="start" spacing={3} mb={{ base: 4, lg: 2 }}>
                            <Text fontWeight="bold">Useful Links</Text>
                            <Text><Link href="#">Festival</Link></Text> 
                            <Text> <Link href="/stream">Music</Link></Text>
                            <Text>
                                <Link href="/bookings">Tickets</Link>
                            </Text> 
                            <Link href="/store">Store</Link>
                        </Box>
                       <Box textAlign='start'  align="start" spacing={3} mb={{ base: 4, lg: 2 }}>
                            <Text fontWeight="bold">Useful Links</Text>
                            <Text><Link href="#">Festival</Link></Text> 
                            <Text> <Link href="/stream">Music</Link></Text>
                            <Text>
                                <Link href="/bookings">Tickets</Link>
                            </Text> 
                            <Link href="/store">Store</Link>
                        </Box>
                       <Box textAlign='start'  align="start" spacing={3} mb={{ base: 4, lg: 2 }}>
                            <Text fontWeight="bold">Useful Links</Text>
                            <Text><Link href="#">Festival</Link></Text> 
                            <Text> <Link href="/stream">Music</Link></Text>
                            <Text>
                                <Link href="/bookings">Tickets</Link>
                            </Text> 
                            <Link href="/store">Store</Link>
                        </Box>
                       <Box textAlign='start'  align="start" spacing={3} mb={{ base: 4, lg: 2 }}>
                            <Text fontWeight="bold">Useful Links</Text>
                            <Text><Link href="#">Festival</Link></Text> 
                            <Text> <Link href="/stream">Music</Link></Text>
                            <Text>
                                <Link href="/bookings">Tickets</Link>
                            </Text> 
                            <Link href="/store">Store</Link>
                        </Box>
                       
                    </Flex>

                </SimpleGrid>
                    <Flex direction={{ base: 'column', lg: 'row' }} justifyContent="space-evenly" mt={{base: '20', lg: 'auto'}} align="center" w="full" gap={5}>
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
    );
};

export default Footer;
