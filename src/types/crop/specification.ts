import * as t from "io-ts";
import URLFromString from "../io-ts/URLFromString";
import { Bounds } from "./bounds";
import { CropType } from "./crop-type";

const Specification = t.intersection([
  t.type({
    uri: URLFromString,
    bounds: Bounds,
    type: CropType,
  }),
  t.partial({
    aspectRatio: t.string,
  }),
]);

type Specification = t.TypeOf<typeof Specification>;

export { Specification };
