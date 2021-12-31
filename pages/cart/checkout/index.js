import StripeFunc from "../../../components/stripe/PublishableKey"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../../../components/checkout_form"


const stripePromise = loadStripe("pk_test_51KCZ1WJXbqMuWcYwXBTzwRZUAFh8tS1aIsWddEPVFWglnetxh6SsftAeOA3ACA2ozBVsbME1crlSUSfIGK72RvLX00Ky8D7m2k");

export const Checkout = () => {

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


    return (<div>
        {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>)
        }
    </div>)
}

export default Checkout