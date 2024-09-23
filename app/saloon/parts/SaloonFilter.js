'use client'
import { useState } from 'react';
import { Checkbox,Text, HStack, Container } from "@chakra-ui/react";

const SaloonFilter = () => {
    const [services, setServices] = useState([]);

    const handleServiceChange = (newServices) => {
        setServices(newServices);
    };

    return (
        <>
            <Container maxW='container.xl' pt={10} mt={10}>

            
            <Text fontSize='2xl'>Filter by Style</Text>
            <HStack  >
                <Checkbox size='lg' colorScheme='yellow'>
                    Men Hair Styles
                </Checkbox>
                <Checkbox size='lg' colorScheme='yellow'>
                    Women Hair Styles
                </Checkbox>
                <Checkbox rounded='full' size='lg' colorScheme='yellow' >
                    Pedicure & Manicure
                </Checkbox>
                <Checkbox size='lg' colorScheme='yellow' >
                    Skin and Facials
                </Checkbox>
                <Checkbox size='lg' colorScheme='yellow'>
                    Makeup
                </Checkbox>
                </HStack>
            </Container>
        </>
       
    );
};

export default SaloonFilter;

