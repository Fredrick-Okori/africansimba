"use client";
import React, { Suspense } from "react";
import BackgroundCarousel from "../../home/parts/BackgroundCarousel";
import PreviousVideos from "./previous.videos";
import Footer from "../../components/Footer";

export default function Stream() {
    return (
        <>
            <Suspense>
                <BackgroundCarousel />
                <PreviousVideos />
                <Footer />
            </Suspense>
        </>
    );
}
