import * as t from "io-ts";
import URLFromString from "~types/io-ts/URLFromString";
import { Mixed, Type, TypeC } from "io-ts";

const DataEntity: <C extends Mixed>(codec: C) => TypeC<{ data: C; uri: Type<URL, string, unknown> }> = <
  C extends t.Mixed
>(
  codec: C
) =>
  t.type(
    {
      uri: URLFromString,
      data: codec,
    },
    "DataEntity"
  );

// type ArgoEntity = t.TypeOf<typeof ArgoEntity>;

export { DataEntity };
