
import { ChakraProvider } from '@chakra-ui/react'



import {Merriweather} from 'next/font/google'
import { Overpass } from 'next/font/google'


import './globals.css'

import NavBar from './components/NavBar'

import { Metadata} from "next";
import Script from 'next/script';




/**
 * @type {{ title: { default: string, template: string }, description: string, icons: { icon: string } }}
 */
export const metadata = {
  title: {
    default: 'African Simba Events',
    template: `%s - African Simba Events`,
  },
  description: 'We are a team of passionate professionals dedicated to delivering top-notch experiences in everything we do. From event planning to execution, we believe in creating memorable experiences that make a difference.',
  icons: {
    icon: "/favicon.ico",
  },
};


const overpass = Overpass({
    subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-nomotrust',
})

const marriweather = Merriweather({
    subsets: ['cyrillic', 'vietnamese', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-marriweather',
})






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </head>
      <body>
        <ChakraProvider>
          <NavBar />
          <main className={overpass.className}>
            {children}
          </main>     
         
          </ChakraProvider>  
      </body>
     
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-R5TEY7FSET"></Script>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R5TEY7FSET');`}
</Script>
    </html>
  )
}