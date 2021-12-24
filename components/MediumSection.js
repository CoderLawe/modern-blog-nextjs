import { useEffect, useState } from "react"
import LeftMedium from "./LeftMedium"
import RightMedium from "./RightMedium"
import HomePosts from "./HomePosts";
function MediumSection({ posts, images}) {

    const [specPost, setSpecPost] = useState([]);

    useEffect(() => {
        setSpecPost(posts)
    },[])
    return (
        <div className="flex justify-center flex-col space-y-10 divide-y-2 ">
            {specPost.slice(0,1).map(post => (
                <>
                    <LeftMedium title={post.title} body={post.body} id={post.id}/>
                </>
            ))}

            {specPost.slice(1,2).map(post => (
                <>
                    <RightMedium title={post.title} body={post.body} id={post.id}/>
                </>
            ))}

            {specPost.slice(2,3).map(post => (
                <>
                    <LeftMedium title={post.title} body={post.body} id={post.id}/>
                </>
            ))}

            {specPost.slice(3,4).map(post => (
                <>
                    <RightMedium title={post.title} body={post.body} id={post.id}/>
                </>
            ))}
           
           
           
            
        </div>
    )
}

export default MediumSection
