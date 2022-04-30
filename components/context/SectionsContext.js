import { createContext, useState } from "react"

export const CarouselContext = createContext();
export const SelectedFileProvider = createContext();


export const SectionProvider = ({ children }) => {
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [selectedFile, setSelectedFile]  = useState({})

    return(
        <CarouselContext.Provider value={[carouselOpen, setCarouselOpen]}>
            <SelectedFileProvider.Provider value={[selectedFile, setSelectedFile]}>
                {children}
            </SelectedFileProvider.Provider>
        </CarouselContext.Provider>
    )
}