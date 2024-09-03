import React from 'react'

import { Box, Container, Flex, Text, GridItem, SimpleGrid } from '@chakra-ui/react'


const count = [
    {
        count: "01",
        label: "Months",

    },
    {
        count: "23",
        label: "Days",
    },
    {
        count: "12",
        label: "Hours",
    },
    {
        count: "05",
        label: "Minutes",
    },
    {
        count: "01",
        label: "Seconds",
    }
]
export default function Counter() {
    return (
        <>
            <Container maxW='container.xl'>
                <Flex justify='space-between' color='white' align='center' direction='row'>


                    <Box >
                        <Text color="white" fontSize='14' mb={3}> CONFERENCE DATE</Text>
                        <Text>COUNT EVERY SECOND UNTIL THE EVENT</Text>
                    </Box>
                    <Box>
                        <SimpleGrid columns={[5,2]}  gap={{ base: 3, lg: 5 }} alignContent='center' mb={10}>
                            {count.map((item, index) => (
                                <GridItem key={index}
                                    border={{
                                        base: '1px solid grey', lg: "2px solid grey"
                                    }}
                                    p={5}
                                 
                                    textAlign='center'
                                    lineHeight='1'
                                    rounded={{ base: 5, lg: 10 }}
                                >
                                    <Text fontSize={{ base: 20, lg: 62 }} fontWeight='bolder'>
                                        {item.count}
                                    </Text>
                                    <Text textColor='#6c757d' p={1} fontWeight='bold'>{item.label}</Text>
                                </GridItem>
                            ))}
                        </SimpleGrid>

                    </Box>
                </Flex>
            </Container>
        </>
    )
}