import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {items} = req.body
      
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        // [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: 'price_1KCZvuJXbqMuWcYwIKesDoXE',
        //     quantity: 1,
        //   }, {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: 'price_1KCZvuJXbqMuWcYwIKesDoXE',
        //     quantity: 1,
        //   },
        // ]
        line_items: items

          
        ,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      console.log(session)
      res.status(200).json({url: session.url});
    } catch (err : any) {
      console.error(err)
      res.status(500).json(err.message as string);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}