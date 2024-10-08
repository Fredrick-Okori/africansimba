'use client';

import { useState } from 'react';
import { saloonData } from './data';
import {
    Container, Box, SimpleGrid, Button, Text, Image,
    Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure
} from '@chakra-ui/react';
import SaloonFilter from './SaloonFilter'; // Import the filter component

const ImageViewer = ({ isOpen, onClose, image }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none">
                <ModalCloseButton color="white" />
                <ModalBody display="flex" justifyContent="center" alignItems="center">
                    <Image src={image} alt="Full View" objectFit="contain" maxH="90vh" />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const Carousel = ({ images, alt, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
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
            <Image
                src={images[currentIndex]}
                alt={alt}
                w="100%"
                h="100%"
                objectFit="cover"
                rounded={10}
                onClick={() => onImageClick(images[currentIndex])} // Trigger the image viewer
                cursor="pointer"
            />

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
    const [filteredServices, setFilteredServices] = useState(saloonData);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null); // To store the clicked image

    // This function gets called when the filter changes
    const handleFilterChange = (selectedCategories) => {
        if (selectedCategories.length === 0) {
            setFilteredServices(saloonData); // Show all services if no filter is selected
        } else {
            const filtered = saloonData.filter((item) => selectedCategories.includes(item.category));
            setFilteredServices(filtered);
        }
    };

    const [hoveredImages, setHoveredImages] = useState([]);

    const handleMouseEnter = (index) => {
        setHoveredImages((prevState) => [...prevState, index]);
    };

    const handleMouseLeave = (index) => {
        setHoveredImages((prevState) => prevState.filter((i) => i !== index));
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        onOpen(); // Open the image viewer modal
    };

    return (
        <Container maxW="container.xl" position="relative" pt={10}>
            {/* Render the filter component and pass the filter handler */}
            <SaloonFilter onFilterChange={handleFilterChange} />

            <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} spacing={10} pt={10}>
                {filteredServices.map((item, index) => (
                    <Box
                        key={index}
                        position="relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        bg="primary.300"
                    >
                        <Carousel images={item.images} alt={item.category} onImageClick={handleImageClick} />

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

            {/* Image Viewer Modal */}
            {selectedImage && <ImageViewer isOpen={isOpen} onClose={onClose} image={selectedImage} />}
        </Container>
    );
};

export default SaloonGallery;
