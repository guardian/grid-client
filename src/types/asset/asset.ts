import * as t from "io-ts";
import URLFromString from "../io-ts/URLFromString";
import { Dimensions } from "./dimensions";
import { GridMimeType } from "./grid-mime-type";

const Asset = t.intersection([
  t.type({
    file: URLFromString,
  }),
  t.partial({
    size: t.number,
    mimeType: GridMimeType,
    dimensions: Dimensions,
    secureUrl: URLFromString,
  }),
]);

type Asset = t.TypeOf<typeof Asset>;

export { Asset };
