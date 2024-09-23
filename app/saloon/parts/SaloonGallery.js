'use client';

import { Container, Box, SimpleGrid, Button, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { saloonData } from './data';

const Carousel = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
          
            const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            console.log("Next Image Index:", newIndex); // Debug log
            return newIndex;
        });
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
       
            const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            console.log("Previous Image Index:", newIndex); // Debug log
            return newIndex;
        });
    };

    return (
        <Box
            position="relative"
            w="100%"
            h="100%"
            rounded={10}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={images[currentIndex]} alt={alt} w="100%" h="100%" objectFit="cover" rounded={10} />

            {/* Carousel Controls (Visible on hover) */}
            {isHovered && (
                <>
                    <Button
                        position="absolute"
                        top="50%"
                        rounded="full"
                        bg="var(--clr-primary-3)"
                        left="10px"
                        transform="translateY(-50%)"
                        zIndex={1}
                        onClick={handlePrevious}
                    >
                        ‹
                    </Button>
                    <Button
                        position="absolute"
                        top="50%"
                        right="10px"
                        rounded="full"
                        bg="var(--clr-primary-3)"
                        transform="translateY(-50%)"
                        zIndex={1}
                        onClick={handleNext}
                    >
                        ›
                    </Button>
                </>
            )}
        </Box>
    );
};

const SaloonGallery = () => {
    const [hoveredImages, setHoveredImages] = useState([]);

    const handleMouseEnter = (index) => {
        setHoveredImages((prevState) => [...prevState, index]);
    };

    const handleMouseLeave = (index) => {
        setHoveredImages((prevState) => prevState.filter((i) => i !== index));
    };

    return (
        <Container maxW="container.xl" position="relative" pt={10}>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
                {saloonData.map((item, index) => (
                    <Box
                        key={index}
                        position="relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        bg="primary.300"
                    >
                        <Carousel images={item.images} alt={item.category} />

                        <Box
                            roundedBottom={10}
                            position="absolute"
                            transition="all 0.3s"
                            bg="var(--clr-primary-5)"
                            bottom={0}
                            left={0}
                            right={0}
                            p={4}
                            display={hoveredImages.includes(index) ? 'block' : 'none'}
                        >
                            <Text color="var(--clr-primary-2)" fontWeight="normal">
                                {item.category}
                            </Text>
                            <Text color="var(--clr-primary-2)" fontWeight="bold">
                                Price: {item.price}
                            </Text>
                            <Button variant="outline" bg="var(--clr-primary-3)" color="black" size="md" rounded="full">
                                Book Now
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default SaloonGallery;
