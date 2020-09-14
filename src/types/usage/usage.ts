import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { UsageReference } from "./reference";
import { UsageStatus } from "./usage-status";
import { UsageType } from "./usage-type";

import {
  PrintUsageMetadata,
  DigitalUsageMetadata,
  SyndicationUsageMetadata,
  DownloadUsageMetadata,
  FrontUsageMetadata,
} from "./metadata";

const Usage = t.intersection([
  t.type({
    id: t.string,
    references: t.readonlyArray(UsageReference),
    platform: UsageType,
    media: t.string,
    status: UsageStatus,
    lastModified: DateFromISOString,
  }),
  t.partial({
    dateAdded: DateFromISOString,
    dateRemoved: DateFromISOString,
    printUsageMetadata: PrintUsageMetadata,
    digitalUsageMetadata: DigitalUsageMetadata,
    syndicationUsageMetadata: SyndicationUsageMetadata,
    frontUsageMetadata: FrontUsageMetadata,
    downloadUsageMetadata: DownloadUsageMetadata,
  }),
]);

type Usage = t.TypeOf<typeof Usage>;

export { Usage };
