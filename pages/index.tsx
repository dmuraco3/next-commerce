import { Product } from '@prisma/client'
import type { NextPage } from 'next'
import React from 'react'
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
            <ProductLayout products={products} loadMore={false} loadMoreAction={() => {}}/>
        </div>
    )  
}

export default Home