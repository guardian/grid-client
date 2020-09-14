import * as t from "io-ts";
import URLFromString from "../io-ts/URLFromString";

const ArgoLink = t.type({
  rel: t.string,
  href: URLFromString,
});

type ArgoLink = t.TypeOf<typeof ArgoLink>;

export { ArgoLink };
