import { Prisma} from "@prisma/client"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { FaShoppingCart } from "react-icons/fa"
import { AllProductId, getProductById } from "../../helpers/product"

export const getStaticPaths: GetStaticPaths = async () => {
    const allPostId = await AllProductId()
    
    const paths = allPostId.map((post) => ({
        params: {id: post.id.toString()},
    }))

    return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps<{
    product: Prisma.PromiseReturnType<typeof getProductById>
}> = async (context) => {
    const productId = context.params?.id
    const product = await getProductById(Number(productId))
    return {
        props: {
            product
        }, 
        revalidate: 10
    }

}

const ProductById : NextPage<{
    props: InferGetStaticPropsType<typeof getStaticProps>
}> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    return (
        <div className="">
            {router.isFallback ? (
                <div>
                    loading...
                </div>
            ) : (
                <div className="flex justify-center flex-wrap mx-20 md:mx-0">
                    <div className="w-full min-w-[300px] md:w-3/12">
                        <div className="flex w-full bg-cover aspect-w-1 aspect-h-1" >
                                <Image src={props.product?.images[0] as string} width={100} height={100} layout="fill" objectFit="cover"/>
                        </div>

                    </div>

                    <div className="w-full md:w-3/12 md:ml-48 h-full">
                        
                        <h3 className="text-gray-700 uppercase text-lg">Nike Air</h3>
                        <span className="text-gray-500 mt-3">$125</span>
                        <hr className="my-3" />
                        <div className="mt-2">
                            <label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
                            <div className="flex items-center mt-1">
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <span className="text-gray-700 text-lg mx-2">20</span>
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            {/* <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button> */}
                            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <button className="snipcart-add-item"
                                data-item-id={props.product?.id}
                                data-item-image={props.product?.images[0]}
                                data-item-name={props.product?.name}
                                data-item-price={props.product?.price}
                            >
                                <FaShoppingCart size={24}/>
                            </button>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductById;