"use client"
import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    
    Button,
    Container,
    Stack,
    Avatar,
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


import { FiArrowRight, FiMenu, FiActivity, FiBarChart2, FiMessageCircle, FiTrendingUp, FiImage, FiSettings, FiBell, FiUsers, FiShoppingCart, FiHome } from 'react-icons/fi'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { color } from 'framer-motion';

import { products } from '../store/parts/data';





const NavBar = () => {

    const pathname = usePathname();
    const [selectedMenu, setSelectedMenu] = useState(pathname); // State to keep track of the selected menu

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Suspense>
            <Box

                backgroundBlendMode='soft-light'
                boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
                position='fixed'

                color="var( --clr-primary-1)"
                zIndex={100}
                top={0}
                left={0}
                width='100%'
                backdropFilter='blur(10px) brightness(50%)'  // Added background filter for a blurred background effect with 60% brightness
            >
                <Container maxW='container.xl'>
                    <Flex  alignItems={'center'} justifyContent={'space-between'}>
                        <Box display="flex" alignItems="center">
                            <Image width="100" height="100" loading='lazy' quality={70} src="/logos/simba_white.webp" alt="logo" />
                        </Box>

                        <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <Link href="/home" onClose={onClose} fontSize='12px' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/home' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/home')}>
                                    Home
                                </Link>
                                <Link href='/events' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/stream' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/stream')}>
                                    Events
                                </Link>
                            
                                <Link href='/bookings' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/bookings' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/bookings')}>
                                    Tickets
                                </Link>
                                {/* <Link href='/saloon' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/saloon' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/saloon')}>
                            Saloon
                            </Link>
                                <Link href='/store' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/store' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/store')}>
                                    Profile
                                </Link> */}
                                    <Link href='/about' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/about' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/about')}>
                                    About
                                </Link>
                                <Link href='/contact-us' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/contact' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/contact')}>
                                    Contact
                                </Link>
                                <Link href='/store' onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/store' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/store')}>
                                    Shop
                                </Link>

                                {pathname === '/store' && (
                                    <Link href="/cart" onClose={onClose} _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/cart' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/cart')} >
                                        Cart
                                    </Link>
                                )}
                                <Button rounded='full' size="sm" _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }} textDecoration='none' variant='outline' colorScheme="whiteAlpha">Tickets <FiArrowRight /></Button>
                            </Stack>
                        </Flex>

                        <IconButton
                            aria-label="Open Menu"
                            icon={<FiMenu />}
                            display={{ base: 'flex', md: 'none' }}
                            onClick={onOpen}
                        />
                    </Flex>
                </Container>

                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent bg='hsla(0, 0%, 0%, 0.7)'

                            backgroundBlendMode='soft-light' color="white"
                            backdropFilter='blur(10px) brightness(60%)'
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
                <Link href="/home" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiHome} boxSize={5} mr={3} />
                        <Text>Home</Text>
                    </Flex>
                </Link>

                <Link href="/events" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiActivity} boxSize={5} mr={3} />
                        <Text>Events</Text>
                    </Flex>
                </Link>
                <Link href="/bookings" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiArrowRight} boxSize={5} mr={3} />
                        <Text>Tickets</Text>
                    </Flex>
                </Link>
                <Link href="/about" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiUsers} boxSize={5} mr={3} />
                        <Text>About Us</Text>
                    </Flex>
                </Link>
                <Link href="/contact-us" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiMessageCircle} boxSize={5} mr={3} />
                        <Text>Contact Us</Text>
                    </Flex>
                </Link>

                <Link href="/store" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiShoppingCart} boxSize={5} mr={3} />
                        <Text>Shop</Text>
                    </Flex>
                </Link>

                {pathname === '/store' && (
                    <Link href="/cart" _hover={{ color: "purple.200" }} w="100%">
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

