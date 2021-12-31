export const Secret = async (req, res) => {
    const intent = await fetch("http://localhost:3000/api/create-payment-intent", {
            Method: "GET",
    }).then(res => res.json())

    res.json({clientSecret: intent.client_secret})
}

export default Secret