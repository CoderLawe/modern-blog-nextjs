import Image from "next/image";
function LargePost() {
    return (
        <div className="flex-col  space-y-4">
            {/* Top part with image */}
            <div className="md:order-2 h-[300px] w-[400px] md:h-[200px] md:w-[610px] relative">
                    <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
                </div>
            {/* Title, category and Date */}
            <div className="flex justify-start">
                <div className="flex-col space-y-3 items-center">
                    <h6 className="category">Travel</h6>
                    <h1 className="text-gray-600 md:text-xl text-2xl font-serif font-bold">Exploring Greece</h1>
                    <h6 className="text-gray-500 text-sm font-serif">December 10, 2021</h6>

                </div>
            </div>

            {/* Text */}
            <div className="md:w-[610px] w-[380px]  mt-6 ">
                <p className="text-gray-500 font-serif md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
           

            {/* Button */}

            <div className="flex justify-start mt-5">
                <button className="standard-btn">Read More</button>
            </div>
        </div>
    )
}

export default LargePost
