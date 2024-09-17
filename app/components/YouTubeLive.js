"use client";
import React, { useState } from 'react';
import { Box,  Container, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { FiPlay, FiPause, FiX } from 'react-icons/fi';
import Link from 'next/link';

const FloatingVideoSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Box
            position="fixed"
            bottom="0"
            as={Link}
            href='/stream'
            right={2}
            width={{ base: "full", md: "400px" }}
            p={4}
            bgImage="url('/images/thrones.jpg')"  // Add your video poster image path here
            bgSize="cover"
            bgPosition="center"
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="0 -2px 10px rgba(0, 0, 0, 0.5)"
            borderRadius="md"
           
        >
            <IconButton
                aria-label="Close"
                icon={<FiX />}
                position="absolute"
                top='0'
                right='0'
                variant="outline"
                colorScheme="pink.500"
                onClick={handleClose}
            />
            <Container maxW="container.sm" textAlign="center">
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    mt="10"  // Add margin top to prevent overlap with close button
                >
                    
                </Flex>
            </Container>
        </Box>
    );
};

export default FloatingVideoSection;
