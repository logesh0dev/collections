import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import CollectionHeader from "./components/CollectionHeader";
import Collections from "./components/Collections";
import Sidebar from "./components/Sidebar";
// import { useState } from "react";
// import { MediaItem } from "./components/CreateCollectionModal";


function App() {
    // const [collections, setCollections] = useState<any[]>([]); // track collections

    // const handleSaveCollection = (
    //     collectionName: string,
    //     selectedItems: MediaItem[]
    // ) => {
    //     setCollections((prev) => [
    //         ...prev,
    //         { name: collectionName, items: selectedItems },
    //     ]);
    // };

    return (
        <Router>
            <main className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className=" md:m-2 flex-auto pt-12 px-4 md:px-12 rounded-lg bg-white">
                    <div className="flex flex-col gap-12]">
                        <div className="mb-8">
                            <CollectionHeader />
                        </div>

                        <div>
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <Navigate to="/all-files" replace />
                                    }
                                />
                                <Route
                                    index
                                    path="/all-files"
                                    element={<Collections />}
                                />
                                <Route
                                    path="/photos"
                                    element={<Collections />}
                                />
                                <Route
                                    path="/videos"
                                    element={<Collections />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </main>
        </Router>
    );
}

export default App;
