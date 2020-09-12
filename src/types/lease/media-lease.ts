import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { MediaLeaseType } from "./media-lease-type";

const MediaLease = t.intersection([
  t.type({
    access: MediaLeaseType,
    mediaId: t.string,
    createdAt: DateFromISOString,
  }),
  t.partial({
    id: t.string,
    leasedBy: t.string,
    startDate: DateFromISOString,
    endDate: DateFromISOString,
    notes: t.string,
  }),
]);

type MediaLease = t.TypeOf<typeof MediaLease>;

export { MediaLease };
