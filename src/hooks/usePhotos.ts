import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    src: {
        landscape: string;
    };
    alt: string
    photographer:string
}

export interface Response {
    photos: Photo[];
}

const usePhotos = () => {
    const controller = new AbortController();

    return useQuery({
        queryKey: ["photos"],
        queryFn: () =>
            apiClient
                .get<Response>("/v1/curated", {
                    params: {
                        page: 1,
                        per_page: 20,
                    },
                    signal: controller.signal,
                })
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
    });
};

export default usePhotos;
