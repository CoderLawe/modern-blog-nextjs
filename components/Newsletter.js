function Newsletter() {
    return (
        <div className="md:flex block space-y-6 md:space-y-0 mx-12 text-center justify-between bg-gray-100 px-5 py-6 shadow-md">
            <div className="flex-col gap-y-3">
                {/* Left side */}
                <h5 className="text-gray-700 font-serif text-lg">Join my Newsletter</h5>
                <h6 className="text-gray-500 font-serif ">Stay in touch by joining my newsletter</h6>
            </div>

            <div className="flex justify-center md: space-x-2 items-center">
                {/* Right side */}
                <input className="focus:outline-none border focus:border-black h-9 transform transition-all duration-500 ease-out " placeholder="Your email Address"/>

                <button className="hidden md:flex standard-btn">SUBSCRIBE</button>
            </div>
                <button className="bg-brown-gray font-serif font-thin px-12 text-gray-500  py-3 md:hidden">SUBSCRIBE</button>
        </div>
    )
}

export default Newsletter
