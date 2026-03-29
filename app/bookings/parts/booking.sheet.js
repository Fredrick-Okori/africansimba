"use client";
import React from "react";
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Button,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronRight, FiCheck, FiStar } from "react-icons/fi";

const MotionBox = motion(Box);

const tickets = [
  {
    id: 1,
    title: "Ordinary",
    price: "30K",
    currency: "UGX",
    suffix: "",
    description: "General entry to enjoy the full event experience and vibe with the Game Changers.",
    features: [
      "Full event access",
      "General entry",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Table of 4",
    price: "600K",
    currency: "UGX",
    suffix: "",
    description: "Don Julio Reposado with reserved seating for 4. Premium vibes, premium service.",
    features: [
      "Don Julio Reposado",
      "Reserved table for 4",
      "Priority service",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Table of 6",
    price: "1.5M",
    currency: "UGX",
    suffix: "",
    description: "Hennessy or Don Julio Reposado plus Belaire. The baller experience for your crew.",
    features: [
      "Hennessy / Don Julio Reposado",
      "Belaire included",
      "Reserved table for 6",
      "VIP service",
    ],
    popular: true,
  },
  {
    id: 4,
    title: "Table of 8",
    price: "2.5M",
    currency: "UGX",
    suffix: "",
    description: "Don Julio 1942 plus Belaire. The ultimate premium experience for the big ballers.",
    features: [
      "Don Julio 1942",
      "Belaire included",
      "Reserved table for 8",
      "VIP service",
      "Premium placement",
    ],
    popular: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const TicketCard = React.memo(({ ticket, index }) => {
  const isPopular = ticket.popular;

  return (
    <MotionBox
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <Box
        position="relative"
        bg={isPopular ? "rgba(239,178,9,0.05)" : "rgba(255,255,255,0.03)"}
        border="1px solid"
        borderColor={isPopular ? "rgba(239,178,9,0.25)" : "rgba(255,255,255,0.08)"}
        borderRadius="3xl"
        p={{ base: 8, md: 10 }}
        h="100%"
        display="flex"
        flexDirection="column"
        transition="all 0.4s ease"
        overflow="hidden"
        _hover={{
          transform: "translateY(-6px)",
          boxShadow: isPopular
            ? "0 25px 60px -12px rgba(239,178,9,0.15)"
            : "0 25px 50px -12px rgba(0,0,0,0.3)",
          borderColor: isPopular
            ? "rgba(239,178,9,0.4)"
            : "rgba(255,255,255,0.15)",
        }}
      >
        {/* Accent line on top */}
        {isPopular && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="3px"
            bgGradient="linear(to-r, transparent, var(--clr-primary-3), transparent)"
          />
        )}

        {/* Popular badge */}
        {isPopular && (
          <Box
            position="absolute"
            top={5}
            right={5}
          >
            <HStack
              bg="rgba(239,178,9,0.15)"
              border="1px solid rgba(239,178,9,0.3)"
              borderRadius="full"
              px={3}
              py={1}
              spacing={1.5}
            >
              <Icon as={FiStar} color="var(--clr-primary-3)" boxSize={3} />
              <Text fontSize="2xs" fontWeight="bold" color="var(--clr-primary-3)" textTransform="uppercase" letterSpacing="0.1em">
                Popular
              </Text>
            </HStack>
          </Box>
        )}

        {/* Header */}
        <VStack align="start" spacing={4} mb={8}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="0.15em"
            color="var(--clr-primary-3)"
          >
            {ticket.title}
          </Text>

          {/* Price */}
          <HStack align="baseline" spacing={1}>
            <Text fontSize="xs" color="rgba(255,255,255,0.4)" fontWeight="medium" alignSelf="flex-start" mt={2}>
              {ticket.currency}
            </Text>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              color="var(--clr-primary-3)"
              lineHeight={1}
              letterSpacing="-0.02em"
            >
              {ticket.price}
            </Text>
            <Text fontSize="lg" color="rgba(255,255,255,0.4)" fontWeight="medium">
              {ticket.suffix}
            </Text>
          </HStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.5)"
            lineHeight="1.7"
          >
            {ticket.description}
          </Text>
        </VStack>

        {/* Features */}
        <VStack align="start" spacing={3} mb={10} flex={1}>
          {ticket.features.map((feature, i) => (
            <HStack key={i} spacing={3} align="center">
              <Flex
                w="20px"
                h="20px"
                borderRadius="md"
                bg={isPopular ? "rgba(239,178,9,0.15)" : "rgba(255,255,255,0.06)"}
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon
                  as={FiCheck}
                  color={isPopular ? "var(--clr-primary-3)" : "rgba(255,255,255,0.5)"}
                  boxSize={3}
                />
              </Flex>
              <Text fontSize="sm" color="rgba(255,255,255,0.7)">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        {/* CTA Button */}
        <Button
          as={Link}
          href="https://wa.me/+256778105878"
          target="_blank"
          rel="noopener noreferrer"
          w="100%"
          size="lg"
          py={7}
          rounded="2xl"
          fontWeight="bold"
          fontSize="sm"
          transition="all 0.3s ease"
          bg={isPopular ? "var(--clr-primary-3)" : "rgba(255,255,255,0.08)"}
          color={isPopular ? "black" : "var(--clr-primary-1)"}
          border="1px solid"
          borderColor={isPopular ? "var(--clr-primary-3)" : "rgba(255,255,255,0.1)"}
          _hover={{
            textDecoration: "none",
            bg: isPopular ? "var(--clr-primary-5)" : "rgba(255,255,255,0.12)",
            transform: "translateY(-2px)",
            boxShadow: isPopular
              ? "0 10px 30px -5px rgba(239,178,9,0.3)"
              : "0 10px 30px -5px rgba(0,0,0,0.2)",
          }}
          _active={{ transform: "translateY(0)" }}
        >
          Book Now
          <FiChevronRight style={{ marginLeft: "8px" }} />
        </Button>
      </Box>
    </MotionBox>
  );
});

TicketCard.displayName = "TicketCard";

export default function BookingCard() {
  return (
    <Container maxW="container.xl" py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
      {/* Section header */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        textAlign="center"
        mb={{ base: 10, md: 14 }}
      >
        <Text
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="0.3em"
          color="var(--clr-primary-3)"
          mb={3}
        >
          Reservations
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          color="var(--clr-primary-1)"
          fontWeight="bold"
          mb={4}
        >
          Choose your{' '}
          <Text as="span" color="var(--clr-primary-3)">experience</Text>
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="rgba(255,255,255,0.5)"
          maxW="500px"
          mx="auto"
        >
          Reserve your spot and enjoy a premium event experience tailored to your style.
        </Text>
      </MotionBox>

      {/* Ticket cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 5, md: 6 }} maxW="container.xl" mx="auto">
        {tickets.map((ticket, index) => (
          <TicketCard key={ticket.id} ticket={ticket} index={index} />
        ))}
      </SimpleGrid>

      {/* Bottom note */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        textAlign="center"
        mt={10}
      >
        <Text fontSize="xs" color="rgba(255,255,255,0.3)">
          Prices may vary per event. Contact us for group bookings and custom packages.
        </Text>
      </MotionBox>
    </Container>
  );
}
