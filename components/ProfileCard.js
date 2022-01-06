import { BookOpenIcon, CameraIcon, MenuIcon, PhoneIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid"
import Image from "next/image";
function ProfileCard() {
    return (
        <div className="flex justify-end">
            <div className="flex-col items-center space-y-5 md:w-[400px] px-3">
                <div className="">
                    <div className="relative">
                        <Image src="/images/greece.jpg" height={190} width={400} objectFit="cover"/>

                        <div className="">
                            <img className="absolute h-24 rounded-full border-2 border-white  top-[50%] left-[40%] " src="https://avatars.githubusercontent.com/u/52962217?v=4" alt="Profile Image"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <h2 className="text-gray-800 mt-5">Magnificent Themes</h2>
                </div>
                <div className="md:w-[360px]">
                    <p className="paragraph-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Lorem ipsum dolor sit amet...
                    </p>
                </div>
            
            <div className="flex justify-center space-x-8 pb-8">
                    <PhoneIcon className="h-3 text-gray-800"/>               
                    <BookOpenIcon className="h-3 text-gray-800"/>
                    <CameraIcon className="h-3 text-gray-800"/>
                    <CameraIcon className="h-3 text-gray-800"/>
                </div>
            </div>
        </div>
        
    )
}

export default ProfileCard
