import { Video, VideoFile } from "../hooks/useVideos";

interface Props {
    video: Video;
    file: VideoFile;
}

const CardVideo = ({ video, file }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <div className=" bg-gray-200 rounded-xl overflow-hidden">
                <video controls poster={video.image} width="100%">
                    <source src={file?.link} type="video/mp4" />
                </video>
            </div>
            <div className="ml-2">
                <div className="font-medium">{video.user.name}</div>
            </div>
        </div>
    );
};

export default CardVideo;
