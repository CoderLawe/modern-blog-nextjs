import Image from 'next/image';
function RightMedium() {
    return (
        <div className="flex space-x-4 py-5">

            <div className="flex-col space-y-6">
                <h6 className="category">Lifestyle</h6>

                <h5 className="font-serif text-3xl font-extralight text-gray-700">Greek places</h5>

                <h6 className="category">December 11, 2021</h6>

                <div className="w-[350px]">
                    <p className="paragraph-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua.</p>
                </div>

            
                <button className="standard-btn">Read More</button>
               
            </div>


             {/* Left side */}
             <div className="h-[200px] w-[300px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
            </div>

            {/* Right side */}

            
        </div>
    )
}

export default RightMedium
