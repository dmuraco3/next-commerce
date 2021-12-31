import Stripe from "stripe"
import { useAppDispatch, useAppSelector } from "../../stores/hooks";


export const CreatePaymentIntent = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 50200,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
        
    })

    //console.log(paymentIntent)
    res.json(paymentIntent)
}

export default CreatePaymentIntent