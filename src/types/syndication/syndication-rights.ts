import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { Supplier } from "./supplier";
import { Right } from "./right";

const SyndicationRights = t.intersection([
  t.type({
    suppliers: t.readonlyArray(Supplier),
    rights: t.readonlyArray(Right),
    isInferred: t.boolean,
  }),
  t.partial({
    published: DateFromISOString,
  }),
]);

type SyndicationRights = t.TypeOf<typeof SyndicationRights>;

export { SyndicationRights };
