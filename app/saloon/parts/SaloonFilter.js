'use client';

import { useState } from 'react';
import { Checkbox, Text, HStack, Container, Select, useMediaQuery } from "@chakra-ui/react";

const SaloonFilter = ({ onFilterChange }) => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const handleCheckboxChange = (service) => {
        setSelectedServices((prev) => {
            const newServices = prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service];
            onFilterChange(newServices); // Pass the selected filters to the parent
            return newServices;
        });
    };

    const handleSelectChange = (e) => {
        const newServices = [e.target.value];
        setSelectedServices(newServices);
        onFilterChange(newServices); // Pass the selected filters to the parent
    };

    return (
        <Container maxW='container.xl' pt={10} mt={10}>
            <Text fontSize='2xl'>Filter by Style</Text>

            {isMobile ? (
                <Select placeholder="Select service" onChange={handleSelectChange}>
                    <option value="Men's Haircut">Men Hair Styles</option>
                    <option value="Women's Haircut">Women Hair Styles</option>
                    <option value="Pedicure & Manicure">Pedicure & Manicure</option>
                    <option value="Facial & Skin Care">Skin and Facials</option>
                    <option value="Makeup">Makeup</option>
                </Select>
            ) : (
                <HStack spacing={4}>
                    <Checkbox colorScheme='yellow' onChange={() => handleCheckboxChange("Men's Haircut")}>Men Hair Styles</Checkbox>
                        <Checkbox colorScheme='yellow' onChange={() => handleCheckboxChange("Women's Haircut")}>Women Hair Styles</Checkbox>
                        <Checkbox colorScheme='yellow' onChange={() => handleCheckboxChange('Pedicure & Manicure')}>Pedicure & Manicure</Checkbox>
                        <Checkbox colorScheme='yellow' onChange={() => handleCheckboxChange('Facial & Skin Care')}>Skin and Facials</Checkbox>
                        <Checkbox colorScheme='yellow' onChange={() => handleCheckboxChange('Makeup')}>Makeup</Checkbox>
                </HStack>
            )}
        </Container>
    );
};

export default SaloonFilter;
