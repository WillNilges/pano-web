import styles from "./PanoHeader.module.scss";
import Image from "next/image";
import { getPanoEndpoint } from "@/lib/server";
import LoginAndUploadWidget from "../LoginAndUploadWidget/LoginAndUploadWidget";
import { ModelType } from "@/lib/types";

interface PanoHeaderProps {
    modelNumber: number,
    modelType: ModelType,
}

export default async function PanoHeader() {
    return (
        <>
            <div className={styles.panoHeader}>
                <a
                    href="/view"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    <Image src="/pano.png" alt="Pano logo" width={72} height={72} />
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Pano</p>
                </a>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <LoginAndUploadWidget panoEndpoint={await getPanoEndpoint()} />
                </div>
            </div>
        </>
    );
}
