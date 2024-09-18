import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { ChakraProvider } from '@chakra-ui/react'

import './globals.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NavBar />
          {children}
          <Footer/>
        </ChakraProvider>       
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}