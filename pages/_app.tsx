import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import {SessionProvider} from 'next-auth/react'
import Footer from '../components/footer'
import Banner from "../components/banner"
import LogoBanner from '../components/logo_banner'

import {Provider} from 'react-redux'
import store from '../stores/store'

import Head from 'next/head'

function MyApp({
  Component,
  pageProps: {session, ...pageProps} 
  }: AppProps) {
  return <div>
    <SessionProvider session={session}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

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
          <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key="OGQ2OTZmOTMtNzIyZC00MGZkLWExY2MtMTYzYjVkZDdmZmM4NjM3NzY1NzQ4NjUyODUxMzQ5" data-config-add-product-behavior="none" />

        </div>

      </Provider>
      
    </SessionProvider>
  </div>
}

export default MyApp
