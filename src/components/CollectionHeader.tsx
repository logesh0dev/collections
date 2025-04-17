    import { useLocation, Link } from "react-router-dom";
    import AddIcon from "./icons/AddIcon";
    import CopyIcon from "./icons/CopyIcon";
    import SearchIcon from "./icons/SearchIcon";
    import SortIcon from "./icons/SortIcon";
    import StarIcon from "./icons/StarIcon";
    import TextIcon from "./icons/TextIcon";
    import TrashIcon from "./icons/TrashIcon";
    import ScrollIcon from "./icons/ScrollIcon";
    import CreateCollectionModal from "./CreateCollectionModal"; // import the modal
    import { useEffect, useState } from "react";
    import { useCollections } from "./CollectionsContext";

    const icons = [
        { label: "", Icon: TextIcon },
        { label: "", Icon: TrashIcon },
        { label: "", Icon: CopyIcon },
        { label: "Create new collection", Icon: AddIcon },
    ];

    const paths = [
        { name: "All files", path: "/all-files" },
        { name: "Photos", path: "/photos" },
        { name: "Videos", path: "/videos" },
        { name: "Documents", path: "/documents" },
    ];

    const CollectionHeader = () => {
        const [isModalOpen, setIsModalOpen] = useState(false); // manage modal visibility
        const [searchInput, setSearchInput] = useState(""); // manage modal visibility


        const location = useLocation();
        const currentPath = location.pathname;

        const handleSaveCollection = () => {};
        const {setSearchValue} =useCollections();

        useEffect(() => {
            // Reset search on route change
            console.log("searchvalue",searchInput)
            setSearchValue("");
            setSearchInput("");
          }, [location.pathname]);

        return (
            <div className="flex flex-col">
                <div className="flex justify-between flex-col gap-4 lg:gap-2 lg:flex-row">
                    <CreateCollectionModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleSaveCollection}
                    />
                    <div>
                        <h2 className="text-2xl font-bold">collections</h2>
                        <p className="font-medium text-sm text-gray-400">
                            personalized content storyboards
                        </p>
                    </div>
                    <div>
                        <div className="flex space-x-2 justify-between ">
                            <div className="flex-auto relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <SearchIcon
                                        active={false}
                                        width="12"
                                        height="12"
                                    />
                                </span>
                                <input
                                    type="text"
                                    value={searchInput ?? ""}
                                    placeholder="Type here to search..."
                                    onChange={(e) => {
                                        setSearchInput(e.target.value)
                                        setSearchValue(e.target.value.trim())

                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            setSearchValue(searchInput.trim());
                                        }
                                      }}
                                    className="text-xs pl-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#E51058] w-full"
                                />
                            </div>
                            <div onClick={() => setSearchValue(searchInput.trim())} className="flex items-center justify-center border border-gray-300 px-3 rounded-md cursor-pointer hover:ring-1 hover:ring-[#E51058]">
                                <StarIcon />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex space-x-4 mt-2">
                                {icons.map(({ label, Icon }, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center border border-gray-300 px-3 md:py-2 py-0  rounded-md cursor-pointer hover:ring-1 hover:ring-[#E51058]"
                                        onClick={() => {
                                            if (label === "Create new collection") {
                                                setIsModalOpen(true); // open modal when button is clicked
                                            }
                                        }}
                                    >
                                        <Icon active={!!label} />
                                        {label && (
                                            <div className="ml-2 text-sm">
                                                {label}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-between md:items-center  flex-col gap-4 md:gap-2 md:flex-row">
                    <div>
                        <ul className="flex space-x-4 text-xs flex-col sm:flex-row gap-2 md:gap-0">
                            <li className=" flex items-center  hover:ring-1 hover:ring-[#E51058] cursor-pointer items-center justify-center p-2 border-2 border-gray-200 border-dotted rounded-full">
                                <AddIcon />
                            </li>
                            {paths.map(({ name, path }) => ( 
                                <li
                                    key={path}
                                    className={`flex items-center justify-center hover:ring-1 hover:ring-[#E51058] rounded-full px-4 md:px-2 border border-gray-300  cursor-pointer ${
                                        currentPath === path
                                            ? "bg-[#E51058] text-white"
                                            : ""
                                    }`}
                                >
                                    <Link className="p-2" to={path}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="text-xs flex space-x-2 justify-end">
                            <div className="flex flex-col justify-center items-end">
                                <div className=" text-gray-400">Sort by</div>
                                <div className="flex space-x-1">
                                    <div>Created date</div>
                                    <span>
                                        <ScrollIcon />
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-md border border-gray-300 p-3 cursor-pointer hover:ring-1 hover:ring-[#E51058]">
                                <SortIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default CollectionHeader;
