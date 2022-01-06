import Image from "next/image";
import  InstagramIcon  from "@material-ui/icons/Instagram";
import Footer from "./Footer";

function InstagramGrid() {
    return (
        <div className="grid grid-cols-3 gap-x-2 gap-y-2 px-3 relative">
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />


            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />


            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />
            <Image src="/images/greece.jpg" objectFit="cover" height={180} width={200} />


            <div className="flex">
                    <div className="bg-brown-gray flex space-x-2 px-10 md:px-12 py-4 absolute top-[50%] right-[11%] mx-auto">
                        <InstagramIcon className="text-gray-800"/>
                        <p className="font-thin text-gray-600 ">FOLLOW ON INSTAGRAM</p>
                    </div>
               
            </div>
          
        
        
        </div>
    )
}

export default InstagramGrid
