import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";

const Property = t.intersection([
  t.type({
    propertyCode: t.string,
  }),
  t.partial({
    expiresOn: DateFromISOString,
    value: t.string,
  }),
]);

type Property = t.TypeOf<typeof Property>;

export { Property };
