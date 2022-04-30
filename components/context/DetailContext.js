import { createContext, useEffect, useState } from "react";

export const DetailContext = createContext()
export const ModalContext = createContext();
export const UpdateModalContext = createContext();
export const DeleteModalContext = createContext();
export const UpdateTitleContext = createContext();
export const UpdateImageContext = createContext();
export const UpdateBodyContext = createContext();
export const LoginModalContext = createContext();

export const ProviderContext = createContext();

export const DetailProvider = ({ children }) => {
    const [selectedPost, setSelectedPost] = useState();
    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const [updateTitle, setUpdateTitle] = useState("");
    const [updateImage, setUpdateImage] = useState("");
    const [updateBody, setUpdateBody] = useState("");
    const [providerData, setProviderData] = useState({});
    console.log("deleteOpen", deleteOpen)
    useEffect(() => {
        console.log(selectedPost)
    },[selectedPost])
    return(
        <DetailContext.Provider value={[selectedPost, setSelectedPost]}>
            <ModalContext.Provider value={[open, setOpen]}>
                <UpdateModalContext.Provider value={[updateOpen, setUpdateOpen]}>
                    <UpdateTitleContext.Provider value={[updateTitle, setUpdateTitle]}>
                        <UpdateImageContext.Provider value={[updateImage, setUpdateImage]}>
                            <UpdateBodyContext.Provider value={[updateBody, setUpdateBody]}>
                                <DeleteModalContext.Provider value={[deleteOpen, setDeleteOpen]}>
                                    <LoginModalContext.Provider value={[loginOpen, setLoginOpen]}>
                                        <ProviderContext.Provider value={[providerData, setProviderData]}>
                                            {children}
                                        </ProviderContext.Provider>
                                    </LoginModalContext.Provider>
                                </DeleteModalContext.Provider>
                            </UpdateBodyContext.Provider>
                        </UpdateImageContext.Provider>
                    </UpdateTitleContext.Provider>
                </UpdateModalContext.Provider>
            </ModalContext.Provider>
        </DetailContext.Provider>
    )
}