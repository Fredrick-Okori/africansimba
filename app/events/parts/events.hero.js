'use client'
import React, { useState } from 'react';
import { Container, Box, Text, Button, ButtonGroup } from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';



export default function EventsHero() {
    const [showImage, setShowImage] = useState(true);

    return (
        <Container maxW="container.xl" position="relative" mt={20} pt={10} pb={10}>
            <Text fontWeight="bold" fontSize={{ base: '3xl', lg: '5xl' }} color="var(--clr-primary-1)" textAlign="left">
                Our Weekly Events
            </Text>
            <Text color="var(--clr-primary-1)" textAlign="left">
                Experience an immersive party that happens every week in Kampala, Uganda
            </Text>

            <ButtonGroup mt={4} spacing={4}>
               
                <Button

                    rightIcon={<FiExternalLink />}
                    rounded="full"
                    colorScheme="whiteAlpha"
                 
                    _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }}
                    size='md'
                    onClick={() => setShowImage(false)}
                    variant={!showImage ? 'outline' : 'outline'}
                >
                    View Video
                </Button>
               
            </ButtonGroup>

            <Box mt={10} position="relative">
              
                    <Image
                        quality={100}
                        style={{ borderRadius: '10px' }}
                        loading="lazy"
                        width={1300}
                        height={400}
                        objectFit="cover"
                        src="/updates/nights_lineup.webp"
                        alt="Events hero image"
                    />
                               
            </Box>
        </Container>
    );
}
