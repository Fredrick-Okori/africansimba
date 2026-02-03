
import { Box } from "@chakra-ui/react"
import BackgroundCarousel from "../home/parts/BackgroundCarousel"
import BookingHero from "./parts/booking.hero"
import CreateBooking from "./parts/booking.sheet"

import { Suspense } from "react"
import Footer from "../components/Footer"


export const metadata = {
    title: 'Reservation',
    openGraph: {
      title: 'Reservation',
    },
  }
export default function BookingService() {
    return (
        <>
            <Suspense>
            <BackgroundCarousel />
            <Box position="relative" zIndex="1">
                <BookingHero />
                <CreateBooking />               
                <Footer/>
                </Box>
            </Suspense>
        </>
    )


}