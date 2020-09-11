import * as t from "io-ts";

const UploadInfo = t.partial({
  filename: t.string,
});

type UploadInfo = t.TypeOf<typeof UploadInfo>;

export { UploadInfo };
