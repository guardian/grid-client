import { CropSelection } from "../types";

export default function (payload: any): CropSelection | undefined {
  const image = payload as CropSelection;

  const hasRequiredProperties =
    image.crop && image.crop.data && image.crop.data.master && image.image && image.image.data;

  return hasRequiredProperties ? image : undefined;
}
