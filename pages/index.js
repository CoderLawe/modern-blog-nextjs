import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InstagramGrid from '../components/InstagramGrid'
import LargePost from '../components/LargePost'
import MediumSection from '../components/MediumSection'
import Newsletter from '../components/Newsletter'
import ProfileCard from '../components/ProfileCard'
import SmallCards from '../components/SmallCards'
import SmallPost from '../components/SmallPost'
import SocialIcons from '../components/SocialIcons'
import Tag from '../components/Tag'
import Image from "next/image";
import Latest from '../components/Latest'
import { StarIcon } from '@heroicons/react/solid'
import ProductSmall from '../components/ProductSmall'
import Footer from '../components/Footer'
import  Modal  from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// The Storyblok Client
// import Storyblok from "../lib/storyblok";
import StoryblokClient from "storyblok-js-client";
import DynamicComponent from '../components/DynamicComponent'
import  { useStoryblok } from "../lib/storyblok";
import { useContext, useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy, serverTimestamp, addDoc, updateDoc, deleteDoc, doc} from "@firebase/firestore";
import { db } from "../firebase";
import { DetailContext, ModalContext, UpdateBodyContext, UpdateImageContext, UpdateModalContext, DeleteModalContext , UpdateTitleContext } from '../components/context/DetailContext'
import LoadingScreen from '../components/LoadingScreen'

// import MainPostsSection from '../components/MainPostsSection'

const faker  = require('faker');

// const Storyblok = new StoryblokClient({
//   accessToken: "VF9PTpnwlp3TqQM0lsVUwwtt",
//   cache: {
//     clear: "auto",
//     type: "memory",
//   },
// });

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,


}
// export default function Home({ story, preview, images, posts }) {
export default function Home() {

  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
 
  // story = useStoryblok(story, enableBridge);
  // const [images, setImages] = useState(photos);
  // console.log("posts",posts)

  const [selectedPost, setSelectedPost] = useContext(DetailContext);
  const [updateOpen, setUpdateOpen] = useContext(UpdateModalContext);
  const [deleteOpen, setDeleteOpen] = useContext(DeleteModalContext)
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useContext(ModalContext)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("")
  // Use storage for image later
  const [body, setBody] = useState("");

  // For updating
 
  const [updateTitle, setUpdateTitle] = useContext(UpdateTitleContext);
  const [updateImage, setUpdateImage] = useContext(UpdateImageContext);
  const [updateBody, setUpdateBody] = useContext(UpdateBodyContext);
  
// Loading screen
  const [loading, setLoading] = useState(true);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
    setUpdateOpen(false);
  };

  const updateHandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setUpdateOpen(false);
  };

  const deleteHandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setDeleteOpen(false);
  };

  const addArticle = async (e) => {
    e.preventDefault();

  
    await addDoc(collection(db, 'articles'),{
      title, 
      image,
      body,
      timestamp:serverTimestamp()
    });

    console.log("Article succesfully added!")


    
}

const updateArticle = async (e) => {
  e.preventDefault()
  const articleRef = doc(db,"articles",selectedPost.id);

  
  await updateDoc( articleRef, {
      title:updateTitle,
      image:updateImage,
      body:updateBody
  })
  console.log("Post updated!")
}

const deleteArticle = async () => {
  const articleRef = doc(db,"articles",selectedPost.id);

  await deleteDoc(articleRef);

  
  console.log("Article succesfully deleted!")
  setDeleteOpen(false);
} 



useEffect(() => {
    setTimeout(() => {
        setLoading(false)
        console.log('Loading', loading)
    },10000)
},[])



    useEffect(() => {
      const stageUpdate = () => {
        if(selectedPost){
          setUpdateTitle(selectedPost.title)
          setUpdateImage(selectedPost.image)
          setUpdateBody(selectedPost.body)
        }
       
      }
      console.log(updateTitle)

      stageUpdate()


    },[selectedPost])

    useEffect(() => {
        onSnapshot(query(collection(db,'articles'),orderBy("timestamp","desc")), snapshot => {
          setArticles(snapshot.docs)
        })
        console.log("posts",articles)
    },[db])


  return (
    <div className={loading && 'bg-coolYellow'}>
   
   <Head>
        <title>Blog NextJs | Lawe Sosah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>

        {/*  Header section */}
      {loading ? (
        <LoadingScreen className={loading ? "flex": "hidden"}/>
      ): (
        <div data-aos="fade-up" data-aos-duration="4000" className={loading ? "hidden" : "flex"}>
          
        <div className="transition-all ease-in duration-500">
           <div className=" sticky top-0 z-50 ">
          <Header />
        </div>
              {/* Hero Section */}

     


{/* Modal start */}

  {/* UpdateModal start */}
  <Modal 
       open={updateOpen}
       onClose={updateHandleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box 
         sx={style}
         className="bg-white text-gray-800 focus:outline-none lg:w-[600px]"
         >
        <div>
          <div className="flex justify-center">
            <div className="flex-col space-y-5">
              <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Title</h1>
                <input onChange={(e) => setUpdateTitle(e.target.value)} className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={updateTitle} placeholder="Enter a title here"/>
              </div>
            

            {/* Image URL */}

            <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Image URL</h1>
                <input onChange={(e) => setUpdateImage(e.target.value)}className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={updateImage} placeholder="Enter an image URL here"/>
              </div>
            

            {/* Body */}

            <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Content</h1>
                <textarea onChange={(e) => setUpdateBody(e.target.value)}className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={updateBody} placeholder="Enter content here"/>
              </div>

              <div className="flex justify-center">
                <button  type="submit" onClick={updateArticle} className="bg-black border border-transparent hover:border-header-brown hover:bg-white hover:text-black px-8 py-5 text-gray-200 font-serif transform transition-all duration-300 ease-out">Submit</button>
              </div>
            
            </div>
             
             
          </div>

        </div>
          
         

         </Box>

       </Modal>

      {/* Update Modal end */}


{/* Delete Modal Start */}
      <Modal 
       open={deleteOpen}
       onClose={deleteHandleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box 
         sx={style}
         className="bg-white text-gray-800 focus:outline-none lg:w-[600px]"
         >
       
        <div className="block ">
            <div className="flex justify-center">
              <h1 className="font-serif text-lg text-gray-500">Are you sure you want to delete this post</h1>
            </div>

            <div className="flex justify-center space-x-4">
              <button onClick={deleteArticle}className="bg-green-500 p-5 font-serif">Yes</button>
              <button className="bg-red-500 p-5 font-serif">No</button>


            </div>
        </div>
          
         

         </Box>

       </Modal>
       {/* Delete MOdal end */}


{/* Modal start */}

  {/* MOdal start */}
  <Modal 
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box 
         sx={style}
         className="bg-white text-gray-800 focus:outline-none lg:w-[600px]"
         >
        <div>
          <div className="flex justify-center">
            <div className="flex-col space-y-5">
              <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Title</h1>
                <input onChange={(e) => setTitle(e.target.value)}className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={title} placeholder="Enter a title here"/>
              </div>
            

            {/* Image URL */}

            <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Image URL</h1>
                <input onChange={(e) => setImage(e.target.value)}className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={image} placeholder="Enter an image URL here"/>
              </div>
            

            {/* Body */}

            <div className="flex-col space-y-5">
                <h1 className="flex justify-center">Content</h1>
                <textarea onChange={(e) => setBody(e.target.value)}className="px-5 py-5 focus:outline-none border border-transparent focus:border-yellow-700 font-serif text-gray-500 rounded-lg transform transition-all duration-500 ease-out " value={body} placeholder="Enter content here"/>
              </div>

              <div className="flex justify-center">
                <button  onClick={addArticle} className="bg-black border border-transparent hover:border-header-brown hover:bg-white hover:text-black px-8 py-5 text-gray-200 font-serif transform transition-all duration-300 ease-out">Submit</button>
              </div>
            
            </div>
             
             
          </div>

        </div>
          
         

         </Box>

       </Modal>

      {/* Modal end */}

              <Hero />
            <div className="flex justify-center">
              <div className="md:mx-28  flex-col mx-auto space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-3 mt-10">
            
                <SmallCards />    
                <SmallCards />    
                <SmallCards />   
            </div>
        </div>
        <div className="md:mx-28  mt-5">
          <Newsletter />
        </div>

        <div className="md:mx-28  mt-5">
          {/* Posts section */}
          {/* <div className="flex justify-start">
            <div className="flex-col space-y-3">
              <h2 className="text-xl font-gray-700 font-serif">Travel Posts</h2>
              <h6 className="text-sm text-gray-600">Lorem ipsum and all that wordy goodness</h6>
              <div className="w-8 bg-header-brown p-[0.103rem]"/>
            </div>
            
          </div> */}
          <div className="md:flex justify-between block space-x-3 mt-5 divide-y-2">
            {/* Left side large card*/}
            <div>
              <div className="hidden md:flex justify-center">
                <LargePost/>
              </div>
              <hr className="mt-10 mb-8"/>
            {/* Medium card section */}

              {/* <div>
                <h1>{ story ? story.name : 'My Site' }</h1>
                <DynamicComponent blok={story.content} />
                
              </div> */}
              <div className="container mx-auto ">
                <h1>Testing</h1>
                <MediumSection key="12345" posts={articles}/>

              </div>

            </div>

            {/* Right */}
           <div className="md:flex md:justify-end">
            <div className="flex-col md:items-end">
              <div className="md:justify-end md:ml-10 mx-auto">
                <ProfileCard />
              </div>
              <div className="md:flex flex-col md:justify-end">
                <div className="flex-col space-y-3 md:ml-10">
                  <h3>Latest Posts</h3>
                  <div className="line-brown"/>
                </div>
              
              {/* <div>
                <MainPostsSection posts={posts} />
              </div> */}
              <div className="md:ml-10 divide-y-2 mt-5">
                      <Latest/>
                      <Latest/>
                      <Latest/>


                </div>



{/*  */}
                
              </div>
             


            {/* Follow me section */}
              <div className="md:ml-10">
                <div className="flex-col items-end space-y-4">
                  <h3 className="subheading-1"> Follow Me</h3>
                  <div className="line-brown"/>

                  <div>
                      <SocialIcons />
                  </div>
                </div>


              <div className="mt-10 block space-y-4">
              <div className="block space-y-4 md:ml-[50%]">
                  <h3 className="subheading-1 ">Instagram</h3>
                  <div className="line-brown"/>
              </div>

              <div>
                <InstagramGrid />
              </div>

            </div>


            <div className="block space-y-4  mt-10">
                <div className="block space-y-4">
                    <h3 className="subheading-1">Search</h3>
                    <div className="line-brown"/>
                </div>

                <div className="block space-y-4">
                  <input className="focus:outline-none focus:border-black border border-gray-700  p-3 md:w-[350px]" placeholder="Enter your search here"/>
                    <div>
                      <button className="large-btn">SEARCH</button>
                    </div>
                </div>
            </div>




            <div className="space-y-4  mt-10">
                  <div className="block space-y-4">
                    <h3 className="subheading-1">Tags</h3>
                    <div className="line-brown"/>
                  </div>

                  {/* Tags grid section */}

                  <div className="grid grid-cols-3 gap-4">
                    <Tag title="Architecture" />
                    <Tag title="AVOCADO" />
                    <Tag title="CARS" />
                    <Tag title="MUSTANGS" />
                    <Tag title="F1" />

                    <Tag title="Architecture" />
                    <Tag title="AVOCADO" />
                    <Tag title="CARS" />
                    <Tag title="MUSTANGS" />
                    <Tag title="F1" />

                    <Tag title="Architecture" />
                    <Tag title="AVOCADO" />
                    <Tag title="CARS" />
                    <Tag title="MUSTANGS" />
                    <Tag title="F1" />

                  </div>
            </div>
            </div>
           


            {/* Instagram Posts grid section */}

           


            {/* Search section */}

            

            {/* Tags section */}


            </div>
          </div>

           </div>

        {/* Insert pagination later */}

        {/* Horizontal Instagram Posts */}

        {/* <div className="mt-10 -ml-20 w-screen">
            <div className="flex">
              <Image src="/images/greece.jpg" height={200} width={250} objectFit="cover"/>
              <Image src="/images/greece.jpg" height={200} width={250} objectFit="cover"/>
              <Image src="/images/greece.jpg" height={200} width={250} objectFit="cover"/>
              <Image src="/images/greece.jpg" height={200} width={250} objectFit="cover"/>
            </div>
        </div> */}

        <div className="md:grid md:grid-cols-3 block space-y-5 mt-10 gap-x-8 container  px-5">
            {/* About me */}
            <div className="flex-col sace-y-5">
                <div className="flex-col space-y-4">
                    <h5 className="subheading-1">About Me</h5>

                    <div className="line-brown"/>
                </div>

                <div className="mt-5">
                    <p className="paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua
                    </p>
                </div>

                <div className="mt-5">
                  <SocialIcons />
                </div>
            </div>

            {/* Latest Posts */}

            <div className="flex-col">
                  <div className="flex-col space-y-4">
                    <h5 className="subheading-1">Latest Posts</h5>

                    <div className="line-brown"/>
                  </div>

                  <div className="flex-col divide-y-2 space-y-5 mt-5">
                      <Latest />
                      <Latest />
                      <Latest />

                      
                  </div>
            </div>

            {/* Latest Products */}

            <div className="flex-col">
                  <div className="flex-col space-y-4">
                    <h5 className="subheading-1">Latest Products</h5>

                    <div className="line-brown"/>
                  </div>

                  <div className="flex-col divide-y-2 space-y-5 mt-5">
                  <ProductSmall />
                  <ProductSmall />

                  
                      
                  </div>
            </div>
        </div>
          
        </div>

        </div>
        </div>
      )}

    </main>
          <div className="bottom-0">
          <Footer />

          </div>
        </div>
  )
}

// export async function getServerSideProps(context){
  
//   const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json());
//   console.log('posts',posts)
  
  
//   // const images = await fetch('https://jsonplaceholder.typicode.com/photos')
//   // .then((res) => res.json())

//   // const photos = [...Array(20)].map((_,i) => (
//   //   {
//   //       ...faker.
//   //       id: i
//   //   }))
//   //       // setImages(photos)
//   //       // console.log(photos)
  
//   return{
//     props:{
//       posts,
//   }
// }
// }
// export async function getStaticProps({ preview = false }) {
//   // home is the default slug for the homepage in Storyblok
//   let slug = "home";
//   // load the published content outside of the preview mode
//   let sbParams = {
//     version: "draft", // or 'published'
//   };

//   if (preview) {
//     // load the draft version inside of the preview mode
//     sbParams.version = "draft";
//     sbParams.cv = Date.now();
//   }

//   let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : null,
//       preview,
//     },
//     revalidate: 3600, // revalidate every hour
//   };
// }
// 
