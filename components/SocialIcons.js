import  InstagramIcon  from "@material-ui/icons/Instagram";
import  PinterestIcon  from "@material-ui/icons/Pinterest";
import  YoutubeIcon  from "@material-ui/icons/Youtube";
import FaceBookIcon from "@material-ui/icons/Facebook"

function SocialIcons() {
    return (
        <div className="flex space-x-4">
            <InstagramIcon className="h-3 text-gray-700"/>
            <FaceBookIcon className="h-3 text-gray-700"/>
            <PinterestIcon className="h-3 text-gray-700"/>
            <YoutubeIcon className="h-3 text-gray-700"/>
        </div>
    )
}

export default SocialIcons
