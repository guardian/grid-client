import * as t from "io-ts";

const Supplier = t.intersection([
  t.type({
    supplierId: t.string,
  }),
  t.partial({
    supplierName: t.string,
    prAgreement: t.boolean,
  }),
]);

type Supplier = t.TypeOf<typeof Supplier>;

export { Supplier };
