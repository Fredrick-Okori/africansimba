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
import { FiExternalLink } from 'react-icons/fi'

export const StoreBanner = () => (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
            <Box
                width={{ lg: 'sm' }}
                rounded={{base: '10', lg: '10'}}
                transform={{ base: 'translateY(-50%)', lg: 'none' }}
                
                mx={{ base: '6', md: '8', lg: '0' }}
                px={{ base: '6', md: '8', lg: '0' }}
                py={{ base: '6', md: '8', lg: '12' }}
                bg={{base: 'var(--clr-primary-3)', md: 'var(--clr-primary-3)', lg: 'transparent'}}
            >
                <Stack spacing={{ base: '8', lg: '10' }} >
                    <Stack spacing={{ base: '2', lg: '4' }}>
                        <Heading size="xl" color={{base: 'var(--clr-primary-2)', md: 'var(--clr-primary-2)', lg: 'var(--clr-primary-1)'}} fontWeight="bold">
                           Best Brands from us
                        </Heading>
                        <Heading size="md" fontWeight="normal" color='var( --clr-primary-2)'>
                            Refresh your wardrobe
                        </Heading>
                    </Stack>
                    <HStack spacing="3" color='var( --clr-primary-2)'>
                        <Button as={Link} href='/store' _hover={{ textDecoration: 'none', bg: 'var( --clr-primary-1)', color: 'black' }} textDecoration='none' rightIcon={<FiExternalLink />} rounded="full" colorScheme="var( --clr-primary-1)Alpha" variant="outline">
                            View Shop
                        </Button>

                    </HStack>
                </Stack>
            </Box>
            <Flex flex="1" overflow="hidden">
                <Image
                    src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    alt="Lovely Image"
                    fallback={<Skeleton />}
                    rounded={{ base: '0', lg: '10' }}
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
                    src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    alt="Lovely Image"
                    fallback={<Skeleton />}
                    rounded={{base: '0', lg: '10'}}
                    zIndex={-100}
                    maxH="450px"
                    objectFit="cover"
                    _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', border: '1px solid grey' }}
                    transition="all 0.3s"
                />
            </Flex>
        </Stack>
    </Box>
)
