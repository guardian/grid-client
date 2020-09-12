import * as t from "io-ts";

const Identifier = t.record(t.string, t.string);

type Identifier = t.TypeOf<typeof Identifier>;

export { Identifier };
