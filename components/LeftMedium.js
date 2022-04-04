import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { DetailContext } from './context/DetailContext';
function LeftMedium({title, body, id, image,post}) {

    const[selectedPost, setSelectedPost] = useContext(DetailContext);


   

    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});

    const filterArticles = () => {
        articles.filter(article => article.id === "tPvBbkfGatD2V1SUxfRU").map((selectedArticle) => setArticle(selectedArticle))
    }
    useEffect(() => {
        onSnapshot(query(collection(db,'articles'),orderBy("timestamp","desc")), snapshot => {
          setArticles(snapshot.docs)
        })

        // filterArticles()
        console.log("selectedArticle",article)
    },[db])
    const setSelected  = (title, body, id, image) => {
        setSelectedPost({title,body,id,image})
        // console.log(selectedPost)
        filterArticles()
    }
    return (

            <div className="md:flex block space-y-4 md:space-y-0 space-x-4 py-5 px-3">
                {/* Left side */}
                
                <div className="h-[300px]  md:h-[200px] md:w-[300px] relative">
                    {
                        image ? 
                            (
                                <Image src={image.thumbnailUrl} layout="fill" objectFit="cover"/>

                            ):
                                (
                                    <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>

                                )

                    }
                    
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
                    <button onClick={() => setSelected(title, body, image, id)}className="standard-btn">Read More</button>
                </Link> 
                </div>
            </div>
    )
}

export default LeftMedium
