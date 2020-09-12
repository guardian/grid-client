import * as t from "io-ts";

const PrintUsageSize = t.type({
  x: t.number,
  y: t.number,
});

type PrintUsageSize = t.TypeOf<typeof PrintUsageSize>;

export { PrintUsageSize };
