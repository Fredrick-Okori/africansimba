"use client"
import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Container,
    Stack,
    Avatar,
HStack,
    useColorModeValue,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Icon,
    VStack,
    textDecoration,
} from '@chakra-ui/react';

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
                <Flex padding={5} alignItems={'center'} justifyContent={'space-between'}>
                    <Box   display="flex" alignItems="center">
                        <Image width="70px" src="/logos/simba_white.png" alt="logo" />
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="/home" _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/home' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/home')}>
                                Home
                            </Link>
                            {/* <Menu>
                                <MenuButton _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                    Pages
                                </MenuButton>
                                <MenuList bg="var( --clr-primary-1)" borderColor="gray.700">
                                    <MenuItem to="/page1" _hover={{ bg: 'gray.700' }}>Page 1</MenuItem>
                                    <MenuItem to="/page2" _hover={{ bg: 'gray.700' }}>Page 2</MenuItem>
                                </MenuList>
                            </Menu> */}
                            <Link href='/stream' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/stream' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/stream')}>
                            Live 
                            </Link>
                            <Link href='/store' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/store' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/store')}>
                                Shop
                            </Link>

                            <Link href='/bookings' _hover={{textDecoration: 'none', color: '#df42b1'}} color={selectedMenu === '/bookings' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/bookings')}>
                            Bookings
                            </Link>
                            {/* <Link href='/saloon' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/saloon' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/saloon')}>
                            Saloon
                            </Link> */}

                            <Link href='/about' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/about' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/about')}>
                                About Us
                            </Link>
                            <Link href='/contact' _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/contact' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/contact')}>
                                Contact Us
                            </Link>

                            {pathname === '/store' && (
                                <Link href="/cart" _hover={{ textDecoration: 'none', color: '#df42b1' }} color={selectedMenu === '/cart' ? '#df42b1' : 'var( --clr-primary-1)'} onClick={() => setSelectedMenu('/cart')} >                           
                                    Cart                                                                   
                                </Link>
                            )}
                            <Button rounded='full' size="sm"  _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }} textDecoration='none' variant='outline' colorScheme="whiteAlpha">Tickets <FiArrowRight /></Button>
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
            <HStack spacing={4}>
                <Avatar size="md" src="/images/logo2.jpg" />
                <Text >African Simba Events</Text>
            </HStack>



            {/* Navigation Links */}
            <VStack align="flex-start" spacing={6} pt={10} w="100%">
                <Link href="/home" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiHome} boxSize={5} mr={3} />
                        <Text>Home</Text>
                    </Flex>
                </Link>

                <Link href="/stream" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiActivity} boxSize={5} mr={3} />
                        <Text>Live</Text>
                    </Flex>
                </Link>

                <Link href="/store" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiShoppingCart} boxSize={5} mr={3} />
                        <Text>Shop</Text>
                    </Flex>
                </Link>

                <Link href="/bookings" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiArrowRight} boxSize={5} mr={3} />
                        <Text>Bookings</Text>
                    </Flex>
                </Link>

                <Link href="/about" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiUsers} boxSize={5} mr={3} />
                        <Text>About Us</Text>
                    </Flex>
                </Link>
                <Link href="/contact" _hover={{ color: "purple.200" }} w="100%">
                    <Flex align="center">
                        <Icon as={FiMessageCircle} boxSize={5} mr={3} />
                        <Text>Contact Us</Text>
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


