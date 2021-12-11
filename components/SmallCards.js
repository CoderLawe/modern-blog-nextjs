import Image from "next/image";

function SmallCards() {
    return (
        <div className="h-52 w-80 relative">
            <div className=" h-52 w-80">
                <Image src="/images/greece.jpg" objectFit="cover" layout="fill"/>

                <div className="absolute top-20 left-20 bg-white py-3 px-8">
                    <span>Lifestyle</span>
                </div>
            </div>
        </div>
    )
}

export default SmallCards
