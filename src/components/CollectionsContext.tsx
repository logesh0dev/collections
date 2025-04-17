import React, { createContext, useContext, useState, ReactNode } from "react";
import { MediaItem } from "./CreateCollectionModal"; 
import {data} from "./../data/collectionData"


interface Collection {
    name: string;
    items: MediaItem[];
}

interface CollectionsContextType {
    collections: Collection[];
    addCollection: (name: string, items: MediaItem[]) => void;
    setCollections: (collections: Collection[]) => void;
    searchValue:String;
    setSearchValue:(name: string) => void;
    updateCollectionName:(oldName: string, newName: string) => void;
    updateCollectionItems:(collectionName: string, updatedItems: MediaItem[]) => void;
}

// Define the type for the provider's props
interface CollectionsProviderProps {
    children: ReactNode;
}

const CollectionsContext = createContext<CollectionsContextType | undefined>(
    undefined
);

export const useCollections = () => {
    const context = useContext(CollectionsContext);
    if (!context) {
        throw new Error(
            "useCollections must be used within a CollectionsProvider"
        );
    }
    return context;
};

export const CollectionsProvider: React.FC<CollectionsProviderProps> = ({
    children,
}) => {

    const importedData = data as Collection[];

    const [collections, setCollections] = useState<Collection[]>(importedData);

    const [searchValue,setSearchValue] = useState("")

    const addCollection = (name: string, items: MediaItem[]) => {
        setCollections((prevCollections) => [
            ...prevCollections,
            { name, items },
        ]);
        console.log("12312312312312",collections)
    };

    const updateCollectionName = (oldName: string, newName: string) => {
        setCollections(prev =>
            prev.map(col =>
                col.name === oldName ? { ...col, name: newName } : col
            )
        );
    };

    const updateCollectionItems = (collectionName: string, updatedItems: MediaItem[]) => {
        setCollections(prev =>
            prev.map(c =>
                c.name === collectionName ? { ...c, items: updatedItems } : c
            )
        );
    };
    return (
        <CollectionsContext.Provider value={{ collections, addCollection,setCollections,updateCollectionName,updateCollectionItems,searchValue,setSearchValue }}>
            {children}
        </CollectionsContext.Provider>
    );
};
