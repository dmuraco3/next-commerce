import { NextApiRequest, NextApiResponse } from "next";

import { listProducts } from "../../../helpers/product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const products = await listProducts(20)
    if(products) res.status(200).json(products)
    else res.status(500)

}