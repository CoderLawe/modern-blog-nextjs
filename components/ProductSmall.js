import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarIconOutline } from "@heroicons/react/outline"
import Image from 'next/image';
function ProductSmall() {
    return (
        <div>
            <div className="flex space-x-3 py-5">
                {/* Left sectopn */}
                <Image src="https://cdn.discordapp.com/attachments/817048198022430761/907844898345078794/pexels-anna-urlapova-2956954.jpg" height={150} width={150} objectFit="cover"/>

                {/* Right section */}

                <div className="flex-col space-y-4">
                    <h2 className="subheading-2 whitespace-nowrap">Handmade Coffee Cup</h2>
                    <h5 className="font-thin text-gray-500 font-serif">$15.55</h5>
                    <div className="flex ">
                        <StarIcon className="h-6 text-header-brown" />
                        <StarIcon className="h-6 text-header-brown" />
                        <StarIcon className="h-6 text-header-brown" />
                        <StarIcon className="h-6 text-header-brown" />
                        <StarIconOutline className="h-6 text-header-brown" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSmall
