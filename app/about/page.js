import React, { Suspense } from 'react'

import BackgroundCarousel from '../home/parts/BackgroundCarousel'
import { Box } from '@chakra-ui/react'



import AboutUs from './parts/about'
import TeamSection from './parts/teamCards'

export default function About() {
    return (
        <div>
            <Suspense>


                <Box position='relative' w='100vw'>
                    <BackgroundCarousel />

                    <Box position="relative" zIndex="1">
                        <AboutUs />
                       <TeamSection/>
                        {/* <ProductDetails/> */}

                    </Box>
                </Box>
            </Suspense>
        </div>
    )
}