import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '../NavBar';
import HeroSection from './Hero';
import EventSchedule from './EventsSchedule';
import UpcomingEvents from './UpcomingEvents';
import ProgramTab from './Programs';
import BackgroundCarousel from './BackgroundCarousel';
import FloatingVideoSection from '../YouTubeLive';

const Home = () => {
    return (
        <Box position="relative" width="100vw" >
            <BackgroundCarousel />
        
          
            <Box position="relative" zIndex="1">
                <HeroSection />
                <EventSchedule />
                <UpcomingEvents />
                <ProgramTab />
                <FloatingVideoSection/>
            </Box>
        </Box>
    );
};

export default Home;
