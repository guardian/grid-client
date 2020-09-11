import * as t from "io-ts";

enum UsageTypes {
  Print = "print",
  Digital = "digital",
  Syndication = "syndication",
  Download = "download",
}

const usageTypes: { [name: string]: null } = Object.values(UsageTypes).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const UsageType = t.keyof(usageTypes);

type UsageType = t.TypeOf<typeof UsageType>;

export { UsageType };
