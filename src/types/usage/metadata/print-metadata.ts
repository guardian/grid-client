import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { PrintUsageSize } from "./print-size";

const PrintUsageMetadata = t.intersection([
  t.type({
    sectionName: t.string,
    issueDate: DateFromISOString,
    pageNumber: t.number,
    storyName: t.string,
    publicationCode: t.string,
    publicationName: t.string,
    sectionCode: t.string,
  }),
  t.partial({
    layoutId: t.number,
    edition: t.number,
    size: PrintUsageSize,
    orderedBy: t.string,
    notes: t.string,
    source: t.string,
  }),
]);

type PrintUsageMetadata = t.TypeOf<typeof PrintUsageMetadata>;

export { PrintUsageMetadata };
