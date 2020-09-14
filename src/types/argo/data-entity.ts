import * as t from "io-ts";
import { IntersectionC, Mixed, PartialC, Type, TypeC } from "io-ts";
import URLFromString from "../io-ts/URLFromString";

const DataEntity: <C extends Mixed>(
  codec: C
) => IntersectionC<[TypeC<{ data: C }>, PartialC<{ uri: Type<URL, string, unknown> }>]> = <C extends t.Mixed>(
  codec: C
) =>
  t.intersection([
    t.type({
      data: codec,
    }),
    t.partial({
      uri: URLFromString,
    }),
  ]);

export { DataEntity };
