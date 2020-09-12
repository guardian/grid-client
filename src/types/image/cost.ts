import * as t from "io-ts";

enum Costs {
  Free = "free",
  Conditional = "conditional",
  Pay = "pay",
  OverQuota = "overquota",
}

const costs: { [name: string]: null } = Object.values(Costs).reduce((acc, item) => {
  return { ...acc, [item]: null };
}, {});

const Cost = t.keyof(costs);

type Cost = t.TypeOf<typeof Cost>;

export { Cost };
