import Image from 'next/image';
import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
import { DeleteModalContext, DetailContext, UpdateBodyContext, UpdateImageContext, UpdateModalContext, UpdateTitleContext } from './context/DetailContext';
import { onSnapshot, collection, query, orderBy, doc, deleteDoc } from "@firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import { db } from "../firebase";

function RightMedium({ title, body, id,image }) {

    const[selectedPost, setSelectedPost] = useContext(DetailContext);
    const [updateOpen, setUpdateOpen] = useContext(UpdateModalContext);
    const [deleteOpen, setDeleteOpen] = useContext(DeleteModalContext);

    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});
    const [updateTitle, setUpdateTitle] = useContext(UpdateTitleContext);
    const [updateImage, setUpdateImage] = useState(UpdateImageContext);
    const [updateBody, setUpdateBody] = useState(UpdateBodyContext);

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
        // filterArticles()
    }

    const updateSetSelected  = (title, body, id, image) => {
        setSelectedPost({title,body,id,image})
        // console.log(selectedPost)
        // filterArticles()
        // setUpdateTitle(title)
        // setUpdateBody(body)
        // setUpdateImage(image)
      
        console.log("SELECTED_POST",selectedPost)
        setUpdateOpen(true)

    }

    
    const stageDelete = () => {
        setSelectedPost({title, body, id, image})
        setDeleteOpen(true)

    }

    // const deleteArticle = async () => {

    //     const articleRef = doc(db,"articles", selectedPost.id)
    //     await deleteDoc(articleRef)
    //     console.log("Post deleted succesfully!")
    // }
    return (
        <div className="md:flex block space-y-4 md:space-y-0 space-x-4 py-5 px-3">
                {/* Left side */}
                
                <div className="md:order-2 h-[300px]  md:h-[200px] md:w-[300px] relative">
                    <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>
                </div>

                {/* Right side */}

                <div className="md:order-1flex-col space-y-6">
                    <div className="flex justify-between">
                        <h6 className="category">Lifestyle</h6>

                        <EditIcon onClick={() => updateSetSelected(title, body, id, image)}className="text-green-400 h-6 cursor-pointer"/>
                        <DeleteIcon onClick={() => stageDelete()}className="text-red-500 h-6 cursor-pointer"/>

                    </div>
                    <h5 className="font-serif text-3xl font-extralight text-gray-700 truncate max-w-[250px]">{title}</h5>

                    <h6 className="category">December 11, 2021</h6>

                    <div className="md:w-[300px]">
                        <p className="md:paragraph-1 text-gray-500 leading-6 font-serif">{body}</p>
                    </div>

                    <Link href={"/" + id} key={id}>            
                    <button onClick={() => setSelected(title, body, id, image)}className="standard-btn">Read More</button>
                </Link> 
                </div>
            </div>
    )
}

export default RightMedium
