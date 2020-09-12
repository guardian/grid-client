import * as t from "io-ts";

const Dimensions = t.type({
  width: t.number,
  height: t.number,
});

type Dimensions = t.TypeOf<typeof Dimensions>;

export { Dimensions };
