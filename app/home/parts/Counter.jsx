"use client";
import React from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const counterImages = [
    {
        src: "/new/d8886efb-563c-4100-8474-65ee0ef9e693 3.webp",
        alt: "Muleba Festival",
    },
    {
        src: "/haul/moses.webp",
        alt: "African Simba Events Anniversary",
    },
    {
        src: "/new/a637ab6e-0eb0-4e12-82aa-dbb86190db2c 3.webp",
        alt: "Paradigm Fridays",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12 },
    }),
};

export default function Count() {
    return (
        <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                {counterImages.map((img, index) => (
                    <MotionBox
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                        variants={fadeInUp}
                    >
                        <Box
                            position="relative"
                            h={{ base: "280px", md: index === 1 ? "450px" : "380px" }}
                            borderRadius="2xl"
                            overflow="hidden"
                            border="1px solid rgba(255,255,255,0.06)"
                            transition="all 0.4s ease"
                            role="group"
                            _hover={{
                                transform: "translateY(-4px)",
                                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                                borderColor: "rgba(239,178,9,0.2)",
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: "cover" }}
                                quality={75}
                                priority={index === 0}
                            />
                            <Box
                                position="absolute"
                                inset={0}
                                bg="linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)"
                                transition="all 0.4s ease"
                                _groupHover={{
                                    bg: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)",
                                }}
                            />
                        </Box>
                    </MotionBox>
                ))}
            </SimpleGrid>
        </Container>
    );
}
