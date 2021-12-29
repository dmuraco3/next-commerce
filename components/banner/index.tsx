export const Banner:React.FC<{message: string}> = ({message}) => {
    return (<div>
        <div className="flex bg-black">
            <span className="text-white w-full text-center py-1 text-2xl font-mono">{message}</span>
        </div>
    </div>)
}

export default Banner;