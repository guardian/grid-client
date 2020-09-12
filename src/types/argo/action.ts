import * as t from "io-ts";
import URLFromString from "~types/io-ts/URLFromString";
import { ArgoMethod } from "./method";

const ArgoAction = t.type({
  name: t.string,
  href: URLFromString,
  method: ArgoMethod,
});

type ArgoAction = t.TypeOf<typeof ArgoAction>;

export { ArgoAction };
