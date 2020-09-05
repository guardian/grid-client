import { PostMessage } from "~types";

export default function (payload: MessageEvent): PostMessage | undefined {
  const image = payload.data as PostMessage;

  const hasRequiredProperties =
    image.crop && image.crop.data && image.crop.data.master && image.image && image.image.data;

  return hasRequiredProperties ? image : undefined;
}
