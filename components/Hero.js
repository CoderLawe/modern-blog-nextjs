import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavCard from "./NavCard";
import { CameraIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import CrudToggles from "./CrudToggles";

function Hero() {
    const onClickItem = () => {

    }

    const [slides, setSlides] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);



  const addImageToPost = (e) => {
    const reader = new FileReader();

    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result)
      }
    }
}

  const addCarousel = async () => {
    if(loading) return;

    setLoading(true);

    // Create a post and add it to the firestore 'posts' collection

    // Get the post id from the newly created post.

    // Upload the image to firebase storage with the post id
    // Get a download URL from storage to storage and update original post with image

    const docRef = await addDoc(collection(db, 'carousel'), {
      carouselTitle,
      carouselImage,
      carouselTag,
      carouselDescription,
      timestamp: serverTimestamp()
    })

    console.log("New doc added with Id", docRef.id)

    const imageRef = ref(storage, `carousel/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile,"data_url").then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, 'carousel', docRef.id),{
        image: downloadURL
      })
    })

    setCarouselOpen(false);
    setLoading(false);
    setSelectedFile(null);
  }



    useEffect(() => {
        // Getting carousel slides

        onSnapshot(query(collection(db,'carousel'),orderBy("timestamp","desc")), snapshot => {
          setSlides(snapshot.docs)
        })
        console.log("posts",slides)
    },[db])

    useEffect(() => {

    },[])
    return (
        <Carousel
        className="mx-0 mt-8"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        >
                {slides.map((slide) => (
                    <>
                        <div className="w-full h-[390px] relative ">
                          {
                            slide.data().image?(
                            <>
                              {/* <CrudToggles className="top-0 -right-0"/> */}
                              <img src={slide.data().image} className="object-cover"/>

                              {/* <Image src={slide.data().image} layout="fill" objectFit="cover"/> */}
                            </>
                             

                            ):(
                              <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>

                            )
                          }

                        <div className="flex">

                            <NavCard  title={slide.data().title} body={slide.data().description} image={slide.data().image}/>
                        </div>

                        </div>

                    </>
                ))}
          

            <div className="w-full h-[390px] relative">
                <Image src="/images/greece.jpg" layout="fill" objectFit="cover"/>

                <NavCard title="Exploring Greece" body="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>

        </Carousel>
    )
}

export default Hero