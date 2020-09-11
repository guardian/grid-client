import * as t from "io-ts";

enum CropTypes {
  Crop = "crop",
  Full = "full",
}

const cropTypes: { [name: string]: null } = Object.values(CropTypes).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const CropType = t.keyof(cropTypes);

type CropType = t.TypeOf<typeof CropType>;

export { CropType };
