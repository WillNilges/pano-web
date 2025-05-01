import { getPanoEndpoint, panoEnabled } from "@/lib/endpoint";
import PanoramaViewer from "@/components/PanoramaViewer/PanoramaViewer";
import PanoHeader from "@/components/Pano/Header/PanoHeader";

export const metadata = {
  title: "View Images on pano",
  description: "View photos taken from rooftops or other install documentation",
};

export default async function Page() {
  return (
    <>
      <main>
        <PanoHeader/>
        <PanoramaViewer urlModelNumber={""} urlModelType={undefined} />
      </main>
    </>
  );
}
