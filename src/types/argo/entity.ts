import * as t from "io-ts";
import URLFromString from "~types/io-ts/URLFromString";
import { ArgoAction } from "./action";
import { ArgoLink } from "./link";

const ArgoEntity = <C extends t.Mixed>(codec: C) =>
  t.intersection([
    t.type({
      url: URLFromString,
      data: codec,
    }),
    t.partial({
      actions: t.readonlyArray(ArgoAction),
      links: t.readonlyArray(ArgoLink),
    }),
  ]);

// type ArgoEntity = t.TypeOf<typeof ArgoEntity>;

export { ArgoEntity };
