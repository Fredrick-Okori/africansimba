# Unused Imports Cleanup Plan

## Files to Clean:

1. ✅ app/events/parts/events.hero.js
   - Remove: `useColorModeValue` (Chakra UI)
   - Remove: `FiPhone`, `FiGlobe`, `FiInfo` (react-icons)

2. ✅ app/home/page.jsx
   - Remove: `NavBar` (component)
   - Remove: `Link` (next/link)
   - Note: `React` is still used for `Suspense`, `HeroSection`, `FloatingVideoSection`, `VideoBanner`, `BackgroundCarousel` are used

3. ✅ app/home/parts/UpcomingEvents.jsx
   - Remove: `Heading`, `HStack`, `Icon` (Chakra UI)
   - Remove: `FiExternalLink` (react-icons)

4. ⏳ app/home/parts/Programs.jsx
   - Remove: `FiExternalLink` (react-icons)

5. ⏳ app/components/NavBar.js
   - Remove: `FiArrowRight`, `FiActivity`, `FiMessageCircle`, `FiUsers`, `FiShoppingCart`, `FiHome`, `FiImage` (react-icons)
   - Remove: `Image` (next/image - not used)

6. ⏳ app/components/Footer.js
   - Remove: `useSearchParams`, `useRouter` (next/navigation)
   - Remove: `FiFacebook`, `FiInstagram`, `FiTwitter`, `FiYoutube` (react-icons)

7. ⏳ app/components/Footer-dark.js
   - Remove: `useSearchParams`, `useRouter` (next/navigation)
   - Remove: `FiFacebook`, `FiInstagram`, `FiTwitter`, `FiYoutube` (react-icons)

8. ⏳ app/events/parts/upcoming.js
   - Remove: `Heading`, `useBreakpointValue` (Chakra UI)

9. ⏳ app/home/parts/EventsSchedule.jsx
   - Remove: `FaChevronRight` (react-icons)

## Files Already Clean:
- ✅ app/components/sponsors.jsx
- ✅ app/home/parts/VideoBanner.jsx
- ✅ app/components/YouTubeLive.js
- ✅ app/home/parts/Counter.jsx
- ✅ app/home/parts/DJ.jsx

## Status: IN PROGRESS (1/9 complete)
