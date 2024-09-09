import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";

const ItemDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [itemDetails, setItemDetails] = useState(null);



    return (
        <Container maxW="container.xl">
            <Heading>Item Detail for {id}</Heading>
            {itemDetails && (
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box>
                        <Text>Image: {itemDetails.image}</Text>
                    </Box>

                    <Box>
                        <Text>Description: {itemDetails.description}</Text>
                    </Box>
                </Grid>
            )}
        </Container>
    );
};

export default ItemDetail;
