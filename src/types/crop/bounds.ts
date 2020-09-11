import * as t from "io-ts";

const Bounds = t.type({
  x: t.number,
  y: t.number,
  width: t.number,
  height: t.number,
});

type Bounds = t.TypeOf<typeof Bounds>;

export { Bounds };
