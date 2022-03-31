import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavCard from "./NavCard";

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
            <div className="w-full h-[390px] relative ">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>

                <div className="flex">

                    <NavCard  title="Exploring Greece" body=" Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat."/>
                </div>
                
            </div>


            <div className="w-full h-[390px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>

                <NavCard title="Exploring Greece" body="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>

        </Carousel>
    )
}

export default Hero