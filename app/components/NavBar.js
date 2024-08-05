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
    VStack,
    textDecoration,
} from '@chakra-ui/react';



import { FiArrowRight, FiMenu, FiShoppingCart } from 'react-icons/fi'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { color } from 'framer-motion';





const NavBar = () => {

    const pathname = usePathname();


    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg='hsla(0, 0%, 0%, 0.7)'  // Adjusted background for frosted glass effect
            backgroundBlendMode='soft-light'
            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
            position='fixed'
            px={3}
            color="white"
            zIndex={100}
            top={0}
            left={0}
            width='100%'
        >
            <Container maxW='container.xl'>
                <Flex padding={5} alignItems={'center'} justifyContent={'space-between'}>
                    <Box fontWeight="bold" fontSize="lg" display="flex" alignItems="center">
                        <Image maxW={50} rounded={50} src="/images/logo2.jpg" alt="logo" />
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="/" _hover={{ textDecoration: 'none', color: '#df42b1' }} color="#df42b1">
                                Home
                            </Link>
                            {/* <Menu>
                                <MenuButton _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                    Pages
                                </MenuButton>
                                <MenuList bg="white" borderColor="gray.700">
                                    <MenuItem to="/page1" _hover={{ bg: 'gray.700' }}>Page 1</MenuItem>
                                    <MenuItem to="/page2" _hover={{ bg: 'gray.700' }}>Page 2</MenuItem>
                                </MenuList>
                            </Menu> */}
                            <Link href='/store' _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Shop
                            </Link>
                            <Link href='/bookings' _hover={{textDecoration: 'none', color: '#df42b1'}} >
                            Bookings
                            </Link>
                            <Link href="/blog" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Blog
                            </Link>
                            {pathname === '/store' && (
                                <Link href="/cart" _hover={{ textDecoration: 'none', color: '#df42b1' }} >                           
                                    Cart                                                                   
                                </Link>
                            )}
                            <Button rounded='full' size="sm" variant='outline' colorScheme="whiteAlpha">Tickets <FiArrowRight /></Button>
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
                    <DrawerContent bg={useColorModeValue('black', 'gray.800')} color="white">
                        <DrawerCloseButton />

                        <DrawerBody>
                            <MobileNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Stack p={4}>
            <Link href="/" _hover={{ textDecoration: 'none', color: '#df42b1' }} color="#df42b1">
                Home
            </Link>
            <Link href='/store' _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                Shop
            </Link>
            <Link href='/booking' _hover={{ textDecoration: 'none', color: '#df42b1' }} >
                Bookings
            </Link>
            <Link href="/blog" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                Blog
            </Link>
            {pathname === '/store' && (
                <Link href="/cart" _hover={{ textDecoration: 'none', color: '#df42b1' }} >
                    Cart
                </Link>
            )}

            <Button
                to="/tickets"
                rounded={'full'}
                bgGradient="linear(to-r, purple.500, #df42b1)"
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-r, purple.500, pink.700)',
                    boxShadow: 'xl',
                }}
                py={25}
            >
                GET TICKETS &rarr;
            </Button>
        </Stack>
    );
};

export default NavBar;
