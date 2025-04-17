import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface VideoFile {
    id: string;
    quality: string;
    link: string;
}

export interface Video {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    video_files: VideoFile[];
    user: user
}

export interface user {
    id: number;
    name: string;
    url: string;
}

interface Response {
    videos: Video[];
}

const useVideos = () => {
    const controller = new AbortController();

    return useQuery({
        queryKey: ["videos"],
        queryFn: () =>
            apiClient
                .get<Response>("videos/search", {
                    params: { query: "mountains", page: 1, per_page: 20 },
                    signal: controller.signal,
                })
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
    });
};

export default useVideos;
