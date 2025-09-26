'use client';

import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, VStack, Container, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "African Simba Events",
  "description": "We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do. From event planning to execution, we believe in creating memorable experiences that make a difference.",
  "founder": {
    "@type": "Person",
    "name": "African Simba",
    "jobTitle": "Chief Executive Officer"
  },
  "services": [
    "Hosting",
    "Marketing", 
    "Event Planning",
    "Talent Management",
    "Video Coverage",
    "Conceptualisation"
  ],
  "mission": "Our mission is to create and execute exceptional events that helps people celebrate life. We aim to provide innovative and effective solutions through our passion for event management."
};

// Memoized service item component
const ServiceItem = React.memo(({ service }) => (
  <ListItem 
    color="var(--clr-primary-1)" 
    fontSize={{ base: "sm", md: "md" }}
    py={1}
  >
    {service}
  </ListItem>
));

ServiceItem.displayName = 'ServiceItem';

// Memoized CEO section component
const CEOSection = React.memo(() => (
  <Box w="100%" alignItems="center" as="section" aria-labelledby="team-heading">
    
    <Flex 
      direction={{ base: "column", md: "row" }} 
      gap={8} 
      align={{ base: "center", md: "flex-start" }}
    >
      {/* CEO Image with proper container */}
      <Box
        flexShrink={0}
        w={{ base: "280px", md: "300px" }}
        h={{ base: "186px", md: "400px" }}
        position="relative"
        borderRadius="10px"
        overflow="hidden"
        boxShadow="lg"
      >
        <Image
          src="/haul/ceo_2.webp"
          alt="African Simba - CEO and Founder of African Simba Events"
          fill
          sizes="(max-width: 768px) 280px, 300px"
          style={{ objectFit: 'cover' }}
          quality={85}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hxuop9to16L4wfWnvjhvEfxK0WSn8Av/Z"
        />
      </Box>

      {/* CEO Description */}
      <VStack 
        flex="1" 
        align="start" 
        spacing={3} 
        textAlign={{ base: "center", md: "left" }}
        maxW={{ base: "100%", md: "600px" }}
      >
        <Text 
          as="h3"
          size="3xl" 
          color="var(--clr-primary-1)"
          fontWeight="bold"
        >
          African Simba
        </Text>
        <Text 
          fontSize="md" 
          color="var(--clr-primary-1)"
          fontWeight="semibold"
        >
          Chief Executive Officer
        </Text>
        <Text 
          fontSize="sm" 
          color="var(--clr-primary-1)"
          fontStyle="italic"
        >
          CEO • Host • Bookwriter • Marketer • Speaker
        </Text>
        <Text 
          mt={3} 
          fontSize={{ base: "sm", md: "md" }} 
          textAlign="left" 
          color="var(--clr-primary-1)"
          lineHeight="1.6"
        >
          African Simba is a visionary leader committed to fostering innovation and excellence
          across all aspects of our company. With years of experience in event management,
          his leadership has been instrumental in achieving our mission and vision.
        </Text>
      </VStack>
    </Flex>
  </Box>
));

CEOSection.displayName = 'CEOSection';

// Main services data
const services = [
  "Hosting",
  "Marketing", 
  "Event Planning",
  "Talent Management",
  "Video Coverage",
  "Conceptualisation"
];

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - African Simba Events | Professional Event Management</title>
        <meta 
          name="description" 
          content="Learn about African Simba Events - a team of passionate professionals delivering exceptional event experiences. From planning to execution, we create memorable celebrations." 
        />
        <meta name="keywords" content="event planning, event management, African Simba, hosting, video coverage, talent management" />
        <meta property="og:title" content="About Us - African Simba Events" />
        <meta property="og:description" content="Professional event management team dedicated to creating memorable experiences and exceptional celebrations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/haul/simba.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - African Simba Events" />
        <meta name="twitter:description" content="Professional event management team dedicated to creating memorable experiences." />
        <link rel="canonical" href="/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <Container maxW="container.xl" p={{ base: 4, md: 8 }} as="main">
        {/* Header Section */}
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          spacing={10} 
          mt={10} 
          mb={10}
          as="section"
          aria-labelledby="about-heading"
        >
          {/* About Us & Mission */}
          <Box 
            textAlign="left" 
            p={{ base: 6, md: 10 }} 
            w="100%"
          >
            <Heading 
              as="h1"
              id="about-heading"
              size={{ base: "xl", md: "2xl" }} 
              mb={4} 
              color="var(--clr-primary-1)"
            >
              About Us
            </Heading>
            <Text 
              fontSize={{ base: "sm", md: "md" }} 
              color="var(--clr-primary-1)" 
              maxW="700px"
              lineHeight="1.6"
              mb={6}
            >
              We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do.
              From event planning to execution, we believe in creating memorable experiences that make a difference.
            </Text>
            
            <Heading 
              as="h2"
              size={{ base: "lg", md: "xl" }} 
              mt={8} 
              mb={4} 
              color="var(--clr-primary-1)"
            >
              Our Mission
            </Heading>
            <Text 
              fontSize={{ base: "sm", md: "md" }} 
              color="var(--clr-primary-1)" 
              maxW="700px"
              lineHeight="1.6"
            >
              Our mission is to create and execute exceptional events that help people celebrate life.
              We aim to provide innovative and effective solutions through our passion for event management.
            </Text>
          </Box>

          {/* Services Section */}
          <Box 
            color="var(--clr-primary-1)" 
            p={{ base: 6, md: 10 }} 
            w="100%"
            as="section"
            aria-labelledby="services-heading"
          >
            <Heading 
              as="h2"
              id="services-heading"
              size={{ base: "lg", md: "xl" }}
              color="var(--clr-primary-1)"
              mb={4}
            >
              Our Services
            </Heading>
            <Text 
              as="p" 
              color="var(--clr-primary-1)" 
              mb={4} 
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
            >
              Activities
            </Text>
            <List 
              spacing={2} 
              color="var(--clr-primary-1)" 
              textAlign="left"
              styleType="disc"
              ml={4}
            >
              {services.map((service, index) => (
                <ServiceItem key={`service-${index}`} service={service} />
              ))}
            </List>
          </Box>
        </SimpleGrid>

        {/* CEO Section */}
        <CEOSection />
      </Container>
    </>
  );
};

export default About;