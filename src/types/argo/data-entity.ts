import * as t from "io-ts";
import { Mixed, Type, TypeC } from "io-ts";
import URLFromString from "../io-ts/URLFromString";

const DataEntity: <C extends Mixed>(codec: C) => TypeC<{ data: C; uri: Type<URL, string, unknown> }> = <
  C extends t.Mixed
>(
  codec: C
) =>
  t.type({
    uri: URLFromString,
    data: codec,
  });

export { DataEntity };
