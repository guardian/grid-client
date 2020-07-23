enum GridMimeType {
  Jpeg = "image/jpeg",
  Png = "image/png",
  Tiff = "image/tiff",
}

type Dimensions = {
  width: number;
  height: number;
};

type Asset = {
  file: URL;
  size?: number;
  mimeType?: GridMimeType;
  dimensions?: Dimensions;
  secureUrl?: URL;
};

export { GridMimeType, Dimensions, Asset };
