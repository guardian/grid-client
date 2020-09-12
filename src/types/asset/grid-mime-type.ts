import * as t from "io-ts";

enum SupportedMimeTypes {
  Jpeg = "image/jpeg",
  Png = "image/png",
  Tiff = "image/tiff",
}

const mimes: { [name: string]: null } = Object.values(SupportedMimeTypes).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const GridMimeType = t.keyof(mimes);

type GridMimeType = t.TypeOf<typeof GridMimeType>;

export { GridMimeType };
