import * as t from "io-ts";
import URLFromString from "../../io-ts/URLFromString";

const DigitalUsageMetadata = t.intersection([
  t.type({
    webUrl: URLFromString,
    webTitle: t.string,
    sectionId: t.string,
  }),
  t.partial({
    composerUrl: URLFromString,
  }),
]);

type DigitalUsageMetadata = t.TypeOf<typeof DigitalUsageMetadata>;

export { DigitalUsageMetadata };
