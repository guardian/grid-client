import * as t from "io-ts";

enum MediaLeaseTypes {
  AllowUse = "allow-use",
  DenyUse = "deny-use",
  AllowSyndication = "allow-syndication",
  DenySyndication = "deny-syndication",
}

const leases: { [name: string]: null } = Object.values(MediaLeaseTypes).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const MediaLeaseType = t.keyof(leases);

type MediaLeaseType = t.TypeOf<typeof MediaLeaseType>;

export { MediaLeaseType };
