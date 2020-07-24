import { DataEntity } from "./argo";
import { Crop } from "./crop";
import { GridImage } from "./image";

type PostMessage = {
  crop: DataEntity<Crop>;
  image: DataEntity<GridImage>;
};

export { PostMessage };
