"use server";
import {
    ModelType,
    modelTypeToAPIRouteMap,
    modelTypeToLabelMap,
} from "@/lib/types";
import { getPanoEndpoint } from "@/lib/server";
import PanoramaCardList from "@/components/PanoramaCardList/PanoramaCardList";
import PanoHeader from "@/components/Pano/Header/PanoHeader";
import SearchBar from "../Pano/SearchBar/SearchBar";
import styles from "./PanoramaViewer.module.scss";

// Retrieves images from the Pano API
export async function getImages(modelNumber: number, modelType: ModelType) {
    if (modelNumber === undefined) {
        console.warn("modelNumber undefined. Aborting Pano API query");
        return [];
    }

    console.log(
        `Querying for modelType = ${modelType}, modelNumber = ${modelNumber}`,
    );
    const fetchURL = `${await getPanoEndpoint()}/api/v1/${modelTypeToAPIRouteMap.get(modelType)}/${modelNumber}`;
    const response = await fetch(fetchURL, {
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(
            `Could not fetch images. HTTP Request to Pano failed. Status: ${response.status}`,
        );
    }
    const image_response_json = await response.json();
    console.log(`Retrieved images from ${fetchURL}`);
    console.debug(image_response_json);
    return image_response_json;
}

interface PanoramaViewerProps {
    modelNumber: number;
    modelType: ModelType;
}

export default async function PanoramaViewer({
    modelNumber,
    modelType,
}: PanoramaViewerProps) {
    try {
        const { images, additional_images } = await getImages(modelNumber, modelType);
        return (
            <>
                <PanoHeader />
                <SearchBar modelNumber={modelNumber} modelType={modelType} />
                <PanoramaCardList images={images} />
                {Object.values(additional_images as typeof Image[]).every(images => images.length === 0) ||
                    <h2 style={{ color: "#8490a4", borderWidth: "0 0 1px 0", borderStyle: "solid", borderColor: "#ccc" }}>Related Images</h2>
                }
                {Object.entries(additional_images).map(([additionalModelNumber, additionalImages]) => (
                    <div key={additionalModelNumber}>
                        {(additionalImages as typeof Image[]).length > 0 && <h2>{modelType === ModelType.InstallNumber ? "NN" : "Install #"} {additionalModelNumber}</h2>}
                        <PanoramaCardList images={additionalImages} />
                    </div>
                ))}
            </>
        );
    } catch (e) {
        console.error(e);
        return (<>
            <PanoHeader />
            <SearchBar modelNumber={modelNumber} modelType={modelType} />
            <h1 style={{ display: "flex", justifyContent: "center" }}>No panoramas found! 🤷</h1>
        </>)
    }
}
