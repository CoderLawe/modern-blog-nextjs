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
 
// The Storyblok Client
// import Storyblok from "../lib/storyblok";
import StoryblokClient from "storyblok-js-client";
import DynamicComponent from '../components/DynamicComponent'
import  { useStoryblok } from "../lib/storyblok";
// import MainPostsSection from '../components/MainPostsSection'

 
const Storyblok = new StoryblokClient({
  accessToken: "VF9PTpnwlp3TqQM0lsVUwwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
// export default function Home({ story, preview, images, posts }) {
export default function Home({  posts }) {

  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
 
  // story = useStoryblok(story, enableBridge);
  return (
    <div className="">
    <div className=" block ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>

        {/*  Header section */}

        <div className=" sticky top-0 z-50 ">
          <Header />
        </div>
              {/* Hero Section */}

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
          <div className="md:flex block space-x-3 mt-5 divide-y-2">
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
                <MediumSection posts={posts}  />
              </div>

            </div>

            {/* Right */}
            <div className="flex-col">
              <div className="flex  justify-center md:block md:ml-10 mx-auto">
                <ProfileCard />
              </div>
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


            {/* Follow me section */}

            <div className="ml-10">
              <div className="block space-y-4">
                <h3 className="subheading-1"> Follow Me</h3>
                <div className="line-brown"/>

                <div>
                    <SocialIcons />
                </div>
              </div>
            </div>


            {/* Instagram Posts grid section */}

            <div className="ml-10 mt-10 block space-y-4">
              <div className="block space-y-4">
                  <h3 className="subheading-1">Instagram</h3>
                  <div className="line-brown"/>
              </div>

              <div>
                <InstagramGrid />
              </div>

            </div>


            {/* Search section */}

            <div className="block space-y-4 ml-10 mt-10">
                <div className="block space-y-4">
                    <h3 className="subheading-1">Search</h3>
                    <div className="line-brown"/>
                </div>

                <div className="block space-y-4">
                  <input className="focus:outline-none focus:border-black border border-gray-700 md:w-[380px] p-3" placeholder="Enter your search here"/>
                    <div>
                      <button className="large-btn">SEARCH</button>
                    </div>
                </div>
            </div>

            {/* Tags section */}

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



    </main>
          {/* <div className="bottom-0">
          <Footer />

          </div> */}
        </div>
      </div>
  )
}

export async function getServerSideProps(context){
  
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  
  // const images = await fetch('https://jsonplaceholder.typicode.com/photos')
  // .then((res) => res.json())
  return{
    props:{
      posts,
      // images
  }
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
  }
}