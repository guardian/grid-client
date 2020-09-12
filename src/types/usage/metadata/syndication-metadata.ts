import * as t from "io-ts";

const SyndicationUsageMetadata = t.type({
  partnerName: t.string,
});

type SyndicationUsageMetadata = t.TypeOf<typeof SyndicationUsageMetadata>;

export { SyndicationUsageMetadata };
