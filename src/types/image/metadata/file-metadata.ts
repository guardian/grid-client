import * as t from "io-ts";

const FileMetadata = t.intersection([
  t.type({
    iptc: t.unknown,
    exif: t.unknown,
    exifSub: t.unknown,
    xmp: t.unknown,
    icc: t.unknown,
    getty: t.unknown,
    colourModelInformation: t.unknown,
  }),
  t.partial({
    colourModel: t.string,
  }),
]);

type FileMetadata = t.TypeOf<typeof FileMetadata>;

export { FileMetadata };
