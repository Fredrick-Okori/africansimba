import React from 'react'

import BackgroundCarousel from '../home/parts/BackgroundCarousel'
import { Box } from '@chakra-ui/react'

import ShopHeroSection from './parts/shop.hero'
import ShopItems from './parts/shop.items.carousel'
import StoreBanner from './parts/simba.store.banner'
import PartnerSection from '../components/sponsors'

export default function Shop() {
    return (
        <div>
            <Box position='relative' w='100vw'>
                <BackgroundCarousel />
                <Box position="relative" zIndex="1">
                    <ShopHeroSection />
                    <ShopItems />
                    <StoreBanner />
                    <PartnerSection />
                </Box>
            </Box>
        </div>
    )
}