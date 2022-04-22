import { useState } from "react";

const LoadingScreen = () => {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeOut(() => {
    //         setLoading(false)
    //     },18000)
    // },[])
    return(
        <div>
            <div className="absolute w-[100%] h-[100%] bg-gray-400 flex justify-center items-center">
                <h1 className="text-gray-700 text-4xl font-serif">This is a loading screen</h1>
            </div>
        </div>
   
    )
}

export default LoadingScreen