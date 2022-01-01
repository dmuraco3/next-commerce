import {Product} from '@prisma/client'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';

const ProductLayout: React.FC<{products: Product[], loadMore: boolean, loadMoreAction: () => void}> = ({products, loadMore=true, loadMoreAction=() => {}}) => {
    
    const router = useRouter()
    
    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-6">
                {products.map(product => (
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition-all transform-gpu duration-300 hover:scale-110 ease-in-out" onClick={() => {
                        router.push(`/products/${product.id.toString()}`)
                    }}>
                        <div className="flex items-end justify-end h-56 w-full bg-cover aspect-w-1 aspect-h-1" >
                            <Image src={product.images[0]} layout="fill" />
                            <button className="snipcart-add-item"
                                data-item-id={product.id}
                                data-item-image={product.images[0]}
                                data-item-name={product.name}
                                data-item-price={product.price}
                                data-item-quantity={10}
                            >
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">{product.name}</h3>
                            <span className="text-gray-500 mt-2">{new Intl.NumberFormat("en-en", {
                                style: "currency",
                                currency: 'USD'
                            }).format(product.price)}</span>
                        </div>
                    </div>
                ))}

            </div>
            {loadMore && <div className="flex justify-center my-8">
                <button 
                    className="px-4 py-2 rounded-md bg-primary filter drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-sm"
                    onClick={(e) => {
                        e.preventDefault()
                        loadMoreAction()
                    }}
                >Load More</button>    
            </div>}

        </div>
    )
}

export default ProductLayout;