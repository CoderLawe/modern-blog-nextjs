import { useEffect, useState } from "react"
import LeftMedium from "./LeftMedium"
import RightMedium from "./RightMedium"
import HomePosts from "./HomePosts";
function MediumSection({ posts}) {

    const [specPost, setSpecPost] = useState([]);

    useEffect(() => {
        setSpecPost(posts)
        console.log('specPost', posts)
    },[])
    return (
        <div className="flex justify-center flex-col space-y-10 divide-y-2 ">
          
            {posts.slice(0,1).map(post => (
                <>
                    <LeftMedium key={post.id} title={post.data().title} body={post.data().body} id={post.id}  posts={post} />
                </>
            ))}

            {posts.slice(1,2).map(post => (
                <>
                    <RightMedium  key={post.id} title={post.data().title} body={post.data().body} id={post.id} posts={post}/>
                </>
            ))}

            {posts.slice(2,3).map(post => (
                <>
                    <LeftMedium key={post.id} title={post.data().title} body={post.data().body} id={post.id} posts={post} />
                </>
            ))}

            {posts.slice(3,4).map(post => (
                <>
                    <RightMedium  key={post.id} title={post.data().title} body={post.data().body} id={post.id} posts={post}/>
                </>
            ))}
           
           
           
            
        </div>
    )
}

export default MediumSection
