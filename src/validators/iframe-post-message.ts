import { PostMessage } from "~types";

export default function (payload: any): PostMessage | undefined {
  const image = payload as PostMessage;

  const hasRequiredProperties =
    image.crop && image.crop.data && image.crop.data.master && image.image && image.image.data;

  return hasRequiredProperties ? image : undefined;
}
