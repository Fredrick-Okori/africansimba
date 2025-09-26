import React from 'react'

import VideoStream from './parts/video'


export const metadata = {
    title: 'Events',
    openGraph: {
      title: 'Events',
    },
  }

export default function EventsPage(){
    return(
        <>
       <VideoStream/>
        </>
    )
}