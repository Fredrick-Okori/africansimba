
import { ChakraProvider } from '@chakra-ui/react'

import { Lexend } from 'next/font/google'
import './globals.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

const lexend = Lexend({
  family: 'Neuton',
  style: ['normal'],
  weight: [  '400'],
  subsets: ['latin']

})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NavBar />
          <main className={lexend.className}>
            {children}
          </main>     
          <Footer/>
          </ChakraProvider>  
      </body>
    </html>
  )
}