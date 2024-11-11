import React from 'react'

import { Container, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function EventsHero() {
    return (

        <Container maxW='container.xl' position="relative" mt={20} pt={10} pb={10}>
            <Text fontWeight='bold' fontSize={{ base: '3xl', lg: '5xl' }} color='var( --clr-primary-1)' textAlign='left'>
                Weekly African Simba Party
            </Text>
            <Text color='var( --clr-primary-1)' textAlign='left'>
                Experience Immersive party that happens every week in Kampala, Uganda
            </Text>
            <Box mt={10} position="relative">
                <Image                  
                    quality={60}
                  style={{borderRadius: '10px'}}
                    loading='lazy'
                    width={1300}
                    height={600}
                    objectFit='cover'
                    rounded={10}
                    src="/compressed/events_hero.jpg"
                    alt='Events hero image'                  
                />
            </Box>
        </Container>

    )
}