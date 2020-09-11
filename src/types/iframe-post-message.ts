import * as t from "io-ts";
import { DataEntity } from "~/types/argo";
import { Crop } from "~/types/crop";
import { GridImage } from "~/types/image";

const IframePostMessage = t.type({
  crop: DataEntity(Crop),
  image: DataEntity(GridImage),
});

type IframePostMessage = t.TypeOf<typeof IframePostMessage>;

export { IframePostMessage };
