import * as t from "io-ts";

const DownloadUsageMetadata = t.type({
  downloadedBy: t.string,
});

type DownloadUsageMetadata = t.TypeOf<typeof DownloadUsageMetadata>;

export { DownloadUsageMetadata };
