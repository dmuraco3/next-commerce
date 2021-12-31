import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import Link from 'next/link'
import { add, decrementQuantity, incrementQuantity } from "../../stores/cart";
import StripeFunc from "../../components/stripe/PublishableKey"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../../components/checkout_form"
import { json } from "stream/consumers";
import Stripe from "stripe"


const stripePromise = loadStripe("pk_test_51KCZ1WJXbqMuWcYwXBTzwRZUAFh8tS1aIsWddEPVFWglnetxh6SsftAeOA3ACA2ozBVsbME1crlSUSfIGK72RvLX00Ky8D7m2k");

const Cart: NextPage = () => {


    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {

        fetch('/api/secret', {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));

    }, [])

    StripeFunc()

    const appearance = {
        theme: "stripe"
    }
    const options = {
        clientSecret,
        appearance,
    }

    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    return (
        <div className="md:px-40 mt-8">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <div className="rounded-md border flex flex-col items-center justify-center mt-4 w-full">
                {cart && cart.items.map((item, index) => (
                    <div className="w-full px-10 border-b flex justify-between">
                        <div className="flex">
                            <img src="https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/700Wx700H-1013689-0320.jpg" width={75} height={75} />
                            <div className="flex flex-col ml-4">
                                <h1 className="text-lg font-semibold">{item.name}</h1>
                                <span>
                                    ${item.price}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="border rounded-md">
                                <button className="border-r px-3"

                                    onClick={(e) => {
                                        e.preventDefault()

                                        dispatch(decrementQuantity({ id: item.id }))
                                    }}
                                >-</button>
                                <input value={item.quantity} className="w-8 active:outline-none focus:outline-none text-center" />
                                <button className="border-l px-3"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(incrementQuantity({ id: item.id }))
                                    }}
                                >+</button>
                            </span>
                        </div>
                    </div>
                ))}
                {cart.items.length === 0 && (
                    <h1 className="my-20">Your cart is empty <Link href="/discover">
                        <a className="text-blue-600 font-semibold">go shopping</a>
                    </Link></h1>

                )}
            </div>
            <button onClick={(e) => {
                e.preventDefault()
                dispatch(add({
                    id: 1,
                    name: "shirt",
                    price: 100.99,
                    quantity: 1

                }))
            }}>
                add to cart
                <br />
                <br />
                <br />
                <br />
            </button>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>)}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Cart;