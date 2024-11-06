"use client";
import React, { Suspense, useState } from "react";

import BackgroundCarousel from "../home/parts/BackgroundCarousel";
import PartnerSection from "../components/sponsors";
import PreviousVideos from "./parts/previous.videos";
import EventsListing from "./parts/eventsListing";

export default function Stream(props) {
    const [currentVideo, setCurrentVideo] = useState(null);


    const handleVideoSelect = (video) => {
        setCurrentVideo(video);
    };

    return (
        <>
            <Suspense>
                <BackgroundCarousel />
              
                <PreviousVideos onVideoSelect={handleVideoSelect} />
              
                <PartnerSection />
            </Suspense>
        </>
    );
}
