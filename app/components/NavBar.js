'use client';
import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Container,
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
import {
    FiMenu,
    FiActivity,
    FiMessageCircle,
    FiUsers,
    FiShoppingCart,
    FiHome,
    FiImage,
    FiChevronRight,
    FiCalendar,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/bookings', label: 'Tickets' },
    { href: '/about', label: 'About' },
    { href: '/contact-us', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
];

const mobileNavLinks = [
    { href: '/home', label: 'Home', icon: FiHome },
    { href: '/events', label: 'Events', icon: FiActivity },
    { href: '/bookings', label: 'Tickets', icon: FiCalendar },
    { href: '/about', label: 'About Us', icon: FiUsers },
    { href: '/contact-us', label: 'Contact Us', icon: FiMessageCircle },
    { href: '/gallery', label: 'Gallery', icon: FiImage },
];

const NavBar = () => {
    const pathname = usePathname();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Suspense>
            <Box
                position="fixed"
                top={0}
                left={0}
                width="100%"
                zIndex={100}
                bg={scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.2)'}
                backdropFilter={scrolled ? 'blur(20px) saturate(180%)' : 'blur(10px)'}
                borderBottom="1px solid"
                borderColor={scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}
                transition="all 0.4s ease"
                py={scrolled ? 0 : 1}
            >
                <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
                    <Flex alignItems="center" justifyContent="space-between" h={{ base: '60px', md: '70px' }}>
                        {/* Logo */}
                        <Box
                            as={Link}
                            href="/home"
                            display="flex"
                            alignItems="center"
                            _hover={{ opacity: 0.8 }}
                            transition="opacity 0.2s"
                        >
                            <Image
                                width={80}
                                height={80}
                                loading="lazy"
                                quality={70}
                                src="/logos/simba_white.webp"
                                alt="African Simba Events Logo"
                            />
                        </Box>

                        {/* Desktop Nav Links */}
                        <HStack
                            display={{ base: 'none', md: 'flex' }}
                            spacing={1}
                            bg="rgba(255,255,255,0.04)"
                            borderRadius="full"
                            border="1px solid rgba(255,255,255,0.06)"
                            px={3}
                            py={3}
                        >
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Box
                                        key={link.href}
                                        as={Link}
                                        href={link.href}
                                        px={4}
                                        py={2}
                                        borderRadius="full"
                                        fontSize="xs"
                                        fontWeight="bold"
                                        textTransform="uppercase"
                                        letterSpacing="0.05em"
                                        color={isActive ? 'var(--clr-primary-3)' : 'rgba(255,255,255,0.7)'}
                                        bg={isActive ? 'rgba(239,178,9,0.1)' : 'transparent'}
                                        transition="all 0.3s ease"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: 'var(--clr-primary-3)',
                                            bg: 'rgba(239,178,9,0.08)',
                                        }}
                                    >
                                        {link.label}
                                    </Box>
                                );
                            })}
                        </HStack>

                        {/* Desktop CTA */}
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Button
                                as={Link}
                                href="/bookings"
                                size="sm"
                                rounded="full"
                                bg="var(--clr-primary-3)"
                                color="black"
                                fontWeight="bold"
                                fontSize="xs"
                                px={5}
                                transition="all 0.3s ease"
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'var(--clr-primary-5)',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 15px -3px rgba(239,178,9,0.4)',
                                }}
                                _active={{ transform: 'translateY(0)' }}
                            >
                                Tickets
                                <FiChevronRight style={{ marginLeft: '4px' }} />
                            </Button>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label="Open Menu"
                            icon={<FiMenu size={20} />}
                            display={{ base: 'flex', md: 'none' }}
                            onClick={onOpen}
                            variant="ghost"
                            color="white"
                            size="md"
                            borderRadius="xl"
                            bg="rgba(255,255,255,0.06)"
                            border="1px solid rgba(255,255,255,0.08)"
                            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                        />
                    </Flex>
                </Container>

                {/* Mobile Drawer */}
                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                    <DrawerOverlay bg="rgba(0,0,0,0.6)" backdropFilter="blur(10px)" />
                    <DrawerContent
                        bg="rgba(10,10,10,0.98)"
                        backdropFilter="blur(20px)"
                        borderLeft="1px solid rgba(255,255,255,0.08)"
                    >
                        <DrawerCloseButton
                            color="white"
                            size="lg"
                            m={2}
                            borderRadius="full"
                            bg="rgba(255,255,255,0.06)"
                            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                        />
                        <DrawerBody pt={20} px={6}>
                            <MobileNav onClose={onClose} pathname={pathname} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Suspense>
    );
};

const MobileNav = ({ onClose, pathname }) => {
    return (
        <VStack align="stretch" spacing={0} w="100%">
            {/* Logo */}
            <HStack spacing={3} mb={10}>
                <Image src="/logos/simba_white.webp" width={60} height={60} alt="Logo" />
                <Box>
                    <Text fontWeight="bold" fontSize="sm" color="var(--clr-primary-1)">
                        African Simba
                    </Text>
                    <Text fontSize="2xs" color="rgba(255,255,255,0.4)">
                        Events
                    </Text>
                </Box>
            </HStack>

            {/* Links */}
            <VStack align="stretch" spacing={1}>
                {mobileNavLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Box
                            key={link.href}
                            as={Link}
                            href={link.href}
                            onClick={onClose}
                            display="flex"
                            alignItems="center"
                            gap={3}
                            px={4}
                            py={3.5}
                            borderRadius="xl"
                            bg={isActive ? 'rgba(239,178,9,0.1)' : 'transparent'}
                            transition="all 0.2s ease"
                            _hover={{
                                textDecoration: 'none',
                                bg: 'rgba(255,255,255,0.05)',
                            }}
                        >
                            <Flex
                                w="36px"
                                h="36px"
                                borderRadius="lg"
                                bg={isActive ? 'rgba(239,178,9,0.15)' : 'rgba(255,255,255,0.04)'}
                                align="center"
                                justify="center"
                                flexShrink={0}
                            >
                                <Icon
                                    as={link.icon}
                                    boxSize={4}
                                    color={isActive ? 'var(--clr-primary-3)' : 'rgba(255,255,255,0.5)'}
                                />
                            </Flex>
                            <Text
                                fontSize="sm"
                                fontWeight={isActive ? 'bold' : 'medium'}
                                color={isActive ? 'var(--clr-primary-3)' : 'rgba(255,255,255,0.8)'}
                                textTransform="uppercase"
                                letterSpacing="0.05em"
                            >
                                {link.label}
                            </Text>
                        </Box>
                    );
                })}

                {pathname === '/store' && (
                    <Box
                        as={Link}
                        href="/cart"
                        onClick={onClose}
                        display="flex"
                        alignItems="center"
                        gap={3}
                        px={4}
                        py={3.5}
                        borderRadius="xl"
                        _hover={{
                            textDecoration: 'none',
                            bg: 'rgba(255,255,255,0.05)',
                        }}
                    >
                        <Flex
                            w="36px"
                            h="36px"
                            borderRadius="lg"
                            bg="rgba(255,255,255,0.04)"
                            align="center"
                            justify="center"
                        >
                            <Icon as={FiShoppingCart} boxSize={4} color="rgba(255,255,255,0.5)" />
                        </Flex>
                        <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color="rgba(255,255,255,0.8)"
                            textTransform="uppercase"
                            letterSpacing="0.05em"
                        >
                            Cart
                        </Text>
                    </Box>
                )}
            </VStack>

            {/* Mobile CTA */}
            <Box mt={8}>
                <Button
                    as={Link}
                    href="/bookings"
                    onClick={onClose}
                    w="100%"
                    bg="var(--clr-primary-3)"
                    color="black"
                    rounded="xl"
                    size="lg"
                    py={7}
                    fontWeight="bold"
                    fontSize="sm"
                    _hover={{
                        textDecoration: 'none',
                        bg: 'var(--clr-primary-5)',
                    }}
                >
                    Get Tickets
                    <FiChevronRight style={{ marginLeft: '6px' }} />
                </Button>
            </Box>
        </VStack>
    );
};

export default NavBar;
