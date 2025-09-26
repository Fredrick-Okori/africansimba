import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    Button,
} from '@chakra-ui/react'
import { FiChevronRight, FiExternalLink } from 'react-icons/fi'

export const UpcomingEvents = () => (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
            <Box
                width={{ lg: 'sm' }}
                rounded={{ base: '10', lg: '10' }}
                transform={{ base: 'translateY(-50%)', lg: 'none' }}

                mx={{ base: '6', md: '8', lg: '0' }}
                px={{ base: '6', md: '8', lg: '0' }}
                py={{ base: '6', md: '8', lg: '12' }}
                bg={{ base: 'var(--clr-primary-3)', md: 'var(--clr-primary-3)', lg: 'transparent' }}
            >
                <Stack spacing={{ base: '8', lg: '10' }} >
                    <Stack spacing={{ base: '2', lg: '4' }}>
                        <Text size="xl" as='h1' color={{ base: 'var(--clr-primary-2)', md: 'var(--clr-primary-2)', lg: 'var(--clr-primary-1)' }} fontWeight="bold">
                            No Simba. No Party
                        </Text>
                        <Text size="md" as='p' fontWeight="normal" color='var( --clr-primary-1)'>
                            Unforgettable experience at Paradigm
                        </Text>
                    </Stack>
                    <HStack spacing="3" color='var( --clr-primary-1)'>
                        <Button as={Link} size='lg' href='/events' _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }} textDecoration='none' rightIcon={<FiChevronRight style={{marginLeft: '8px'}} />} rounded="full" colorScheme="var( --clr-primary-1)Alpha" variant="outline">
                            View Events
                        </Button>

                    </HStack>
                </Stack>
            </Box>
            <Flex flex="1" overflow="hidden">
                <Image
                    src="/haul/nosimba.webp"
                    alt="Lovely Image"
                    fallback={<Skeleton />}
                    roundedRight='0'
                    roundedLeft='10'
                    maxH="450px"
                    minW="300px"
                    objectFit="cover"
                    transition="all 0.3s"
                    zIndex={-100}
                    flex="1"
                    _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', border: '1px solid grey' }}
                />
                <Image
                    display={{ base: 'none', sm: 'initial' }}
                    src="/haul/simba.webp"
                    alt="African Simba"
                    fallback={<Skeleton />}
                    roundedRight='10'
                    roundedLeft='0'
                    maxH="450px"
                    minW="300px"
                    objectFit="cover"
                    transition="all 0.3s"
                    zIndex={-100}


                    _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', border: '1px solid grey' }}

                />
            </Flex>
        </Stack>
    </Box>
)
