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

export type Image = {
    id: string;
    original_filename: string;
    timestamp: string;
    category: string;
    url: string;
};
