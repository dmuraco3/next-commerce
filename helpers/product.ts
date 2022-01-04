import {prisma} from "../db"

import { Product } from "@prisma/client"


/**
 * this functions lists products
 * 
 * @argument quantity - number of products to return  
 * @argument cursor   - cursor to return products after
 **/

export const listProducts = async (quantity?: number, cursor?: number) => {
    const products = await prisma.product.findMany({
        ...(quantity && {take: quantity}),
        ...(cursor && {cursor: {
            id: cursor
        }}),
        orderBy: {
            id: 'asc'
        }
    })

    return products
}

/**
 * this function returns all ids from all posts 
 **/
export const AllProductId = async () => {
    const allId = await prisma.product.findMany({
        select: {
            id: true
        }
    })
    return allId
}

/** 
 * this function gets product by id and returns it
 * @param id - product id
 **/
export const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            price: true,
            views: true,
            images: true,
            categoryId: true,
        }
    })
    return product
}


/**
 * This function creates a new product
 * @param name - name of product
 * @param quantity - quantity of product available
 * @param price - price of product
 * @param category - category of product
 * @param images - list of links to images
 * @param options - Product_Variant in database
 * @param tags - strings that product is searchable by
 **/
export const createProduct = async (name: string, quantity: number, price: number, category: string, images: string[],options?: {size: {values: string[]}}, tags?: string[]) => {
    const product = await prisma.product.create({
        data: {
            name,
            price,
            category: {
                connectOrCreate: {
                    where: {
                        name: category
                    },
                    create:{
                        name: category
                    }
                }
            },
            ...(options && {
                ProductVariants: {
                    createMany: {
                        data: options.size.values.map(value => {
                            return {
                                name: value,
                                type: 'Size',
                                sku: name + category + value,
                                price: price,

                            }
                        })
                    }
                }
            })



        }
    })
    return product
}