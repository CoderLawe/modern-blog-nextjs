import LeftMedium from "./LeftMedium"
import RightMedium from "./RightMedium"

function MediumSection() {
    return (
        <div className="flex flex-col space-y-10 divide-y-2">
            <LeftMedium />
            <RightMedium />
            <LeftMedium />
            <RightMedium />
            <LeftMedium />
            <RightMedium />
            
        </div>
    )
}

export default MediumSection
