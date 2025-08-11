"use client"

import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"
import Aos from "aos"
import "aos/dist/aos.css"
import "react-multi-carousel/lib/styles.css"

const events = [
  {
    image: "/images/bg_blue.jpg",
  },
  // {
  //   image: "/images/bg_blue.jpg",
  // },
  // {
  //   image: "/images/bg_brown.jpg",

  // },
  // {
  //   image: "/images/bg_gray.jpg",
  // },
  // {
  //   image: '/images/bg_green.jpg'
  // }
]

const BackgroundCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(events.length - 1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      // Start transition
      setIsTransitioning(true)
      setPrevIndex(activeIndex)

      // Update active index
      setActiveIndex((prevIndex) => (prevIndex + 1) % events.length)

      // End transition after animation completes
      setTimeout(() => setIsTransitioning(false), 2000)
    }, 20000) // Change image every 20 seconds

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <Box position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex="-1" overflow="hidden">
      {/* Current image */}
      <Box
        key={`active-${activeIndex}`}
        width="100%"
        height="100%"
        backgroundImage={`url(${events[activeIndex].image})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      
        backgroundSize="cover"
        position="absolute"
        top="0"
        left="0"
        opacity={1.1}
        zIndex={-99}
        sx={{
          transform: isTransitioning ? "scale(1.05)" : "scale(1)",
          transition: "transform 2s ease-out, opacity 2s ease-out",
        }}
      />

      {/* Previous image - only visible during transition */}
      <Box
        key={`prev-${prevIndex}`}
        width="100%"
        height="100%"
        backgroundImage={`url(${events[prevIndex].image})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        position="absolute"
        top="0"
        left="0"
        opacity={isTransitioning ? 1 : 0}
        zIndex={-100}
        transition="opacity 2s ease-out"
      />

      {/* Overlay for smoother transitions */}
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="radial-gradient(circle, transparent 30%, rgba(0,0,0,0.3) 100%)"
        opacity={isTransitioning ? 0.7 : 0}
        transition="opacity 2s ease-out"
        zIndex={-98}
      /> */}
    </Box>
  )
}

export default BackgroundCarousel
