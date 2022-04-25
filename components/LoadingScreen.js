import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { StarIcon } from '@heroicons/react/solid'
import { useSpring, useTransition, animated, to } from "@react-spring/web";

const LoadingScreen = () => {

    const n = useRef(0)
    const styles = useSpring({
        loop:() => 20 > n.current++,
        from:{rotateZ:0},
        to:{rotateZ: 90},

    })
   
    return(
        <div>
            <div className="absolute w-[100%] h-[100%] bg-coolYellow flex justify-center items-center text-gray-500 text-5xl font-serif italic">
                {/* Typewriter start */}

                <div className="flex-col space-y-5">
                    <Typewriter 
                        onInit={(typewriter ) => {
                            typewriter.typeString("Hi there!")
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString("Have a look around!")
                            .pauseFor(3000)
                            .start()
                        }}
                    />

                    
                    <div className="text-3xl font-serif italic text-gray-700 animate-pulse flex justify-center">
                        <Typewriter 
                            onInit={(typewriter ) => {
                                typewriter
                                .pauseFor(3000)
                                .typeString("Welcome to my Blog!")

                                .start()
                            }}
                        />
                    </div>

                    <div className="flex justify-center">
                        <animated.div
                            style={{
                                ...styles
                            }}
                        >
                            <StarIcon className="h-16 text-gray-800 "/>

                        </animated.div>
                    </div>  

                </div>

             
            </div>
        </div>
   
    )
}

export default LoadingScreen