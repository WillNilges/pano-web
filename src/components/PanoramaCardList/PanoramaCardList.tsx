import { Image } from "@/lib/types";
import PanoramaViewerCard from "../PanoramaViewerCard/PanoramaViewerCard";
import styles from "./PanoramaCardList.module.scss";
import { getPanoEndpoint } from "@/lib/server";

interface PanoramaViewerProps {
    images: any;
    additional_images: any;
}

export default async function PanoramaCardList({
    images,
    additional_images,
}: PanoramaViewerProps) {
    const panoEndpoint = (await getPanoEndpoint()) || "";
    return (
        <>
            <div className={styles.panoramaList}>
                {images.length > 0 &&
                    images.map((image: Image, index: any) => (
                        <div key={image.id}>
                            <PanoramaViewerCard
                                key={image.id}
                                id={image.id}
                                originalFilename={image.original_filename}
                                timestamp={image.timestamp}
                                category={image.category}
                                url={image.url}
                                panoEndpoint={panoEndpoint}
                            />
                        </div>
                    ))}
            </div>
            <h3> Additional Images </h3>
            <div className={styles.panoramaList}>
                {additional_images.length > 0 &&
                    additional_images.map((image: Image, index: any) => (
                        <div key={image.id}>
                            <PanoramaViewerCard
                                key={image.id}
                                id={image.id}
                                originalFilename={image.original_filename}
                                timestamp={image.timestamp}
                                category={image.category}
                                url={image.url}
                                panoEndpoint={panoEndpoint}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}
