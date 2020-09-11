import * as t from "io-ts";

enum UsageStates {
  Pending = "pending",
  Published = "published",
  Removed = "removed",
  Syndicated = "synducated",
  Downloaded = "downlaoded",
  Unknown = "unknown",
}

const usageStates: { [name: string]: null } = Object.values(UsageStates).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const UsageStatus = t.keyof(usageStates);

type UsageStatus = t.TypeOf<typeof UsageStatus>;

export { UsageStatus };
