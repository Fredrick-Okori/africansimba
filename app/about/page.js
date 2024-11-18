import React, { Suspense } from 'react'

import BackgroundCarousel from '../home/parts/BackgroundCarousel'
import { Box } from '@chakra-ui/react'



import AboutUs from './parts/about'
import TeamSection from './parts/teamCards'
import AboutHero from './parts/about.hero'
import DarkFooter from '../components/Footer.dark'

export default function About() {
    return (
        <div>
            <Suspense>


                <Box position='relative' w='100vw'>
                    {/* <BackgroundCarousel /> */}
                    <AboutHero/>
                    <Box position="relative" zIndex="1">
                        <AboutUs />
                       <TeamSection/>
                        {/* <ProductDetails/> */}
<DarkFooter/>
                    </Box>
                </Box>
            </Suspense>
        </div>
    )
}