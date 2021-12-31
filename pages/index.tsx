import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CartIcon from '../components/cart/icon'
import LogoBanner from '../components/logo_banner'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react"


const stripe = require('stripe')('sk_test_51KCZ1WJXbqMuWcYwsKIm2DDiRVqRrAPOeyv6dywbsYbonJEfiOSF4MJvrEYK6SNTH8irrsUVs88KrmrjuQsq2v8k00aqa3WJyq');

const Home: NextPage = () => {
    
    const [products, setProducts] = useState("")

    useEffect(() => {
        const req = fetch("http://localhost:3000/api/products/return")
        .then(res => res.json())
        .then(res => setProducts(res))
        .then(() => console.log(products))

    }, [])

    return (
        <div>
            <LogoBanner/>
            <div>
 
                
            </div>
        </div>
    )  
}

export default Home
