import React, { Suspense } from 'react'


import { Box } from '@chakra-ui/react'


import ContactHero from './parts/contact.hero'
import ContactUs from './parts/contact'
import DarkFooter from '../components/Footer.dark'


export default function About() {
    return (
        <div>
            <Suspense>


                <Box>
                    
                    <ContactHero/>
                    <Box position="relative" zIndex="1">
                        <ContactUs/>
                       
                      <DarkFooter/>

                    </Box>
                </Box>
            </Suspense>
        </div>
    )
}