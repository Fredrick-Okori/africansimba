import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Text,
    Stack,
    Button,
    VStack,
} from '@chakra-ui/react'
import { FiChevronRight, FiExternalLink } from 'react-icons/fi'

export const UpcomingEvents = () => (
    <Box 
        maxW="7xl" 
        mx="auto" 
       
        py={{ base: '8', md: '10', lg: '12' }}
    >
        <Text 
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} 
            fontWeight="bold" 
            textAlign={{ base: 'center', md: 'left' }}
            mb={{ base: 6, md: 10 }}
            color="var(--clr-primary-1)"
            px={{ base: 2, md: 0 }}
        >
            Upcoming Event
        </Text>
        
        <Stack 
            direction={{ base: 'column', lg: 'row' }} 
            spacing={{ base: '6', md: '8', lg: '20' }}
            align={{ base: 'center', lg: 'stretch' }}
        >
            {/* Images Section */}
            <Flex 
                flex="1" 
                overflow="hidden"
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 4, sm: 0 }}
                maxW={{ base: '100%', lg: 'none' }}
                w="100%"
            >
                <Image
                    src="/haul/340805-Ibiza-Island.webp"
                    alt="Lovely Image"
                    fallback={<Skeleton />}
                    rounded={{ base: '10', sm: '0' }}
                    roundedLeft={{ sm: '10' }}
                    h={{ base: '200px', sm: '300px', md: '350px', lg: '450px' }}
                    w={{ base: '100%', sm: '50%' }}
                   
                    _hover={{ 
                       
                        boxShadow: 'xl' 
                    }}
                />
                <Image
                    display={{ base: 'none', sm: 'block' }}
                    src="/haul/ibiza.webp"
                    alt="African Simba"
                    fallback={<Skeleton />}
                    roundedRight="10"
                    h={{ sm: '300px', md: '350px', lg: '450px' }}
                    w={{ sm: '50%' }}
                   
                    _hover={{ 
                       
                        boxShadow: 'xl' 
                    }}
                />
            </Flex>

            {/* Content Section */}
            <Box
                w={{ base: '100%', lg: 'sm' }}
                maxW={{ base: '500px', lg: 'sm' }}
                rounded="10"
                px={{ base: '6', md: '8', lg: '0' }}
                py={{ base: '6', md: '8', lg: '12' }}
                bg={{ base: 'var(--clr-primary-3)', lg: 'transparent' }}
            >
                <VStack 
                    spacing={{ base: '6', md: '8', lg: '10' }} 
                    align={{ base: 'center', md: 'flex-start', lg: 'flex-start' }}
                >
                    <Stack 
                        spacing={{ base: '3', lg: '4' }}
                        textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                        w="100%"
                    >
                        <Text 
                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }} 
                            fontWeight="bold" 
                            color="var(--clr-primary-1)" 
                            mb={{ base: 2, md: 3 }}
                        >
                            Ibiza Experience 2025
                        </Text>
                        
                        <Text 
                            fontSize={{ base: 'sm', md: 'md' }}
                            as='p' 
                            fontWeight="normal" 
                            color='var(--clr-primary-1)'
                        >
                            <Text as="span" fontWeight="semibold">Featured Artists:</Text><br/>
                            Lil Stunner, Dj Denzel, Yankee the DJ, DJ Slick Stuart, 
                            Dj Wizzy 256 & Selecta Ryan, Galva DJ, Selecta Jeff
                        </Text>
                        
                        <Text 
                            fontSize={{ base: 'sm', md: 'md' }}
                            as='p' 
                            fontWeight="normal" 
                            color='var(--clr-primary-1)'
                        >
                            <Text as="span" fontWeight="semibold">Date:</Text> 8th November 2025
                        </Text>
                    </Stack>
                    
                    <Box w={{ base: '100%', md: 'auto' }}>
                        <Button 
                            as={Link}
                            size={{ base: 'md', md: 'lg' }}
                            w={{ base: '100%', sm: 'auto' }}
                            _hover={{
                                                    textDecoration: "none",
                                                    bg: "var(--clr-primary-1)",
                                                    color: "black",
                                                }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                rounded="full"
                                                variant="outline"
                                                
                                                padding={2}
                                                color="var(--clr-primary-1)"
                        >
                            Book Now
                            <FiChevronRight style={{ marginLeft: '8px' }} />
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </Stack>
    </Box>
)

export default UpcomingEvents;