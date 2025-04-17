import React from 'react';
import { useCollections } from "./CollectionsContext"; // Adjust the path if needed
import Card from './Card';
import CardVideo from './CardVideo';

export interface MediaItem {
    id: string;
    type: "photo" | "video";
    data: any;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selectedCollection: string | null
}
const CollectionModal: React.FC<Props> = ({
    isOpen,
    onClose,
    selectedCollection,
}) => {

    const { collections } = useCollections();
    console.log("asdf", collections, useCollections)

    collections.filter
    console.log("asdf",
        collections.find(x => selectedCollection == x.name)

    )
    console.log("asdf", isOpen, onClose)
    if (!isOpen) return null;
    return (<div>
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        {selectedCollection}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-black text-xl px-2 cursor-pointer hover:ring-1 hover:ring-[#E51058] rounded-full"
                    >
                        &times;
                    </button>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        collections.find(x => selectedCollection == x.name)?.items.map((item) => (
                            <div key={item.id}>
                                {item.type === "photo" ? (
                                    <Card photo={item.data} />
                                ) : (
                                    <CardVideo video={item.data} file={item.data.file} />
                                )}
                            </div>
                        ))
                    }
                    {/* {selectedTab === "photos" &&
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
                        })} */}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                        Cancel
                    </button>

                </div>
            </div>
        </div>

    </div>
    )
}

export default CollectionModal
