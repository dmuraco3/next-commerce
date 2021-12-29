import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import {SessionProvider} from 'next-auth/react'
import Footer from '../components/footer'
import Banner from "../components/banner"

function MyApp({
  Component,
  pageProps: {session, ...pageProps} 
  }: AppProps) {
  return <div>
    <SessionProvider session={session}>
      <Banner message="Sale is on! 25% off sitewide using SUMMER25 at checkout!"/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />

        </div>
        <div className="flex-1 flex items-end">

          <Footer />
        </div>

      </div>
      
    </SessionProvider>
  </div>
}

export default MyApp
