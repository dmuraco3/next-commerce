import { FaTag } from "react-icons/fa";

const Navbar: React.FC<{activeTab: string}> = () => {
    return (
        <div className="h-full bg-white w-3/12 filter drop-shadow-lg flex flex-col">
            <div className="w-full border-b pb-4 px-3">
                <span className=" text-xl font-bold">My Admin</span>
            </div>
            <div className="mx-3 mt-8">
                <span className="text-lg flex items-center">
                    <FaTag size={18} className="mr-2"/>
                    Products
                </span>
                <div className="flex flex-col pl-8">
                    <button className="text-gray-500 font-medium my-2 text-left">All Products</button>
                    <button className="text-gray-500 font-medium my-2 text-left">Add Product</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
