"use server";

import { getPanoEndpoint } from "@/lib/server";
import PanoHeader from "../Pano/Header/PanoHeader";
import RedirectIfNotLoggedIn from "../Pano/RedirectIfNotLoggedIn/RedirectIfNotLoggedIn";
import PanoramaUploader from "../PanoramaUpload/PanoramaUpload";

interface UploaderProps {
}

export default async function Uploader({
}: UploaderProps) {
  return (
    <>
      <RedirectIfNotLoggedIn panoEndpoint={(await getPanoEndpoint()) || ""}/>
      <PanoHeader />
      <PanoramaUploader/>
    </>
  );
}
