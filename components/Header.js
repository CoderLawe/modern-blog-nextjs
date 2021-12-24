// import { InstagramIcon, FaceBookIcon, PinterestIcon, YouTubeIcon } from "@heroicons/react/outline"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid"
// import  InstagramIcon  from "@material-ui/icons/Instagram";
// import  PinterestIcon  from "@material-ui/icons/Pinterest";
// import  YoutubeIcon  from "@material-ui/icons/Youtube";
// import FaceBookIcon from "@material-ui/icons/Facebook"
import { useRouter } from "next/router";


function Header() {

    const router = useRouter();
    return (
        <header className="flex-col">
        {/* Large screen header */}
            <div className="hidden md:flex justify-between py-3 bg-header-brown w-screen">
                {/* Top Header */}

                {/* Left section */}

                <div className="flex space-x-7 ml-20">
                    <p className="text-gray-200 font-serif">Home</p>
                    <p className="text-gray-200 font-serif">Shop</p>
                    <p className="text-gray-200 font-serif">About</p>
                    <p className="text-gray-200 font-serif">Contact</p>

                </div>

                {/* Right  Section */}

                
                <div className="flex space-x-4 pr-20">
                    {/* Icons */}
                    
                    {/* <InstagramIcon className="h-2 text-gray-300"/>
                    
                    <FaceBookIcon className="h-2 text-gray-300"/>
                    <PinterestIcon className="h-2 text-gray-300"/>
                    <YoutubeIcon className="h-2 text-gray-300"/> */}
                    <ShoppingCartIcon className="h-2 text-gray-300" />
                    <SearchIcon className="h-2 text-gray-300" />
                    <ShoppingCartIcon className="h-2 text-gray-300" />
                    <SearchIcon className="h-2 text-gray-300" />
                </div>

            </div>

            <div className="hidden md:grid grid-cols-3 gap-10 bg-white shadow-lg mx-8 py-6 px-5 max-w-[95vw]">
                {/* Bottom Header */}
                <div className="pl-6">
                    <h2 onClick={() => router.push('/')} className="text-3xl text-gray-600 font-serif cursor-pointer">L a w e</h2>
                </div>

                <div className="flex space-x-5">
                    <h5 className="text-gray-800">Home</h5>
                    <h5 className="text-gray-800">Features</h5>
                    <h5 className="text-gray-800">Posts</h5>
                    <h5 className="text-gray-800">Shop</h5>
                    <h5 className="text-gray-800">About</h5>
                    <h5 className="text-gray-800">Contact</h5>

                </div>

                <div className="pr-10 flex justify-end space-x-3">
                    <ShoppingCartIcon className="h-6 text-gray-800" />
                    <SearchIcon className="h-6 text-gray-800" />

                </div>
            </div>
            
            {/* Small screen header */}
            <div className="md:hidden flex justify-between bg-header-brown w-screen items-center px-6 py-3">
                {/* Left side */}
                <div className="flex space-x-4 text-gray-200 p-3">
                <ShoppingCartIcon className="h-8" />
                    <SearchIcon className="h-8" />
                    <ShoppingCartIcon className="h-8" />
                    <SearchIcon className="h-8" />
                </div>

                {/* Right side */}
                <div className="flex space-x-4">
                    <ShoppingCartIcon className="h-6 text-gray-200"/>
                    <SearchIcon className="h-6 text-gray-200"/>

                </div>
            </div>

            <div className="md:hidden flex justify-between bg-white px-6 z-50 py-7">
                <h1 onClick={() => router.push('/')} className="text-3xl text-gray-600 font-serif cursor-pointer">L A W E</h1>

                <MenuIcon className="h-8 text-black cursor-pointer"/>
            </div>
        </header>
    )
}

export default Header