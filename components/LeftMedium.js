import Image from 'next/image';
import Link from 'next/link';
function LeftMedium({title, body, id}) {
    return (
            <div className="md:flex block space-y-4 md:space-y-0 space-x-4 py-5 px-3">
                {/* Left side */}
                
                <div className="h-[300px]  md:h-[200px] md:w-[300px] relative">
                    <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
                </div>

                {/* Right side */}

                <div className="flex-col space-y-6">
                    <h6 className="category">Lifestyle</h6>

                    <h5 className="font-serif text-3xl font-extralight text-gray-700 truncate max-w-[250px]">{title}</h5>

                    <h6 className="category">December 11, 2021</h6>

                    <div className="md:w-[300px]">
                        <p className="md:paragraph-1 text-gray-500 leading-6 font-serif">{body}</p>
                    </div>

                <Link href={"/" + id} key={id}>            
                    <button className="standard-btn">Read More</button>
                </Link> 
                </div>
            </div>
    )
}

export default LeftMedium
