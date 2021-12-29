import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { add, decrementQuantity, incrementQuantity, remove } from "../../stores/cart";
import { FaShirtsinbulk, FaShoppingBag } from "react-icons/fa";
import { useRouter } from "next/router";

const CartIcon: React.FC = () => {
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    const router = useRouter()

    return (
        <a className="relative hover:cursor-pointer" onClick={() => {
            router.push(`/cart`)
        }}>
            <FaShoppingBag size={26}/>
            <span className="absolute -top-2 left-4 h-6 w-6 rounded-full bg-primary flex justify-center items-center">{cart.items.length}</span>
        </a>
    )
}

export default CartIcon;