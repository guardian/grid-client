import * as t from "io-ts";

const FrontUsageMetadata = t.type({
  addedBy: t.string,
  front: t.string,
});

type FrontUsageMetadata = t.TypeOf<typeof FrontUsageMetadata>;

export { FrontUsageMetadata };
