import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const handler = (req : NextApiRequest, res: NextApiResponse) => {
    const intent = (async () => {
  const response = await fetch('/secret');
  const {client_secret: clientSecret} = await response.json();
  // Call stripe.confirmCardPayment() with the client secret.
})();
}