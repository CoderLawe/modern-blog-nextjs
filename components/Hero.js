import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Hero() {
    const onClickItem = () => {

    }
    return (
        <Carousel
        className="mx-0 mt-8"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        >
            <div className="w-full h-[390px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
                <h1>Hello wrold</h1 >

                <div className="absolute mx-[370px] my-[50px] flex justify-center bg-gray-100 shadow-lg py-5 px-3 md:w-[500px] md:h-[200px]">
                    <div className="flex flex-col space-y-5">
                        <div className="flex justify-center">
                            <p className="text-xs text-gray-500 font-serif">Travel</p>
                        </div>

                        <div className="flex justify-center">
                            <h1 className="text-xl text-gray-700">Exploring Greece</h1>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 leading-5 ">
                                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full h-[390px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
                <h1>Hello wrold</h1 >

                <div className="absolute mx-[370px] my-[50px] flex justify-center bg-gray-100 shadow-lg py-5 px-3 md:w-[500px] md:h-[200px]">
                    <div className="flex flex-col space-y-5">
                        <div className="flex justify-center">
                            <p className="text-xs text-gray-500 font-serif">Travel</p>
                        </div>

                        <div className="flex justify-center">
                            <h1 className="text-xl text-gray-700">Exploring Greece</h1>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 leading-5 ">
                                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </Carousel>
    )
}

export default Hero
