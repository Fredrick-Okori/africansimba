'use client';

import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  Container,
  VStack,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail, MdFacebook } from 'react-icons/md';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      {/* Background Image */}
      <Box position="relative" w="100%" h="50px" overflow="hidden">
                <Image
                    src="/compressed/print_patterns.avif"
                    alt="African Simba Print Patterns"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                />
            </Box>
    <Box py={10}>
      <Container maxW="container.xl" px={6}>
        <Heading as="h1" size="xl" textAlign="center" mb={10} color="var(--clr-primary-3">
          Contact Us
        </Heading>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={10}
          justify="space-between"
          align="start"
        >
          {/* Contact Details */}
          <VStack
            
           
           
            p={6}
            align="flex-start"
            spacing={6}
            w={{ base: 'full', md: '40%' }}
          >
                <Heading as="h2" size="md" color="gray.700">Our Addresses</Heading>
            <HStack>
              <Icon as={MdLocationOn} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
               Acacia Avenue, Kampala, Uganda
              </Text>
            </HStack>
            <HStack>
              <Icon as={MdPhone} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                +256 754 033 164
              </Text>
            </HStack>
            <HStack>
              <Icon as={MdPhone} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                +256 778 105 878
              </Text>
            </HStack>
          
            <HStack>
              <Icon as={MdEmail} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                info@simbaafrica@gmail.com
              </Text>
            </HStack>
          </VStack>
          <VStack
            
           
           
            p={6}
            align="flex-start"
            spacing={6}
            w={{ base: 'full', md: '40%' }}
          >
                <Heading as="h2" size="md" color="gray.700">Social Media</Heading>
           
            <HStack as={Link} href='https://www.facebook.com/p/African-SIMBA-Events-100093632272961/' target='_blank' _hover={{color: 'var(--clr-primary-2'}}>
              <Icon as={FaFacebook} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
Facebook              </Text>
            </HStack>
            <HStack as={Link} href='https://x.com/Afsimbaevents' target='_blank' _hover={{color: 'var(--clr-primary-2'}}>
              <Icon as={FaTwitter} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                Twitter
              </Text>
            </HStack >
            <HStack  as={Link} href='https://www.instagram.com/africansimbaevents/' target='_blank' _hover={{color: 'var(--clr-primary-2'}}>
              <Icon as={FaInstagram} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                Instagram
              </Text>
            </HStack>
            <HStack as={Link} href='https://www.tiktok.com/@africansimbaevents' target='_blank' _hover={{color: 'var(--clr-primary-2'}}>
              <Icon as={FaTiktok} boxSize={6} color="var(--clr-primary-3" />
              <Text fontSize="md" color="gray.700">
                Tiktok
              </Text>
            </HStack>
            <HStack as={Link} href='https://www.youtube.com/@africansimbaevents' target='_blank' >
              <Icon as={FaYoutube} boxSize={6} color="var(--clr-primary-3" />
              <Text _hover={{color: 'var(--clr-primary-3', textDecor: 'underline'}}  fontSize="md" color="gray.700">
                Youtube
              </Text>
            </HStack>
          </VStack>

          {/* Contact Form */}
          <Box
            as="form"
            bg="white"
            shadow="lg"
            rounded="lg"
            p={6}
            w={{ base: 'full', md: '55%' }}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Your Name"
                size="md"
                focusBorderColor="var(--clr-primary-2)"
                bg="gray.50"
                isRequired
              />
              <Input
                type="email"
                placeholder="Your Email"
                size="md"
                focusBorderColor="var(--clr-primary-2)"
                bg="gray.50"
                isRequired
              />
              <Textarea
                placeholder="Your Message"
                size="md"
                focusBorderColor="var(--clr-primary-2)"
                bg="gray.50"
                rows={5}
                isRequired
              />
              <Button type='submit' width='full'  _hover={{ textDecoration: 'none', bg: 'var(--clr-primary-3)', color: 'var(--clr-primary-1' }} textDecoration='none'  rounded="full" colorScheme="var(--clr-primary-3)" variant="outline">
                               Send Message
                            </Button>
            </VStack>
          </Box>
        </Flex>

        {/* Map Section */}
        <Box mt={10} w="full" h="400px" pt={10}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.33767109905!2d32.58322!3d0.3475967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8e23e26e05%3A0x33af45b4a56df5e8!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1698666097123!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default ContactUs;
