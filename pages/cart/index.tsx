import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import Link from 'next/link'
import { add, decrementQuantity, incrementQuantity } from "../../stores/cart";
import StripeFunc from "../../components/stripe/PublishableKey"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../../components/checkout_form"


const stripePromise = loadStripe("pk_test_51KCZ1WJXbqMuWcYwXBTzwRZUAFh8tS1aIsWddEPVFWglnetxh6SsftAeOA3ACA2ozBVsbME1crlSUSfIGK72RvLX00Ky8D7m2k");

const Cart: NextPage = () => {


    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if((window as any).SnipCart) {
            console.log((window as any).SnipCart.store.getState())
        }

    }, [])

    StripeFunc()

    const appearance = {
        theme: "stripe"
    }
    const options = {
        clientSecret,
        appearance,
    }

    return (
        <div className="md:px-40 mt-8">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <div className="rounded-md border flex flex-col items-center justify-center mt-4 w-full">
            </div>
            <button className="snipcart-add-item"
                data-item-id={1}
                data-item-image={"https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/700Wx700H-1013689-0320.jpg"}
                data-item-name={"cool t shirt"}
                data-item-price={80}
            >
                Add to Cart
            </button>
            
        </div>
    )
}

export default Cart;