import { createContext, useState } from "react"

export const CarouselContext = createContext();
export const SelectedFileProvider = createContext();
export const StagedContext = createContext();
export const ClickedContext = createContext();

// Create context
export const SectionProvider = ({ children }) => {
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [selectedFile, setSelectedFile]  = useState({});
    const [staged, setStaged] = useState(false);
    const [clicked, setClicked] = useState(false);
    


    return(
        <CarouselContext.Provider value={[carouselOpen, setCarouselOpen]}>
            <SelectedFileProvider.Provider value={[selectedFile, setSelectedFile]}>
                <StagedContext.Provider value={[staged, setStaged]}>
                    <ClickedContext.Provider value={[clicked, setClicked]}>
                        {children}
                    </ClickedContext.Provider>
                </StagedContext.Provider>
            </SelectedFileProvider.Provider>
        </CarouselContext.Provider>
    )
}