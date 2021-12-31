import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import Link from 'next/link'
import { add, decrementQuantity, incrementQuantity } from "../../stores/cart";
import Checkout from "../../components/stripe_checkout"

const Cart: NextPage = () => {

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
                {cart.items.length > 0 && (
                    <Link href="cart/checkout/">Checkout</Link>
                )}
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
            <Checkout/>
        </div>
    )
}

export default Cart;