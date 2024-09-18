import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CustomLeftArrow = ({ onClick }) => {
    return (
        <IconButton
            aria-label="left-arrow"
            icon={<FiChevronLeft/>}
            onClick={onClick}
            position="absolute"
            left="7%"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bg='hsla(0, 0%, 0%, 0.5)'  // Adjusted background for frosted glass effect
            backgroundBlendMode='soft-light'
            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
            color="white"
            _hover={{
                bgGradient: 'linear(to-r, purple.500, pink.700)',
                boxShadow: 'xl',
            }}
        />
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <IconButton
            aria-label="right-arrow"
            icon={<FiChevronRight />}
            onClick={onClick}
            position="absolute"
            right="7%"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bg='hsla(0, 0%, 0%, 0.5)'  // Adjusted background for frosted glass effect
            backgroundBlendMode='soft-light'
            boxShadow='0 0 20px 0 rgba(0, 0, 0, 0.5)'
            color="var( --clr-primary-1)"
            _hover={{
                bgGradient: 'linear(to-r, purple.500, pink.700)',
                boxShadow: 'xl',
            }}
        />
    );
};

export { CustomLeftArrow, CustomRightArrow };
