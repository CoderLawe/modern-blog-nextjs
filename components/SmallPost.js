import Image from 'next/image';
function SmallPost({ title, image, body, id}) {
    return (
        <div className="md:flex block space-y-3 space-x-3 pt-6">
            {/* Left side */}
            <div className="flex-col pb-20">
                <Image src="/images/greece.jpg" height={140} width={260} objectFit="cover"/>

            </div>

            {/* Right Side */}
            <div className="flex-col">
                <div className="flex justify-start">
                    <p className="category">Lifestyle</p>
                </div>
                <div className="flex justify-start">
                    <h2 className="text-gray-800">Greek Awesomeness</h2>
                </div>

                <div className="w-[250px] mt-3">
                    <p className="paragraph-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.  Lorem ipsum dolor sit amet...</p>
                </div>
            </div>

        </div>
    )
}

export default SmallPost
