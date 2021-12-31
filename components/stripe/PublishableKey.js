import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

import React, { useEffect, useState } from "react"

export const StripeFunc = () => {

    const [publishableKey, setPublishableKey] = useState('');

    useEffect(() => {
        fetch('/api/keys', {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        })
        .then((res) => res.json())
        .then((data) => setPublishableKey(data.publishableKey));
    })

    if(!publishableKey){
        return "Loading..."
    }

    const stripe = loadStripe(publishableKey)

}

export default StripeFunc;