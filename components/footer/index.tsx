import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="border border-black box-border w-full">
            <div className="flex">
                <div className="flex flex-col bg-black items-center w-3/12 justify-center text-white font-mono py-10 border border-black">
                    <p className="text-2xl mb-5">HAPPY DAYS CLOTHING</p>
                    <p>contact@site.com</p>
                    <p>123-456-7890</p>

                </div>
                <div className="flex justify-around w-9/12 py-8 border border-black">
                    <div className="flex flex-col items-start">
                        <span className="my-2 text-lg font-semibold">Shop</span>
                        <span className="my-1">New</span>
                        <span className="my-1">Men</span>
                        <span className="my-1">Women</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="my-2 text-lg font-semibold">Our Store</span>
                        <span className="my-1">About Us</span>
                        <span className="my-1">Subscribe</span>
                        <span className="my-1">FAQ</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="my-2 text-lg font-semibold">Terms & Conditions</span>
                        <span className="my-1">Store Policy</span>
                        <span className="my-1">Shipping & Returns</span>
                        <span className="my-1">Payment Methods</span>
                    </div>
                </div>

            </div>
            <div className="flex">
                <div className="flex justify-around py-4 w-3/12 px-4 border border-black">
                    <FaFacebookF size={26}/>
                    <FaInstagram size={26} />
                    <FaPinterestP size={26} />
                    <FaTwitter size={26} />

                </div>
                <div className="flex justify-center items-center w-9/12 bg-primary border-black border">
                    <span>© 2021 by Happy Days LLC.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;