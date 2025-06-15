"use client";
import { Button, CircularProgress, Select, Switch } from "@mui/material";
import styles from "./SearchBar.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ModelType,
  modelTypeToAPIRouteMap,
  modelTypeToLabelMap,
} from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ModelTypeSwitch } from "@/components/ModelTypeSwitch/ModelTypeSwitch";

type SearchBarFormValues = {
  modelNumber: number;
  modelType: boolean;
};

interface SearchBarProps {
  modelNumber: number;
  modelType: ModelType;
}

export default function SearchBar({ modelNumber, modelType }: SearchBarProps) {
  const router = useRouter();

  // Install Number = False, Network Number = True
  const [installNumberOrNetworkNumber, setInstallNumberOrNetworkNumber] =
    useState(modelType === ModelType.NetworkNumber);

  const handleChangeModelType = () => {
    setInstallNumberOrNetworkNumber(!installNumberOrNetworkNumber);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchBarFormValues>();

  // Runs when you click "Search" on the search bar
  const onSubmit: SubmitHandler<SearchBarFormValues> = (
    data: SearchBarFormValues,
  ) => {
    let modelType = ModelType.InstallNumber;
    if (data.modelType) {
      modelType = ModelType.NetworkNumber;
    }
    console.debug(
      `Search button clicked. Querying for ${data.modelType}: ${JSON.stringify(data)}.`,
    );
    // setIsLoading(true); // TODO: Create loading widget either here or on the page.
    // setModelNumber(String(data.modelNumber));

    const apiRoute = modelTypeToAPIRouteMap.get(modelType);

    console.log(apiRoute);

    const sanitizedModelNumber = Number(data.modelNumber);
    if (isNaN(sanitizedModelNumber) || sanitizedModelNumber < 0) {
      console.error("Invalid model number provided.");
      return;
    }
    location.href = `/view/${apiRoute}/${sanitizedModelNumber}`;
  };

  return (
    <>
      <div className={styles.panoSearchBox}>
        {(modelNumber !== undefined && (
          <h2>{`${modelTypeToLabelMap.get(modelType)} ${modelNumber}`}</h2>
        )) || <h2>To get started, query for a Node or Install 👉</h2>}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formBody}>
          <ModelTypeSwitch
            {...register("modelType")}
            checked={installNumberOrNetworkNumber}
            onChange={handleChangeModelType}
          />
          <input
            {...register("modelNumber")}
            type="number"
            placeholder="Enter Number"
            required
          />
          <Button
            type="submit"
            variant="contained"
            style={{ margin: 0, height: "2.4em", color: "white" }}
          >
            <span className="material-symbols-outlined">search</span>
          </Button>
          {/*
                    <div hidden={!isLoading}>
                        <CircularProgress />
                    </div>
                    */}
        </form>
      </div>
    </>
  );
}
