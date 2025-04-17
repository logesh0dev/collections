import React, { createContext, useContext, useState, ReactNode } from "react";
import { MediaItem } from "./CreateCollectionModal"; // Import the MediaItem type

interface Collection {
    name: string;
    items: MediaItem[];
}

interface CollectionsContextType {
    collections: Collection[];
    addCollection: (name: string, items: MediaItem[]) => void;
    searchValue:String;
    setSearchValue:(name: string) => void;
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
    const [collections, setCollections] = useState<Collection[]>([
        {
            name: "Collection 1",
            items: [
                {
                    "id": "31519254",
                    "type": "photo",
                    "data": {
                        "id": 31519254,
                        "width": 2544,
                        "height": 3670,
                        "url": "https://www.pexels.com/photo/abstract-blurred-pink-trees-in-spring-31519254/",
                        "photographer": "Eugene Golovesov",
                        "photographer_url": "https://www.pexels.com/@eugene-golovesov-1810803",
                        "photographer_id": 1810803,
                        "avg_color": "#AD8681",
                        "src": {
                            "original": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg",
                            "large2x": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "large": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                            "medium": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&h=350",
                            "small": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&h=130",
                            "portrait": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                            "landscape": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                            "tiny": "https://images.pexels.com/photos/31519254/pexels-photo-31519254.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                        },
                        "liked": false,
                        "alt": "Artistic blur effect on pink blossoming trees creating an abstract spring scene."
                    }
                },
                {
                    "id": "31539829",
                    "type": "photo",
                    "data": {
                        "id": 31539829,
                        "width": 3376,
                        "height": 6000,
                        "url": "https://www.pexels.com/photo/lonely-tree-silhouette-on-hill-in-vancouver-31539829/",
                        "photographer": "Alwyn S.",
                        "photographer_url": "https://www.pexels.com/@alwyn-s-2148718134",
                        "photographer_id": 2148718134,
                        "avg_color": "#909090",
                        "src": {
                            "original": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg",
                            "large2x": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "large": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                            "medium": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&h=350",
                            "small": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&h=130",
                            "portrait": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                            "landscape": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                            "tiny": "https://images.pexels.com/photos/31539829/pexels-photo-31539829.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                        },
                        "liked": false,
                        "alt": "A solitary tree silhouette on a grassy hill under a cloudy sky in Vancouver."
                    }
                },
                {
                    "id": "31483014",
                    "type": "photo",
                    "data": {
                        "id": 31483014,
                        "width": 4016,
                        "height": 6016,
                        "url": "https://www.pexels.com/photo/violinist-behind-lace-curtains-in-outdoor-setting-31483014/",
                        "photographer": "Ender Ergül",
                        "photographer_url": "https://www.pexels.com/@ender-ergul-2149553571",
                        "photographer_id": 2149553571,
                        "avg_color": "#969799",
                        "src": {
                            "original": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg",
                            "large2x": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "large": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                            "medium": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&h=350",
                            "small": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&h=130",
                            "portrait": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                            "landscape": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                            "tiny": "https://images.pexels.com/photos/31483014/pexels-photo-31483014.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                        },
                        "liked": false,
                        "alt": "Elegant portrait of a violinist behind lace curtains, showcasing music and outdoor ambiance."
                    }
                },
                {
                    "id": "31546996",
                    "type": "photo",
                    "data": {
                        "id": 31546996,
                        "width": 2568,
                        "height": 3424,
                        "url": "https://www.pexels.com/photo/vibrant-cocktail-glass-with-citrus-slice-31546996/",
                        "photographer": "Berkan Can",
                        "photographer_url": "https://www.pexels.com/@berkncn",
                        "photographer_id": 337573487,
                        "avg_color": "#6D6362",
                        "src": {
                            "original": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg",
                            "large2x": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "large": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                            "medium": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&h=350",
                            "small": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&h=130",
                            "portrait": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                            "landscape": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                            "tiny": "https://images.pexels.com/photos/31546996/pexels-photo-31546996.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                        },
                        "liked": false,
                        "alt": "A colorful cocktail with a citrus garnish, perfect for social gatherings."
                    }
                },
                {
                    "id": "31530553",
                    "type": "photo",
                    "data": {
                        "id": 31530553,
                        "width": 2160,
                        "height": 2700,
                        "url": "https://www.pexels.com/photo/close-up-of-vintage-zenit-camera-in-black-and-white-31530553/",
                        "photographer": "ysnapshotjournal",
                        "photographer_url": "https://www.pexels.com/@ysnapshotjournal-1675356955",
                        "photographer_id": 1675356955,
                        "avg_color": "#161616",
                        "src": {
                            "original": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg",
                            "large2x": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "large": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                            "medium": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&h=350",
                            "small": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&h=130",
                            "portrait": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                            "landscape": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                            "tiny": "https://images.pexels.com/photos/31530553/pexels-photo-31530553.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                        },
                        "liked": false,
                        "alt": "Monochrome photo of a vintage Zenit camera hanging around a neck, evoking nostalgia."
                    }
                }

            ]
        }
    ]);

    const [searchValue,setSearchValue] = useState("")

    const addCollection = (name: string, items: MediaItem[]) => {
        setCollections((prevCollections) => [
            ...prevCollections,
            { name, items },
        ]);
    };

    return (
        <CollectionsContext.Provider value={{ collections, addCollection,searchValue,setSearchValue }}>
            {children}
        </CollectionsContext.Provider>
    );
};
