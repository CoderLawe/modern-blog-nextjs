import Image from "next/image";

function SmallCards() {
    return (
        <div className="h-52 w-80 ">
            <div className=" h-52 w-80 relative">
                <Image src="/images/greece.jpg" objectFit="cover" layout="fill"/>

                <div className="absolute top-[50%] left-[34%] bg-white py-3 px-8">
                    <span>Lifestyle</span>
                </div>
            </div>
        </div>
    )
}

export default SmallCards
