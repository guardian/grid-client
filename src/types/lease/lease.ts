import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { MediaLease } from "./media-lease";

const Lease = t.partial({
  leases: t.readonlyArray(MediaLease),
  lastModified: DateFromISOString,
});

type Lease = t.TypeOf<typeof Lease>;

export { Lease };
