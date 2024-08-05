import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import HeroSection from './parts/Hero';
import EventSchedule from './parts/EventsSchedule';
import UpcomingEvents from './parts/UpcomingEvents';
import ProgramTab from './parts/Programs';
import BackgroundCarousel from './parts/BackgroundCarousel';
import FloatingVideoSection from '../components/YouTubeLive';
import VideoBanner from './parts/VideoBanner';

import Link from 'next/link';
import { StoreBanner } from './parts/StoreBanner';
import PartnerSection from '../components/sponsors';

const Home = () => {
    return (
        <Box position="relative" width="100vw" >
            <BackgroundCarousel />
            <Box position="relative" zIndex="1">
                <HeroSection />
                <EventSchedule />
                <UpcomingEvents />
                <VideoBanner />
                <ProgramTab />
                <StoreBanner />
                <PartnerSection />
                <FloatingVideoSection />
            </Box>
        </Box>
    );
};

export default Home;
