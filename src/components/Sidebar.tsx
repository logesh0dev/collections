import { useState } from "react";
import CollectionIcon from "./icons/CollectionIcon";
import GalleryIcon from "./icons/GalleryIcon";
import MessageIcon from "./icons/MessageIcon";
import OdometerIcon from "./icons/OdometerIcon";
import SearchIcon from "./icons/SearchIcon";
import ShareIcon from "./icons/ShareIcon";
import MenuIcon from "./icons/MenuIcon";
import StarIcon from "./icons/StarIcon";

const icons = [
    SearchIcon,
    GalleryIcon,
    CollectionIcon,
    MessageIcon,
    OdometerIcon,
    ShareIcon,
];

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <aside className="bg-stone-200 w-[64px] h-screen pt-12">
            <div className="flex flex-col items-center justify-between h-full">
                <div>
                    <ul className="flex flex-col space-y-6 items-center">
                        {icons.map((Icon, index) => (
                            <li
                                className="cursor-pointer p-2"
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <Icon active={selectedIndex === index} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pb-12">
                    <div className="flex flex-col space-y-6 items-center">
                        <div className="cursor-pointer p-2">
                            <StarIcon width="20" height="20" />
                        </div>
                        <div className="cursor-pointer p-2">
                            <MenuIcon width="20" height="20" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
