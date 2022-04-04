import { createContext, useEffect, useState } from "react";

export const DetailContext = createContext()

export const DetailProvider = ({ children }) => {
    const [selectedPost, setSelectedPost] = useState()
    useEffect(() => {
        console.log(selectedPost)
    },[selectedPost])
    return(
        <DetailContext.Provider value={[selectedPost, setSelectedPost]}>
            {children}
        </DetailContext.Provider>
    )
}