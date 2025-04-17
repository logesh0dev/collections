import React, { useState, useEffect } from 'react';
import { useCollections } from "./CollectionsContext";
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
    selectedCollection: string | null;
}

const CollectionModal: React.FC<Props> = ({
    isOpen,
    onClose,
    selectedCollection,
}) => {
    const { collections, updateCollectionName, updateCollectionItems } = useCollections(); 
    const collection = collections.find(x => selectedCollection === x.name);

    const [newName, setNewName] = useState("");
    const [isChanged, setIsChanged] = useState(false);
    const [items, setItems] = useState<MediaItem[]>([]);

    useEffect(() => {
        if (collection) {
            setNewName(collection.name);
            setItems(collection.items);
            setIsChanged(false);
        }
    }, [collection]);

    if (!isOpen || !collection) return null;

    const handleRemoveItem = (id: string) => {
        setItems((prev) => prev.filter(item => item.id !== id));
        setIsChanged(true);
    };

    const handleSave = () => {
        if (newName.trim() && (newName !== collection.name || items.length !== collection.items.length)) {
            updateCollectionName(collection.name, newName.trim());
            updateCollectionItems(newName.trim(), items); 
            setIsChanged(false);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{collection.name}</h3>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-gray-600 hover:text-black text-xl px-2 cursor-pointer hover:ring-1 hover:ring-[#E51058] rounded-full"
                    >
                        &times;
                    </button>
                </div>

                {/* Editable Name Field */}
                <div className="flex my-4">
                    <input
                        type="text"
                        placeholder="Collection name"
                        value={newName}
                        onChange={(e) => {
                            setNewName(e.target.value);
                            setIsChanged(e.target.value !== collection.name || items.length !== collection.items.length);
                        }}
                        className="text-xs pl-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#E51058] w-full"
                    />
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="relative group">
                            {/* Remove button */}
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="cursor-pointer absolute top-1 right-1 z-10 bg-white rounded-full px-1.5 text-gray-600 hover:text-red-600 shadow-md"
                                title="Remove"
                            >
                                &times;
                            </button>

                            {item.type === "photo" ? (
                                <Card photo={item.data} />
                            ) : (
                                <CardVideo video={item.data} file={item.data.file} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Save & Cancel */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!isChanged}
                        className="px-4 py-2 text-sm bg-[#E51058] text-white rounded-full hover:bg-pink-700 disabled:opacity-50 cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollectionModal;
