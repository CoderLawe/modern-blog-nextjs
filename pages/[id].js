import Header from "../components/Header";
import Image from 'next/image';
import ProfileCard from "../components/ProfileCard";
import Latest from "../components/Latest";
import SocialIcons from "../components/SocialIcons";
import InstagramGrid from "../components/InstagramGrid";
import Tag from "../components/Tag";
import Newsletter from "../components/Newsletter";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(post => {
        return {
            // Gets the params for each post and route
            params:{id: post.id.toString()}
        }
    })
    return{
       paths,
       fallback:true
    //    If route does not exist show 404 (fallback)
    }
}

export const getStaticProps = async (context) => {
       const id = context.params.id
    //    From params from paths returned from getStaticPaths
       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
       const data = await res.json()

       return{
           props:{
               post:data
           }
       }
}
export default function Detail({ post }){
    return(
        <div>
            <div>
                <Header />
            </div>

            <div className="block md:flex md:space-x-6 mx-20 mt-10">
                {/* Main  */}      
                {/* Left side */}
                <div className="flex-col space-y-5 w-[720px]">
                    <Image src="/images/greece.jpg" height={500} width={720} objectFit="cover"/>

                    <div className="">
                        <h1 className="italic font-serif text-3xl font-thin">{post.title}</h1>
                    </div>

                    <h5 className="date">December 13, 2021</h5>

                    <div className="block space-y-4">
                        {/* Paragraph text */}

                        <p className="paragraph-1">
                        {post.body}
                        </p>

                        <p className="paragraph-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit 
                         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p className="text-gray-700 font-serif text-lg font-thin">Conclusion</p>

                        <p className="paragraph-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit 
                         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                    <div className="flex-col space-y-5">
                        <div className="flex justify-center">
                            <SocialIcons />
                        </div>

                        <div className="flex space-x-5 justify-center">
                            <Tag title="Architecture"/>
                            <Tag title="Greece"/>
                            <Tag title="Travel"/>
                        </div>
                    </div>

                    {/* Left Profile */}
                    
                    <hr/>
                    <div className="flex space-x-5 shadow-sm py-5">
                        {/* Left Side */}
                        <div className="">
                            <img className=" h-24 rounded-full border-2 border-white object-cover" src="https://avatars.githubusercontent.com/u/52962217?v=4" alt="Profile Image"/>
                        </div>
                        {/* Right side */}

                     <div className="flex-col space-y-5">
                        <div className=" ">
                            <h2 className="text-gray-800 mt-5">Magnificent Themes</h2>
                        </div>

                        <div className="">
                            <p className="paragraph-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Lorem ipsum dolor sit amet...
                            </p>
                        </div>
                            <div>
                                <SocialIcons />
                            </div>
                     </div>

                

                    </div>
                    

                    {/* Newsletter */}
                    <div>
                        <Newsletter />
                    </div>
                   
                    {/* Suggested Section */}
                    <div className="flex-col space-y-5">
                        <div className="flex-col space-y-3">
                            <h2 className="subheading-2">You may also like</h2>
                            <div className="line-brown"/>
                        </div>

                        {/* Posts */}

                        <div className="flex space-x-4">
                            {/* Individual post */}
                            <div className="flex-col space-y-4">
                                <Image src="/images/greece.jpg" height={150} width={250} objectFit="cover"/>
                                <h2 className="subheading-2">Greek Creek View</h2>
                                <h5 className="date">December 14, 2021</h5>
                            </div>

                              {/* Individual post */}
                              <div className="flex-col space-y-4">
                                <Image src="/images/greece.jpg" height={150} width={250} objectFit="cover"/>
                                <h2 className="subheading-2">Greek Creek View</h2>
                                <h5 className="date">December 14, 2021</h5>
                            </div>



                              {/* Individual post */}
                              <div className="flex-col space-y-4">
                                <Image src="/images/greece.jpg" height={150} width={250} objectFit="cover"/>
                                <h2 className="subheading-2">Greek Creek View</h2>
                                <h5 className="date">December 14, 2021</h5>
                              </div>
                        </div>

                        <h1>Comments</h1>
                    </div>
                </div>

              

                <div className="flex-col space-y-7">
                    {/* Right side */}
                    <ProfileCard />

                    <div className="flex-col space-y-4 mt-5">
                        <h5 className="subheading-1">Latest Posts</h5>
                        <div className="line-brown"/>
                    </div>

                    <div>
                        <Latest />
                        <Latest />
                        <Latest />
                    </div>
                

                    <div>
                        <div className="flex-col space-y-4 mt-5">
                            <h5 className="subheading-1">Follow me</h5>
                            <div className="line-brown"/>
                        </div>

                        <div className="mt-5">
                            <SocialIcons />
                        </div>
                    </div>



                    <div>
                        <div className="flex-col space-y-4 mt-5">
                            <h5 className="subheading-1">Instagram</h5>
                            <div className="line-brown"/>
                        </div>

                        <div className="mt-5 w-[400px]">
                            <InstagramGrid />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
