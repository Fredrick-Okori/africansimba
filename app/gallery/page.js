import React from 'react'
import Gallery from './parts/gallery'
import BackgroundCarousel from '../home/parts/BackgroundCarousel'


export const metadata = {
    title: 'Gallery',
    openGraph: {
      title: 'Gallery',
    },
  }

export default function GalleryPage(){
    return(
        <>
        <BackgroundCarousel/>
        <Gallery/>
        </>
    )
}