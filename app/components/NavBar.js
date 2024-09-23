"use client"
import React from 'react';
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Container,
    Stack,

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


import { FiArrowRight, FiMenu, FiShoppingCart, FiHome, FiVideo, FiShoppingBag, FiCalendar } from 'react-icons/fi'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { color } from 'framer-motion';

import { products } from '../store/parts/data';





const NavBar = () => {

    const pathname = usePathname();


    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Suspense>
        <Box
           
            backgroundBlendMode='soft-light'
            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
            position='fixed'
            px={3}
            color="var( --clr-primary-1)"
            zIndex={100}
            top={0}
            left={0}
            width='100%'
            backdropFilter='blur(10px) brightness(50%)'  // Added background filter for a blurred background effect with 60% brightness
        >
            <Container maxW='container.xl'>
                <Flex padding={5} alignItems={'center'} justifyContent={'space-between'}>
                    <Box fontWeight="bold" fontSize="lg" display="flex" alignItems="center">
                        <Image maxW={50} rounded={50} src="/images/logo2.jpg" alt="logo" />
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="/home" _hover={{ textDecoration: 'none', color: '#df42b1' }} color="#df42b1">
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
                            <Link href='/stream' _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                            Live 
                            </Link>
                            <Link href='/store' _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Shop
                            </Link>

                            <Link href='/bookings' _hover={{textDecoration: 'none', color: '#df42b1'}} >
                            Bookings
                            </Link>
                            <Link href='/saloon' _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                            Saloon
                            </Link>

                          
                            {pathname === '/store' && (
                                <Link href="/cart" _hover={{ textDecoration: 'none', color: '#df42b1' }} >                           
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

            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='hsla(0, 0%, 0%, 0.7)'
                        backdropFilter='blur(10px) brightness(50%)' 
                        backgroundBlendMode='soft-light' color="white">
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
        <Flex p={4} justifyContent="space-between" alignItems="center" placeContent='center' gap={5}>
            <Link href="/" _hover={{ color: '#df42b1' }} alignItems='center' color="#df42b1" onClick={onClose}>
                <Icon as={FiHome} boxSize={5} /> Home
            </Link>
            <Link href='/stream' _hover={{ color: '#df42b1' }} onClick={onClose}>
                <Icon as={FiVideo} boxSize={5} /> Live
            </Link>
            <Link href='/store' _hover={{ color: '#df42b1' }} onClick={onClose}>
                <Icon as={FiShoppingBag} boxSize={5} /> Shopping
            </Link>
            <Link href='/bookings' _hover={{ color: '#df42b1' }} onClick={onClose}>
                <Icon as={FiCalendar} boxSize={5} /> Bookings
            </Link>

            {pathname === '/store' && (
                <Link href="/cart" _hover={{ color: '#df42b1' }} onClick={onClose}>
                    <Icon as={FiShoppingCart} boxSize={5} /> Cart
                </Link>
            )}

            
            </Flex>
        
    );
    
};

export default NavBar;
