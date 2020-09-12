import * as t from "io-ts";

import { ReferenceType } from "./reference-type";
import URLFromString from "~types/io-ts/URLFromString";

const UsageReference = t.intersection([
  t.type({
    type: ReferenceType,
  }),
  t.partial({
    uri: URLFromString,
    name: t.string,
  }),
]);

type UsageReference = t.TypeOf<typeof UsageReference>;

export { UsageReference };
