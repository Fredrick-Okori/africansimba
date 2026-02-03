
import React, { Suspense } from 'react'

import { Box } from '@chakra-ui/react'

import ShopHeroSection from './parts/shop.hero'
import ShopItems from './parts/shop.items.carousel'
import ProductCategoryNav from './parts/products.category'
import FullStore from './parts/shop.products.all'
import DarkFooter from '../components/Footer.dark'


export const metadata = {
    title: 'Shop',
    openGraph: {
      title: 'Shop',
    },
  }
export default function Shop() {
    return (
        <div>
            <Suspense>

            
            <Box position='relative' w='100vw'>
                {/* <BackgroundCarousel /> */}

                <Box position="relative" zIndex="1">
                    <ProductCategoryNav/>
                    <StoreHeroSection />
                    <ShopItems />
                    <FullStore />
                        {/* <ProductDetails/> */}
                       <DarkFooter/>
                   
                </Box>
                </Box>
            </Suspense>
        </div>
    )
}