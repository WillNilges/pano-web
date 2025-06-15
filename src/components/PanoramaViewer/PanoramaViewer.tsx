"use server"
import { ModelType, modelTypeToAPIRouteMap } from "@/lib/types";
import { getPanoEndpoint } from "@/lib/server";
import PanoramaCardList from "@/components/PanoramaCardList/PanoramaCardList";
import PanoHeader from "@/components/Pano/Header/PanoHeader";
import SearchBar from "../Pano/SearchBar/SearchBar";

// Retrieves images from the Pano API
export async function getImages(modelNumber: number, modelType: ModelType) {
    console.log(`Querying for modelType = ${modelType}, modelNumber = ${modelNumber}`);
    const fetchURL = `${await getPanoEndpoint()}/api/v1/${modelTypeToAPIRouteMap.get(modelType)}/${modelNumber}`;
    const response = await fetch(
        fetchURL,
        {
            credentials: "include",
        },
    );

    if (!response.ok) {
        throw new Error(`Could not fetch images. HTTP Request to Pano failed. Status: ${response.status}`);
    }
    const images = await response.json();
    console.log(`Retrieved images from ${fetchURL}`);
    return images;
}

interface PanoramaViewerProps {
    modelNumber: number,
    modelType: ModelType,
}

export default async function PanoramaViewer({
    modelNumber,
    modelType
}: PanoramaViewerProps) {
    const images = await getImages(modelNumber, modelType);
    return (
        <>
            <PanoHeader />
            <SearchBar />
            <PanoramaCardList images={images} />
        </>
    );
}
