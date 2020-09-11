import * as t from "io-ts";
import URLFromString from "~types/io-ts/URLFromString";

const DataEntity = <C extends t.Mixed>(codec: C) =>
  t.type(
    {
      uri: URLFromString,
      data: codec,
    },
    "DataEntity"
  );

// type ArgoEntity = t.TypeOf<typeof ArgoEntity>;

export { DataEntity };
