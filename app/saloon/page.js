import { Box} from "@chakra-ui/react";

import ProductCategoryNav from "../store/parts/products.category";
import HeroSection from "./parts/Hero";
import FeatureSection from "./parts/Feature";
import SaloonGallery from "./parts/SaloonGallery";
import SaloonFilter from "./parts/SaloonFilter";
import BackgroundCarousel from "../home/parts/BackgroundCarousel";
import { Suspense } from "react";

export default function SaloonPage() {
    return (
        <>
            <div>
                <Suspense>
                <Box position='relative' w='100vw'>
                    {/* <BackgroundCarousel /> */}

                    <Box position="relative" zIndex="1">
                        {/* <ProductCategoryNav/> */}
                        <HeroSection />
                        <FeatureSection />
                     
                        <SaloonGallery/>
                      

                    </Box>
                    </Box>
                </Suspense>
            </div>
        </>
    )
}