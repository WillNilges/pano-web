import { Image } from "@/lib/types";
import PanoramaViewerCard from "../PanoramaViewerCard/PanoramaViewerCard";
import styles from "./PanoramaCardList.module.scss";
import { getPanoEndpoint } from "@/lib/server";

interface PanoramaViewerProps {
    images: any;
}

export default async function PanoramaCardList({
    images,
}: PanoramaViewerProps) {
    const panoEndpoint = (await getPanoEndpoint()) || "";
    return (
        <>
            <div className={styles.panoramaList}>
                {images !== undefined && images.length > 0 &&
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
        </>
    );
}
