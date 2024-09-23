// 'use client'

// import {
//     Box,
//     Flex,
//     Image,
//     Heading,
//     Text,
//     Button,
//     HStack,
//     IconButton,
//     Stack,
//     Radio,
//     RadioGroup,
//     useNumberInput,
//     Container,

// } from '@chakra-ui/react';
// import { FaStar, FaMinus, FaPlus } from 'react-icons/fa';
// import { useState, useEffect } from 'react';

// import Link from 'next/link';

// import { useSearchParams } from 'next/navigation';

// import { products } from './data';

// const ProductDetails = () => {



//     // Images for the carousel
//     const images = [
//         '/images/ddane.jpg',
//         '/images/main_main.jpg',
//         '/images/ddane.jpg'
//     ];
//     const [selectedImage, setSelectedImage] = useState(images[0]);

//     // Number input setup for quantity
//     const {
//         getInputProps,
//         getIncrementButtonProps,
//         getDecrementButtonProps,
//     } = useNumberInput({
//         step: 1,
//         defaultValue: 1,
//         min: 1,
//     });

//     const incProps = getIncrementButtonProps();
//     const decProps = getDecrementButtonProps();
//     const inputProps = getInputProps();

//     return (
//         <Container maxW="container.xl" mt={10}>


//             <Box padding="20px"
//             >
//                 <Flex flexDirection={{ base: 'column', md: 'row' }} gap={10}>
//                     {/* Image Carousel */}
//                     <Box flex={{ base: '1', md: '1' }}>
//                         <Image src={selectedImage} alt="Product Image" borderRadius="md" />
//                         <Flex mt={4}>
//                             {images.map((img, idx) => (
//                                 <Image
//                                     key={idx}
//                                     src={img}
//                                     alt={`Product Image ${idx}`}
//                                     boxSize={{ base: '40px', md: '50px' }}
//                                     objectFit="cover"
//                                     mr={2}
//                                     onClick={() => setSelectedImage(img)}
//                                     cursor="pointer"
//                                     borderRadius="md"
//                                     border={selectedImage === img ? '1px solid grey' : 'none'}
//                                 />
//                             ))}
//                         </Flex>
//                     </Box>

//                     {/* Product Details */}
//                     <Box flex={{ base: '1', md: '1' }}>
//                         <Heading as="h1" size="lg" color='var(--clr-primary-2)'>Nadetta Coat Beige</Heading>
//                         <HStack spacing={1} mt={2}>
//                             <FaStar color="var(--clr-primary-3)" />
//                             <FaStar color="var(--clr-primary-3)" />
//                             <FaStar color="var(--clr-primary-3)" />
//                             <FaStar color="var(--clr-primary-3)" />
//                             <FaStar color="var(--clr-primary-1)" />
//                             <Text fontSize="sm" color='var(--clr-primary-2)'>(4.8 from 328 reviews)</Text>
//                         </HStack>

//                         {/* Color and Size Selectors */}
//                         <Box mt={4}>
//                             <Text fontWeight="bold" color='var(--clr-primary-2)'>Select Color</Text>
//                             <RadioGroup defaultValue="1" mt={2}>
//                                 <HStack spacing={4}>
//                                     <Radio value="1" colorScheme="gray" size="lg" />
//                                     <Radio value="2" colorScheme="blackAlpha" size="lg" />
//                                 </HStack>
//                             </RadioGroup>

//                             <Text fontWeight="bold" mt={4} color='var(--clr-primary-2)'>Select Size</Text>
//                             <HStack spacing={2} mt={2} color='var(--clr-primary-2)'>
//                                 <Button  size="sm">XS</Button>
//                                 <Button  size="sm">S</Button>
//                                 <Button  size="sm">M</Button>
//                                 <Button  size="sm">L</Button>
//                                 <Button  size="sm">XL</Button>
//                             </HStack>
//                         </Box>

//                         {/* Pricing and Purchase Options */}
//                         <Box mt={6}>
//                             <HStack>
//                                 <Text fontSize="2xl" color='var(--clr-primary-2)' fontWeight="bold">$350</Text>
//                                 <Text as="s" fontSize="lg" color='var(--clr-primary-2)' >$600</Text>
//                             </HStack>
//                             <HStack mt={4}>
//                                 <Text color='var(--clr-primary-2)'>Quantity:</Text>
//                                 <HStack>
//                                     <IconButton {...decProps} icon={<FaMinus />} />
//                                     <input {...inputProps} style={{ width: '40px', textAlign: 'center' }} />
//                                     <IconButton {...incProps} icon={<FaPlus />} />
//                                 </HStack>
//                             </HStack>
//                             <HStack spacing={4} mt={6} >
//                                 <Button rounded='full'  variant="solid" flex="1">Add to Cart</Button>
//                                 <Button rounded='full'  flex="1">Buy it Now</Button>
//                             </HStack>
//                         </Box>

//                         {/* Product Description */}
//                         <Box mt={10} color='var(--clr-primary-2)'>
//                             <Heading size="md" mb={4}>Stylish Women's Coats</Heading>
//                             <Text>
//                                 Stay cozy and stylish with our selection of women's coats! From classic trenches to warm parkas, we’ve got you covered in every season.
//                             </Text>
//                         </Box>
//                     </Box>
//                 </Flex>
//             </Box>
//         </Container>
//     );
// };

// export default ProductDetails;
