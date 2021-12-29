import Image from "next/image";

export const LogoBanner: React.FC = () => {
    return (<div>
        <div className="flex    ">
            <div className="flex flex-col w-full items-center justify-center py-4 border-t-2 border-black">
                <h1 className="flex text-center font-mono text-5xl font-bold">HAPPY DAYS</h1>
                <Image src="/LOGOLOGO.svg" width={75} height={75} className=""/>
            </div>
        </div>
    </div>)
}

export default LogoBanner;