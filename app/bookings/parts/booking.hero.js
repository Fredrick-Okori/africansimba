"use client";

import React, { useEffect } from "react";
import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

const BookingHero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box

      bgImage="url('/images/jomboree_hero.webp')" // Background image
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    
      height={{ base: "300px", md: "500px", lg: "600px" }} // Responsive height
    >
      {/* Overlay for darker effect */}
    

      {/* Content */}
      <VStack
        position="relative"
        zIndex="2"
        height="100%"
        justifyContent="center"
        spacing={4}
        textAlign="center"
        px={4}
      >
       <Heading fontSize={{ base: "5xl", lg: '7xl' }} bg='hsla(0, 0%, 0%, 0.7)'  // Adjusted background for frosted glass effect
                            backgroundBlendMode='soft-light'
                            lineHeight={1}
                            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)' py={20} borderLeft='5px dotted grey' p={5} color="white" 
                            >
                           Buy your Ticket

                       
                        </Heading>
        <Text
          fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
          color="var(--clr-primary-2)"
          maxW="600px"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
For Jamboree Adventures in Dubai
        </Text>
      </VStack>
    </Box>
  );
};

export default BookingHero;
