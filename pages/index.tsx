import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CartIcon from '../components/cart/icon'
import LogoBanner from '../components/logo_banner'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div>
            <LogoBanner/>
        </div>
    )  
}

export default Home
