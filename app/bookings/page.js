import { Text, Box } from "@chakra-ui/react"
import BackgroundCarousel from "../home/parts/BackgroundCarousel"
import BookingHero from "./parts/booking.hero"
import CreateBooking from "./parts/booking.sheet"
import PartnerSection from "../components/sponsors"
import { Suspense } from "react"
export default function BookingService() {
    return (
        <>
            <Suspense>
            <BackgroundCarousel />
            <Box position="relative" zIndex="1">
                <BookingHero />
                <CreateBooking />
                <PartnerSection/>
                </Box>
            </Suspense>
        </>
    )


}