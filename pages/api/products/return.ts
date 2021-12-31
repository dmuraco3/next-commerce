import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')('sk_test_51KCZ1WJXbqMuWcYwsKIm2DDiRVqRrAPOeyv6dywbsYbonJEfiOSF4MJvrEYK6SNTH8irrsUVs88KrmrjuQsq2v8k00aqa3WJyq');

export const Return = async (req : NextApiRequest, res : NextApiResponse) => {
    const products = await stripe.products.list({
      limit: 3,
    })

    res.json(products)
}

export default Return