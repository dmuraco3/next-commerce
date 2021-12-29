import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import {SessionProvider} from 'next-auth/react'
import Footer from '../components/footer'
import Banner from "../components/banner"
import LogoBanner from '../components/logo_banner'

import {Provider} from 'react-redux'
import store from '../stores/store'

function MyApp({
  Component,
  pageProps: {session, ...pageProps} 
  }: AppProps) {
  return <div>
    <SessionProvider session={session}>
        

      <Provider store={store}>

        <div className="flex flex-col min-h-screen">
          
          <Banner message="Sale is on! 25% off sitewide using SUMMER25 at checkout!"/>
          <Navbar />
          <LogoBanner/>
          
          <div className="flex-1">
            <Component {...pageProps} />

          </div>
          <div className="flex-1 flex items-end">

            <Footer />
          </div>

        </div>

      </Provider>
      
    </SessionProvider>
  </div>
}

export default MyApp
