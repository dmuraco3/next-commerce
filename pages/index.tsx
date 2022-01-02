import { Product } from '@prisma/client'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ProductLayout from '../components/ProductLayout'

const Home: NextPage = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('/api/products/list')
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(err => {
            console.error(err)
        })
    })

    return (
        <div>
            <ProductLayout products={products}/>
        </div>
    )  
}

export default Home
