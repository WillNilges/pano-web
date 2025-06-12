import { ModelType } from "@/lib/types";
import PanoramaViewer from "@/components/PanoramaViewer/PanoramaViewer";
import { getImages } from "../../nn/[network_number]/page";
import PanoHeader from "@/components/Pano/Header/PanoHeader";
import PanoramaCardList from "@/components/PanoramaCardList/PanoramaCardList";

export const metadata = {
    title: "View Images on pano",
    description: "View photos taken from rooftops or other install documentation",
};

export default async function ViewByInstallNumber({
    params,
}: {
    params: Promise<{ install_number: number }>;
}) {
    const { install_number } = await params;
    return (<PanoramaViewer modelNumber={install_number} modelType={ModelType.InstallNumber} />)
}
