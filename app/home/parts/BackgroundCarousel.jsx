"use client"

import { Box } from "@chakra-ui/react"

const BackgroundCarousel = () => {
  return (
    <Box 
      position="fixed" 
      top="0" 
      left="0" 
      width="100vw" 
      height="100vh" 
      zIndex="-1" 
      overflow="hidden"
      background="black"
    >
      {/* Dark overlay for solid dark background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="black"
        zIndex={-99}
      />
    </Box>
  )
}

export default BackgroundCarousel

