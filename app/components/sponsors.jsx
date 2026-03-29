"use client";
import React from "react";
import { Box, Text, VStack, SimpleGrid, Heading, Container } from "@chakra-ui/react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const partners = [
    { src: "/logos/Magnum.webp", name: "Magnum" },
    { src: "/logos/CLM-LOGO.webp", name: "CLM Logo" },
    { src: "/logos/simba_saloon.webp", name: "African Simba Saloon" },
];

const peopleWorkedWith = [
    { src: "/logos/pa.webp", name: "Partner A" },
    { src: "/logos/catwalk.webp", name: "Catwalk" },
    { src: "/logos/jomboree.webp", name: "Jomboree" },
    { src: "/logos/muleba_logo.webp", name: "Muleba Festival" },
    { src: "/logos/thrones.webp", name: "Thrones" },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1,
    },
};

const LogoCard = ({ partner, size = 180 }) => (
    <Box
        p={{ base: 3, md: 5 }}
        textAlign="center"
        transition="all 0.3s ease"
        _hover={{ transform: "scale(1.05)" }}
    >
        <Box
            w={{ base: "100px", md: `${size}px` }}
            h={{ base: "100px", md: `${size}px` }}
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(255,255,255,0.03)"
            borderRadius="2xl"
            border="1px solid rgba(255,255,255,0.06)"
            p={4}
            transition="all 0.3s ease"
            _hover={{
                borderColor: "rgba(239,178,9,0.2)",
                bg: "rgba(255,255,255,0.05)",
            }}
        >
            <Image
                src={partner.src}
                width={size}
                height={size}
                quality={60}
                priority
                style={{ objectFit: "contain" }}
                alt={`${partner.name} Logo`}
            />
        </Box>
    </Box>
);

const PartnerSection = () => {
    return (
        <Box py={{ base: 10, md: 16 }}>
            <Container maxW="container.xl">
                {/* Key Partners */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={10}
                >
                    <Text
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.3em"
                        color="var(--clr-primary-3)"
                        mb={3}
                    >
                        Partners
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        color="var(--clr-primary-1)"
                        fontWeight="bold"
                        mb={3}
                    >
                        Key{" "}
                        <Text as="span" color="var(--clr-primary-3)">
                            Partners
                        </Text>
                    </Heading>
                    <Text
                        color="rgba(255,255,255,0.5)"
                        fontSize={{ base: "sm", md: "md" }}
                        maxW="500px"
                        mx="auto"
                    >
                        We are proud to have a strong network of partners who support our mission.
                    </Text>
                </MotionBox>

                <SimpleGrid columns={{ base: 3, md: 3 }} spacing={5} mb={16}>
                    {partners.map((partner, index) => (
                        <LogoCard key={index} partner={partner} />
                    ))}
                </SimpleGrid>

                {/* People We Work With */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={10}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        color="var(--clr-primary-1)"
                        fontWeight="bold"
                        mb={3}
                    >
                        People we{" "}
                        <Text as="span" color="var(--clr-primary-3)">
                            work with
                        </Text>
                    </Heading>
                    <Text
                        color="rgba(255,255,255,0.5)"
                        fontSize={{ base: "sm", md: "md" }}
                        maxW="500px"
                        mx="auto"
                    >
                        We proudly collaborate with industry-leading organizations.
                    </Text>
                </MotionBox>

                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={2000}
                    keyBoardControl
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {peopleWorkedWith.map((person, index) => (
                        <LogoCard key={index} partner={person} />
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default PartnerSection;
