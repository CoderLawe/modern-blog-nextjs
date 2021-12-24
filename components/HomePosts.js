import Image from "next/image";
import Link from "next/link";

function HomePosts({title, body, id}) {
    return (
        <div>
            <div className="flex flex-col space-y-10 divide-y-2">

            {/* Left-based cards */}
            <div className="flex space-x-4 py-5">
            {/* Left side */}
            <div className="h-[200px] w-[300px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
            </div>

            {/* Right side */}

            <div className="flex-col space-y-6">
                <h6 className="category">Lifestyle</h6>

                <h5 className="font-serif text-3xl font-extralight text-gray-700 truncate max-w-[250px]">{title}</h5>

                <h6 className="category">December 11, 2021</h6>

                <div className="w-[350px]">
                    <p className="paragraph-1">{body}</p>
                </div>

            <Link href={"/" + id} key={id}>            
                <button className="standard-btn">Read More</button>
            </Link> 
            </div>
        </div>

            </div>

            {/* Right-based cards */}
            <div className="flex space-x-4 py-5">

            <div className="flex-col space-y-6">
                <h6 className="category">Lifestyle</h6>

                <h5 className="font-serif text-3xl font-extralight text-gray-700 truncate max-w-[250px]">{title}</h5>

                <h6 className="category">December 11, 2021</h6>

                <div className="w-[350px]">
                    <p className="paragraph-1">{body}</p>
                </div>

            
                <Link href={"/"+id} key={id}>            
                    <button className="standard-btn">Read More</button>
                </Link>                
            </div>


             {/* Left side */}
             <div className="h-[200px] w-[300px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
            </div>

            {/* Right side */}

            
        </div>
        </div>
    )
}

export default HomePosts
