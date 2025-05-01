import { getPanoEndpoint, panoEnabled } from "@/lib/endpoint";
import PanoramaViewer from "@/components/PanoramaViewer/PanoramaViewer";

export const metadata = {
  title: "View Images on pano",
  description: "View photos taken from rooftops or other install documentation",
};

export default async function Page() {
  return (
    <>
      <main>
        <PanoramaViewer urlModelNumber={""} urlModelType={undefined} />
      </main>
    </>
  );
}
