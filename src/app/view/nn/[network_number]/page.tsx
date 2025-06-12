import { ModelType, modelTypeToAPIRouteMap } from "@/lib/types";
import { getPanoEndpoint } from "@/lib/server";
import PanoramaCardList from "@/components/PanoramaCardList/PanoramaCardList";

export const metadata = {
    title: "View Images on pano",
    description: "View photos taken from rooftops or other install documentation",
};

// Retrieves images from the Pano API
async function getImages(modelNumber: number, modelType: ModelType) {
    console.log(`Querying for modelType = ${modelType}, modelNumber = ${modelNumber}`);
    const response = await fetch(
        `${await getPanoEndpoint()}/api/v1/${modelTypeToAPIRouteMap.get(modelType)}/${modelNumber}`,
        {
            credentials: "include",
        },
    );

    if (!response.ok) {
        throw new Error(`Could not fetch images. HTTP Request to Pano failed. Status: ${response.status}`);
    }
    ``
    const images = await response.json();
    console.log(`Got Images: ${JSON.stringify(images)}`);
    return images;
}

export default async function ViewByNetworkNumber({
    params,
}: {
    params: Promise<{ network_number: number }>;
}) {
    const { network_number } = await params;
    const images = await getImages(network_number, ModelType.NetworkNumber);
    console.log("Chom E");
    console.log(images);
    return (
        <>
            <PanoramaCardList images={images} />
        </>
    );
}
