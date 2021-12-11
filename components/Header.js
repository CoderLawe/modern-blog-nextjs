// import { InstagramIcon, FaceBookIcon, PinterestIcon, YouTubeIcon } from "@heroicons/react/outline"
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid"
import  InstagramIcon  from "@material-ui/icons/Instagram";
import  PinterestIcon  from "@material-ui/icons/Pinterest";
import  YoutubeIcon  from "@material-ui/icons/Youtube";
import FaceBookIcon from "@material-ui/icons/Facebook"

function Header() {
    return (
        <header className="flex-col">
            <div className="flex justify-between py-3 bg-header-brown">
                {/* Top Header */}

                {/* Left section */}

                <div className="flex space-x-7 ml-20">
                    <p className="text-gray-200 font-serif">Home</p>
                    <p className="text-gray-200 font-serif">Shop</p>
                    <p className="text-gray-200 font-serif">About</p>
                    <p className="text-gray-200 font-serif">Contact</p>

                </div>

                {/* Right  Section */}

                
                <div className="flex space-x-4 mr-20">
                    {/* Icons */}
                    <InstagramIcon className="h-3 text-white"/>
                    
                    <FaceBookIcon className="h-3 text-white"/>
                    <PinterestIcon className="h-3 text-white"/>
                    <YoutubeIcon className="h-3 text-white"/>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-10 bg-white shadow-lg mx-5 py-6 px-5 ">
                {/* Bottom Header */}
                <div className="pl-6">
                    <h1 className="text-3xl text-gray-600 font-serif">L a w e</h1>
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
            
        </header>
    )
}

export default Header