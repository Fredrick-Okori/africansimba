"use client";
import React, { useState } from "react";
import Live from "./parts/live";
import BackgroundCarousel from "../home/parts/BackgroundCarousel";
import PartnerSection from "../components/sponsors";
import PreviousVideos from "./parts/previous.videos";
import { videos } from "./parts/previous.videos";
export default function Stream(props) {
    const [currentVideo, setCurrentVideo] = useState(null);


    const handleVideoSelect = (video) => {
        setCurrentVideo(video);
    };

    return (
        <>
            <BackgroundCarousel />
            <Live currentVideo={currentVideo} />
            <PreviousVideos onVideoSelect={handleVideoSelect} />
            <PartnerSection />
        </>
    );
}
