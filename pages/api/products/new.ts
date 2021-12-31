import { PrismaClient, Product_Variant, VariantType } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";



const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const productToAdd: {name: string, price: number, tags: string[], category: string, ProductVariants: {
        name: string,
        type: VariantType,
        price: number
        sku: string
    }[] } = {
        name: "Ice Cream Shirt",
        price: 190,
        tags: [
            "Mens t-shirt",
            "t shirt",
            "t-shirt"
        ],
        category: "Mens Shirts",
        ProductVariants: [
            {
                type: 'Size',
                name: 'Small',
                price: 190,
                sku: 'Mens/IceCreamShirt/Small'
            },
            {
                type: 'Size',
                name: 'Medium',
                price: 190,
                sku: 'Mens/IceCreamShirt/Medium '
            }
        ]
    }

    const product = await prisma.product.create({
        data: {
            name: productToAdd.name,
            price: productToAdd.price,
            tags: {
                connectOrCreate: productToAdd.tags.map(tag => {
                    return {
                        where: {
                            name: tag
                        },
                        create: {
                            name: tag
                        }
                    }
                })
            },
            category: {
                connectOrCreate: {
                    create: {
                        name: productToAdd.category
                    },
                    where: {
                        name: productToAdd.category
                    }
                }
            },
            ProductVariants: {
                createMany: {
                    data: productToAdd.ProductVariants.map(variant => {
                        return {
                            ...variant,
                        }
                    })
                }
            }


        }
    })

    res.status(200).json(product)
}