//"use client";
//import React, { useEffect, useState } from "react";
//import "react-toastify/dist/ReactToastify.css";
//import styles from "./PanoramaViewer.module.scss";
//import { Button, CircularProgress } from "@mui/material";
//import { SubmitHandler, useForm } from "react-hook-form";
//import PanoramaViewerCard from "../PanoramaViewerCard/PanoramaViewerCard";
//import { ToastContainer, toast } from "react-toastify";
//import Select from "react-select";
//import {
//    ModelType,
//    modelTypeToAPIRouteMap,
//    modelTypeToLabelMap,
//} from "@/lib/types";
//import { getPanoEndpoint } from "@/lib/server";
//import { useRouter } from "next/navigation";
//
//type FormValues = {
//    modelNumber: number;
//};
//
//export type { FormValues };
//export const modelSelectOptions = [
//    {
//        value: ModelType.InstallNumber,
//        label: modelTypeToLabelMap.get(ModelType.InstallNumber),
//    },
//    {
//        value: ModelType.NetworkNumber,
//        label: modelTypeToLabelMap.get(ModelType.NetworkNumber),
//    },
//];
//
//interface PanoramaViewerProps {
//    urlModelNumber: number;
//    urlModelType: ModelType | undefined;
//    images: any;
//}
//
//export default function PanoramaViewer({
//    urlModelNumber,
//    urlModelType,
//    images,
//}: PanoramaViewerProps) {
//    const router = useRouter();
//    const {
//        register,
//        handleSubmit,
//        setValue,
//        formState: { errors },
//    } = useForm<FormValues>();
//
//
//    // Model passed in via URL or set in search bar
//    const [selectedModel, setSelectedModel] = React.useState(
//        urlModelType ?? ModelType.InstallNumber,
//    );
//
//    // Number passed in via URL or set in search bar
//    const [modelNumber, setModelNumber] = React.useState(urlModelNumber);
//
//    // Runs when you click "Search" on the search bar
//    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
//        console.debug(
//            `Search button clicked. Querying for ${selectedModel}: ${JSON.stringify(data)}.`,
//        );
//
//        // Query for the images and update the URL
//        window.history.pushState(
//            "View images on Pano",
//            "",
//            `/view/${modelTypeToAPIRouteMap.get(selectedModel)}/${data.modelNumber}`,
//        );
//        //getImages(data.modelNumber, selectedModel);
//        router.push(`/view/${modelTypeToAPIRouteMap.get(selectedModel)}/${data.modelNumber}`);
//    };
//    console.log(`Got Images: ${JSON.stringify(images)}`);
//
//    return (
//        <>
//            <div className={styles.viewerBar}>
//                <h2 style={{ color: "gray" }}>
//                    {modelTypeToLabelMap.get(selectedModel)} {modelNumber}
//                </h2>
//                <div className={styles.panoSearchBox}>
//                    {/*TODO (wdn): The search bar should probably be its own component.*/}
//                    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBody}>
//                        <Select
//                            name="modelSelect"
//                            placeholder={modelTypeToLabelMap.get(selectedModel)}
//                            options={modelSelectOptions}
//                            onChange={(selected) => {
//                                selected ? setSelectedModel(selected.value) : null;
//                            }}
//                            className={styles.modelSelectDropdown}
//                            isSearchable={false}
//                        />
//                        <input
//                            {...register("modelNumber")}
//                            type="number"
//                            placeholder={modelTypeToLabelMap.get(selectedModel)}
//                            required
//                        />
//                        <Button
//                            type="submit"
//                            variant="contained"
//                            disabled={isLoading}
//                            style={{ margin: 0, height: "2.4em", color: "white" }}
//                        >
//                            <span className="material-symbols-outlined">search</span>
//                        </Button>
//                        <div hidden={!isLoading}>
//                            <CircularProgress />
//                        </div>
//                    </form>
//                </div>
//            </div>
//            <div className={styles.panoramaList}>
//                {images.length > 0 &&
//                    images.map((image: Image, index) => (
//                        <div key={image.id}>
//                            <PanoramaViewerCard
//                                key={image.id}
//                                id={image.id}
//                                originalFilename={image.original_filename}
//                                timestamp={image.timestamp}
//                                category={image.category}
//                                url={image.url}
//                            />
//                        </div>
//                    ))}
//            </div>
//            <div className="toasty">
//                <ToastContainer hideProgressBar={true} theme={"colored"} />
//            </div>
//        </>
//    );
//}
