import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NavBar />
          {children}
        </ChakraProvider>
        
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}