import { NextApiResponse, NextApiRequest } from 'next';
const stripe = require("stripe")('sk_test_51KCZ1WJXbqMuWcYwsKIm2DDiRVqRrAPOeyv6dywbsYbonJEfiOSF4MJvrEYK6SNTH8irrsUVs88KrmrjuQsq2v8k00aqa3WJyq');

const express = require("express")
const app = express()

const YOUR_DOMAIN = 'http://localhost:3000';

export const CreateCheckoutSession = async (req , res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KCZvuJXbqMuWcYwIKesDoXE',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
};

export default CreateCheckoutSession