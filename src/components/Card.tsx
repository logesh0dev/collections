import { Photo } from "../hooks/usePhotos";

// const isImage = [".gif", ".jpg", ".jpeg", ".png"];
// const isVideo = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"];
// const isDocument = [".pdf", ".doc", ".docx"];

interface Props {
    photo: Photo;
}

const Card = ({ photo }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <div className=" bg-gray-200 rounded-xl overflow-hidden">
                <img src={photo.src.landscape} alt={photo.alt} />
            </div>
            <div className="ml-2">
                <div className="font-medium">{photo.photographer}</div>
            </div>
        </div>
    );
};

export default Card;
