
import React, { Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './parts/Hero';
import EventSchedule from './parts/EventsSchedule';

import { UpcomingEvents } from './parts/UpcomingEvents';

import ProductCarousel from './parts/Programs';
import BackgroundCarousel from './parts/BackgroundCarousel';
import FloatingVideoSection from '../components/YouTubeLive';
import VideoBanner from './parts/VideoBanner';

import PartnerSection from '../components/sponsors';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Home',
    openGraph: {
      title: 'Home',
    },
  }

const Home = () => {
    return (
        <Suspense>


            <Box position="relative" width="100vw" >
                <BackgroundCarousel />
                <Box position="relative" zIndex="1">
                    {/* <HeroSection /> */}
                    <VideoBanner />
                    <EventSchedule />
                   <UpcomingEvents/>
               
                    <ProductCarousel />
                    <PartnerSection />   
                    <Footer/>
                </Box>
            </Box>
        </Suspense>
    );
};

export default Home;
