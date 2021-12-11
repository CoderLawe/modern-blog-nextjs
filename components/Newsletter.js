function Newsletter() {
    return (
        <div className="flex justify-between bg-gray-100 px-5 py-6 shadow-md">
            <div className="flex-col gap-y-3">
                {/* Left side */}
                <h5 className="text-gray-700 font-serif text-lg">Join my Newsletter</h5>
                <h6 className="text-gray-500 font-serif ">Stay in touch by joining my newsletter</h6>
            </div>

            <div className="flex space-x-2 items-center">
                {/* Right side */}
                <input className="focus:outline-none border focus:border-black h-9 transform transition-all duration-500 ease-out " placeholder="Your email Address"/>

                <button className="standard-btn">SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Newsletter
