import { Container, Text, Box } from '@chakra-ui/react'
import React from 'react'

export default function Cart() {
    return (
        <Container maxW='container.xl'>

            <Box style={{display: 'grid', margin: 'auto'}}>
        <Text >
            You don't have anything in your cart.
        </Text>

            </Box>
            
        </Container>
    )
}