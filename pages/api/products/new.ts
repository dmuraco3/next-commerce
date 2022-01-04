import { PrismaClient} from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createProduct } from "../../../helpers/product";


const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST' ) {
        let body: {name: string, quantity: number, price: number, tags: string[], category: string, images: string[], options: {size: {values: string[]}}} = req.body

        body = {
            ...body,
            price: Number(body.price),
            quantity: Number(body.price)
        }

        console.log(body)
        const product = await createProduct(body.name, body.quantity, body.price, body.category, body.images, body.options)
        if(product) {
            res.status(200).json(product)
        } else {
            res.status(500).json(product)
        }
        
    } else {
        res.status(405).json('method not allowed')
    }
}