import { ModelType } from "@/lib/types";
import PanoramaViewer from "@/components/PanoramaViewer/PanoramaViewer";

export const metadata = {
  title: "View Images on pano",
  description: "View photos taken from rooftops or other install documentation",
};

export default async function ViewByNetworkNumber({
  params,
}: {
  params: Promise<{ network_number: string }>;
}) {
  const { network_number } = await params;
  return (
    <>
      <main>
        <PanoramaViewer
          urlModelNumber={network_number}
          urlModelType={ModelType.NetworkNumber}
        />
      </main>
    </>
  );
}
