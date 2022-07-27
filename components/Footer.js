import { ClickedContext } from "./context/SectionsContext"
import { useContext } from "react";

function Footer() {
    const [clicked, setClicked] = useContext(ClickedContext);
    return (
        <footer className="md:flex block space-y-4 justify-between bg-header-brown position bottom-0  w-full mt-10 py-5 md:px-10">
            <div className="md:mx-10">

                {/* Left side */}
                <div className="flex justify-center space-x-8">
                    <h6 className="text-gray-300 italic font-serif">Privacy Policy</h6>
                    <h6 className="text-gray-300 italic font-serif">Cookie Policy</h6>
                    <h6 onClick={() => setClicked(!clicked)} className="text-gray-300 italic font-serif">Contact</h6>

                </div>

              

            </div>

              {/* Right side */}

              <div className="md:pr-10">
                    <h6 className=" text-gray-300 italic font-serif">2021. Created By L. Sosah based on Lucid Themes</h6>
                </div>
                
        </footer>
    )
}

export default Footer
