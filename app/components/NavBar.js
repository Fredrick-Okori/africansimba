'use client'
import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    
    Button,
    Container,
    Stack,
    HStack,
   
    IconButton,
   
    Drawer,
    DrawerBody,
    
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Icon,
    VStack,
    
} from '@chakra-ui/react';
import Image from 'next/image';

import { Suspense } from 'react';


import { FiArrowRight, FiMenu, FiActivity, FiMessageCircle, FiUsers, FiShoppingCart, FiHome, FiImage, FiChevronRight } from 'react-icons/fi'

import Link from 'next/link'
import { usePathname } from 'next/navigation';


const NavBar = () => {

    const pathname = usePathname();
    const [selectedMenu, setSelectedMenu] = useState(pathname); // State to keep track of the selected menu

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Suspense>
            <Box
                // Glass-like styling applied here
                bg='rgba(255, 255, 255, 0.05)'
                borderBottom='1px solid rgba(255, 255, 255, 0.1)'
                backdropFilter='blur(20px) saturate(180%)'
                boxShadow='0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                
                position='fixed'
                color="white"
                zIndex={100}
                top={0}
                left={0}
                width='100%'
            >
                <Container maxW='container.xl' px={{ base: 4, md: 8 }} >
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Box display="flex" alignItems="center">
                            <Image width="100" height="100" loading='lazy' quality={70} src="/logos/simba_white.webp" alt="logo" />
                        </Box>

                        <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <Link href="/home" onClose={onClose} fontSize='12px' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/home' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/home')}>
                                    Home
                                </Link>
                                <Link href='/events' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/stream' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/stream')}>
                                    Events
                                </Link>
                            
                                <Link href='/bookings' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/bookings' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/bookings')}>
                                    Tickets
                                </Link>
                                <Link href='/about' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/about' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/about')}>
                                    About
                                </Link>
                                <Link href='/contact-us' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/contact' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/contact')}>
                                    Contact
                                </Link>
                                <Link href='/gallery' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/store' ? '#df42b1' : 'white'} onClick={() => setSelectedMenu('/store')}>
                                    Gallery
                                </Link> 

                              
 <Button 
                                    rounded='full' 
                                    size="sm"
                                    // Liquid effect styling
                                    position="relative"
                                    overflow="hidden"
                                      bg='var(--clr-primary-1)'
                color='black'
                                    sx={{
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%) scale(0)',
                                            width: '10px',
                                            height: '10px',
                                            rounded: 'full',
                                            bg: 'var(--clr-primary-1)',
                                            transition: 'all 0.5s cubic-bezier(0.64, 0.0, 0.35, 1.25)', // Bouncy transition
                                            zIndex: -1,
                                        },
                                        '&:hover::before': {
                                            transform: 'translate(-50%, -50%) scale(25)', // Scale up to cover the button
                                        },
                                    }}
                                    _hover={{ textDecoration: 'none', color: 'black' }} 
                                    textDecoration='none' 
                                    variant='outline' 
                                   
                                >
                                    Tickets <FiChevronRight style={{marginLeft: '8px'}} />
                                </Button>
                            </Stack>
                        </Flex>

                        <IconButton
                            aria-label="Open Menu"
                            icon={<FiMenu />}
                            display={{ base: 'flex', md: 'none' }}
                            onClick={onOpen}
                            bg='rgba(255, 255, 255, 0.1)'
                            border='1px solid rgba(255, 255, 255, 0.2)'
                        />
                    </Flex>
                </Container>

                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent 
                            bg='rgba(255, 255, 255, 0.05)'
                            borderRight='1px solid rgba(255, 255, 255, 0.1)'
                            backdropFilter='blur(20px) saturate(180%)'
                            color="white"
                        >
                            <DrawerCloseButton />
                            <DrawerBody>
                                <MobileNav onClose={onClose} />
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </Suspense>
    );
};



const MobileNav = ({ onClose }) => {
    const pathname = usePathname();

    const handleLinkClick = () => {
        onClose(); // Close the drawer when any link is clicked
    };

    return (
        <Flex
            h="100vh"
            w="250px"
            color="white"
            direction="column"
            justify="start"
            align="center"
            p={5}
            rounded="xl"
            boxShadow="xl"
        >
            <HStack spacing={2}>
                <Image src='/logos/simba_white.webp' width="100" height="70" alt='Logo' />
                <Text fontWeight='bold' size='lg' fontFamily='heading' >African Simba Events</Text>
            </HStack>
            <VStack align="flex-start" spacing={6} pt={10} w="100%">
                <Link href="/home" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiHome} boxSize={5} mr={3} />
                        <Text>Home</Text>
                    </Flex>
                </Link>

                <Link href="/events" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiActivity} boxSize={5} mr={3} />
                        <Text>Events</Text>
                    </Flex>
                </Link>
                <Link href="/bookings" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiChevronRight} boxSize={5} mr={3} />
                        <Text>Tickets</Text>
                    </Flex>
                </Link>
                <Link href="/about" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiUsers} boxSize={5} mr={3} />
                        <Text>About Us</Text>
                    </Flex>
                </Link>
                <Link href="/contact-us" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiMessageCircle} boxSize={5} mr={3} />
                        <Text>Contact Us</Text>
                    </Flex>
                </Link>

                <Link href="/gallery" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                    <Flex align="center">
                        <Icon as={FiImage} boxSize={5} mr={3} />
                        <Text>Gallery</Text>
                    </Flex>
                </Link>

                {pathname === '/store' && (
                    <Link href="/cart" _hover={{ color: "purple.200" }} w="100%" onClick={handleLinkClick}>
                        <Flex align="center">
                            <Icon as={FiShoppingCart} boxSize={5} mr={3} />
                            <Text>Cart</Text>
                        </Flex>
                    </Link>
                )}
            </VStack>
        </Flex>
    );
};

export default NavBar;