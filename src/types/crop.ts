import { Asset } from "./asset";

enum ExportType {
  Crop = "crop",
  Full = "full",
}

type CropBounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type CropSpec = {
  uri: string;
  bounds: CropBounds;
  aspectRatio?: string;
  type: ExportType;
};

type Crop = {
  id?: string;
  author?: string;
  date?: Date;
  specification: CropSpec;
  master?: Asset;
  assets: Asset[];
};

export { ExportType, CropBounds, CropSpec, Crop };
