import { Image } from "@/lib/types";
import PanoramaViewerCard from "../PanoramaViewerCard/PanoramaViewerCard";
import styles from "./PanoramaCardList.module.scss";

interface PanoramaViewerProps {
    images: any;
}

export default function PanoramaCardList({
    images,
}: PanoramaViewerProps) {
    console.log("Chom E");
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
                            />
                        </div>
                    ))}
            </div>
        </>
    )
}
