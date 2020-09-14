import * as t from "io-ts";
import { DataEntity } from "./argo";
import { Crop } from "./crop";
import { GridImage } from "./image";

const IframePostMessage = t.type({
  crop: DataEntity(Crop),
  image: DataEntity(GridImage),
});

type IframePostMessage = t.TypeOf<typeof IframePostMessage>;

export { IframePostMessage };
