import { Text, Box } from "@chakra-ui/react"
import BackgroundCarousel from "../home/parts/BackgroundCarousel"
import BookingHero from "./parts/booking.hero"
export default function BookingService() {
    return (
        <>
            <BackgroundCarousel />
            <Box position="relative" zIndex="1">
                <BookingHero />
                </Box>
        </>
    )


}