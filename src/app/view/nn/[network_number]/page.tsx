import { ModelType, modelTypeToAPIRouteMap } from "@/lib/types";
import { getPanoEndpoint } from "@/lib/server";
import PanoramaCardList from "@/components/PanoramaCardList/PanoramaCardList";
import PanoHeader from "@/components/Pano/Header/PanoHeader";
import PanoramaViewer from "@/components/PanoramaViewer/PanoramaViewer";

export const metadata = {
  title: "View Images on pano",
  description: "View photos taken from rooftops or other install documentation",
};

export default async function ViewByNetworkNumber({
  params,
}: {
  params: Promise<{ network_number: number }>;
}) {
  const { network_number } = await params;
  return (
    <PanoramaViewer
      modelNumber={network_number}
      modelType={ModelType.NetworkNumber}
    />
  );
}
