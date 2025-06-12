export enum ModelType {
    InstallNumber,
    NetworkNumber,
}

export const modelTypeToAPIRouteMap = new Map<ModelType, string>([
    [ModelType.InstallNumber, "install"],
    [ModelType.NetworkNumber, "nn"],
]);

export const modelTypeToLabelMap = new Map<ModelType, string>([
    [ModelType.InstallNumber, "Install #"],
    [ModelType.NetworkNumber, "NN"],
]);

export const modelTypeToAPIFieldMap = new Map<ModelType, string>([
    [ModelType.InstallNumber, "installNumber"],
    [ModelType.NetworkNumber, "networkNumber"],
]);

export const modelSelectOptions = [
    {
        value: ModelType.InstallNumber,
        label: modelTypeToLabelMap.get(ModelType.InstallNumber),
    },
    {
        value: ModelType.NetworkNumber,
        label: modelTypeToLabelMap.get(ModelType.NetworkNumber),
    },
];

export type Image = {
    id: string;
    original_filename: string;
    timestamp: string;
    category: string;
    url: string;
};
