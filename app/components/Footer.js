import { Box, Flex, Text, Link, Image, Container, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaFileVideo } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <Box  color="white" py={10}>
            <Container maxW='container.xl'>

            <Flex direction="column" align="center">
                    <Image src="/images/logo.webp" rounded='full' width='20' alt="logo"/>
                    
                <HStack spacing={6} mb={8}>
                    <Link href="#" isExternal>
                       <FiYoutube fontWeight='normal' fontSize={30}/>
                    </Link>
                  
                    <Link href="#" isExternal>
                            <FiFacebook fontWeight='normal' fontSize={30} />
                    </Link>
                    <Link href="#" isExternal>
                            <FiTwitter fontWeight='normal' fontSize={30} />
                    </Link>
                    <Link href="#" isExternal>
                            <FiInstagram fontWeight='normal' fontSize={30} />
                    </Link>
                </HStack>
                <Flex wrap="wrap" justify="space-around" w="full">
                    <VStack align="start" spacing={2}>
                       
                        <Link href="#">Festival</Link>
                        <Link href="#">Practical</Link>
                        <Link href="#">Tickets</Link>
                        <Link href="#">My Bracelet</Link>
                        <Link href="#">Add-On Sale</Link>
                        <Link href="#">Line-up</Link>
                    </VStack>
                   
                   
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="bold">TOMORROWLAND PRESENTS</Text>
                        <Link href="#">CORE</Link>
                        <Link href="#">Terra Solis</Link>
                        <Link href="#">The Great Library of Tomorrow</Link>
                    </VStack>
                   
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="bold">TOMORROWLAND STORE</Text>
                        <Link href="#">Store</Link>
                        <Link href="#">Solo Vida</Link>
                    </VStack>
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="bold">TOMORROWLAND MUSIC</Text>
                        <Link href="#">About</Link>
                        <Link href="#">Releases</Link>
                    </VStack>
                    
                </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
