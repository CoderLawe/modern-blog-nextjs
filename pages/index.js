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

export default function Home() {
  return (
    <div className="flex flex-col pb-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>

        {/*  Header section */}

        <div className="sticky top-0 z-50">
          <Header />
        </div>
              {/* Hero Section */}

              <Hero />

        <div className="mx-28 grid grid-cols-3 gap-3 mt-10">
              <SmallCards />    
              <SmallCards />    
              <SmallCards />   
        </div>

        <div className="mx-28 mt-5">
          <Newsletter />
        </div>

        <div className="mx-28 mt-5">
          {/* Posts section */}
          {/* <div className="flex justify-start">
            <div className="flex-col space-y-3">
              <h2 className="text-xl font-gray-700 font-serif">Travel Posts</h2>
              <h6 className="text-sm text-gray-600">Lorem ipsum and all that wordy goodness</h6>
              <div className="w-8 bg-header-brown p-[0.103rem]"/>
            </div>
            
          </div> */}
          <div className="flex space-x-3 mt-5 divide-y-2">
            {/* Left side large card*/}
            <div>
              <LargePost/>

              <hr className="mt-10 mb-8"/>
            {/* Medium card section */}

              <div>
                <MediumSection />
              </div>
            </div>
          
            {/* Right */}
            <div className="flex-col">
              <div className="ml-10">
                <ProfileCard />
              </div>
              <div className="flex-col space-y-3 ml-10">
                <h3>Latest Posts</h3>
                <div className="line-brown"/>
              </div>
              <div className="divide-y-2 mt-5 ml-10">
                <SmallPost />
                <SmallPost />
                <SmallPost />
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

            </div>
          </div>

          
        </div>



    </main>
        </div>
  )
}
