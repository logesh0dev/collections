import { useLocation } from "react-router-dom";
import usePhotos from "../hooks/usePhotos";
import useVideos from "../hooks/useVideos";
import Card from "./Card";
import CardVideo from "./CardVideo";
import { useCollections } from "./CollectionsContext";
import { useEffect, useState } from "react";
import CollectionModal from "./CollectionModal";

const Collections = () => {
    const location = useLocation();
    const { data: photos } = usePhotos();
    const { data: videos } = useVideos();
    const { collections, searchValue } = useCollections(); 

    const isPhotosTab = location.pathname === "/photos";
    const isVideosTab = location.pathname === "/videos";
    const isAllFilesTab = location.pathname === "/all-files";

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedCollection, setSelectedCollections] = useState<string | null>(null);




    return (
        <section className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isPhotosTab &&
                (
                    photos?.photos.filter(x => !searchValue || x.photographer.toLowerCase().startsWith(searchValue.toLowerCase())).length ? (
                        photos?.photos
                            .filter(x => !searchValue || x.photographer.toLowerCase().startsWith(searchValue.toLowerCase()))
                            .map((p) => <Card photo={p} key={p.id} />)
                    ) : (
                        <div className="col-span-full text-center text-gray-500">No photos found</div>
                    )
                )}
            {/* photos?.photos.map((p) => <Card photo={p} key={p.id} />)} */}

            {isVideosTab && (
                videos?.videos.filter(x => !searchValue || x.user.name.toLowerCase().startsWith(searchValue.toLowerCase())).length ? (
                    videos?.videos
                        .filter(x => !searchValue || x.user.name.toLowerCase().startsWith(searchValue.toLowerCase()))
                        .map((video) => {
                            const file = video.video_files.find((f) => f.quality === "sd");
                            if (!file) return null;

                            return (
                                <CardVideo video={video} file={file} key={video.id} />
                            );
                        })
                ) : (
                    <div className="col-span-full text-center text-gray-500">No videos found</div>
                )
            )}

            {isAllFilesTab && (
                collections.filter(x => !searchValue || x.name.toLowerCase().startsWith(searchValue.toLowerCase())).length ? (
                    collections
                        .filter(x => !searchValue || x.name.toLowerCase().startsWith(searchValue.toLowerCase()))
                        .map((collection) => (
                            <div
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setSelectedCollections(collection.name);
                                }}
                                key={collection.name}
                                className="flex flex-col gap-4 rounded-lg cursor-pointer"
                            >
                                {
                                    collection.items.map((item) =>
                                        item.type === "photo" ? (
                                            <div className="flex flex-col gap-1" key={item.id}>
                                                <div className="bg-gray-200 rounded-xl overflow-hidden">
                                                    <img src={item?.data?.src?.landscape} alt={item?.data?.alt} />
                                                </div>
                                                <div className="ml-2">
                                                    <div className="font-medium">{collection?.name}</div>
                                                </div>
                                                <div className="ml-2 font-light text-gray-500 text-xs">
                                                    {collection?.items?.length + " Photos"}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-1" key={item.id}>
                                                <div className="bg-gray-200 rounded-xl overflow-hidden">
                                                    <img src={item?.data?.image} alt="Video preview" className="w-full" />
                                                </div>
                                                <div className="ml-2">
                                                    <div className="font-medium">{collection?.name}</div>
                                                </div>
                                                <div className="ml-2 font-light text-gray-500 text-xs">
                                                    {collection?.items?.length + " Videos"}
                                                </div>
                                            </div>
                                        )
                                    )[0]
                                }
                            </div>
                        ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No collections found</div>
                )
            )}

            <CollectionModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedCollections(null)
                }}
                selectedCollection={selectedCollection}
            />
        </section>
    );
};

export default Collections;
