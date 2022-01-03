import { PrismaClient} from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createProduct } from "../../../helpers/product";


const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST' ) {
        const body: {name: string, quantity: number, price: number, tags: string[], category: string, images: string[], options: {size: {values: string[]}}} = req.body
        createProduct(body.name, body.quantity, body.price, body.category, body.images, body.options)
    } else {
        res.status(405).json('method not allowed')
    }
}