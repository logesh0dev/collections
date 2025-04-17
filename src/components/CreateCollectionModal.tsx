import React, { useState } from "react";
import usePhotos from "../hooks/usePhotos";
import useVideos from "../hooks/useVideos";
import { useCollections } from "./CollectionsContext"; // Import the context
import Card from "./Card";
import CardVideo from "./CardVideo";

export interface MediaItem {
    id: string;
    type: "photo" | "video";
    data: any;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSave: (collectionName: string, selectedItems: MediaItem[]) => void;
}

const CreateCollectionModal: React.FC<Props> = ({
    isOpen,
    onClose,
    onSave,
}) => {
    const { data: photos } = usePhotos();
    const { data: videos } = useVideos();
    const [selectedItems, setSelectedItems] = useState<MediaItem[]>([]);
    const [collectionName, setCollectionName] = useState("");
    const { addCollection } = useCollections(); // Access the context function to add collections
    const [selectedTab, setSelectedTab] = useState<"photos" | "videos">(
        "photos"
    ); // State to toggle between photos and videos

    if (!isOpen) return null;

    const handleToggleTab = (tab: "photos" | "videos") => {
        setSelectedTab(tab);
        // Optionally clear the selected items when changing tabs
        setSelectedItems([]);
    };

    const toggleItem = (item: MediaItem) => {
        const exists = selectedItems.find(
            (i) => i.id === item.id && i.type === item.type
        );
        if (exists) {
            setSelectedItems((prev) =>
                prev.filter((i) => !(i.id === item.id && i.type === item.type))
            );
        } else {
            setSelectedItems((prev) => [...prev, item]);
        }
    };

    const isSelected = (id: string, type: "photo" | "video") =>
        selectedItems.some((i) => i.id === id && i.type === type);

    const handleSave = () => {
        if (collectionName.trim() && selectedItems.length > 0) {
            addCollection(collectionName.trim(), selectedItems);
            console.log("asdf",selectedItems)
            setCollectionName("");
            setSelectedItems([]);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        Create New Collection
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-black text-xl px-2 cursor-pointer hover:ring-1 hover:ring-[#E51058] rounded-full"
                    >
                        &times;
                    </button>
                </div>

                <input
                    type="text"
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                    placeholder="Enter collection name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-sm"
                />

                {/* Toggle between Photos and Videos */}
                <div className="flex mb-4 space-x-4">
                    <button
                        onClick={() => handleToggleTab("photos")}
                        className={`text-sm hover:ring-1 hover:ring-[#E51058] rounded-full border border-gray-300 px-4 py-2 cursor-pointer ${
                            selectedTab === "photos"
                                ? "bg-[#E51058] text-white"
                                : ""
                        }`}
                    >
                        Photos
                    </button>
                    <button
                        onClick={() => handleToggleTab("videos")}
                        className={`text-sm hover:ring-1 hover:ring-[#E51058] rounded-full border border-gray-300 px-4 py-2 cursor-pointer ${
                            selectedTab === "videos"
                                ? "bg-[#E51058] text-white"
                                : ""
                        }`}
                    >
                        Videos
                    </button>
                </div>

                {/* Display the items based on the selected tab */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedTab === "photos" &&
                        photos?.photos.map((photo) => (
                            <div
                                key={photo.id}
                                className={`border-2 rounded-lg cursor-pointer p-1 ${
                                    isSelected(photo.id.toString(), "photo")
                                        ? "border-[#E51058]"
                                        : "border-transparent"
                                }`}
                                onClick={() =>
                                    toggleItem({
                                        id: photo.id.toString(),
                                        type: "photo",
                                        data: photo,
                                    })
                                }
                            >
                                <Card photo={photo} />
                            </div>
                        ))}

                    {selectedTab === "videos" &&
                        videos?.videos.map((video) => {
                            const file = video.video_files.find(
                                (f) => f.quality === "sd"
                            );
                            if (!file) return null;

                            return (
                                <div
                                    key={video.id}
                                    className={`border-2 rounded-lg cursor-pointer p-1 ${
                                        isSelected(video.id.toString(), "video")
                                            ? "border-[#E51058]"
                                            : "border-transparent"
                                    }`}
                                    onClick={() =>
                                        toggleItem({
                                            id: video.id.toString(),
                                            type: "video",
                                            data: { ...video, file },
                                        })
                                    }
                                >
                                    <CardVideo video={video} file={file} />
                                </div>
                            );
                        })}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={
                            !collectionName.trim() || selectedItems.length === 0
                        }
                        className="px-4 py-2 text-sm bg-[#E51058] text-white rounded-full hover:bg-pink-700 disabled:opacity-50 cursor-pointer"
                    >
                        Save Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCollectionModal;
