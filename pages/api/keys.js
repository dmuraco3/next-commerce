export const Handler = (req, res) => {
    if(req.method == "GET"){
        res.status(200).json({
            publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
        })
    }else{
        res.status(405).end("Metho Not Allowed")
    }
}

export default Handler