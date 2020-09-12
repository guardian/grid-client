import * as t from "io-ts";

const InvalidReason = t.record(t.string, t.string);

type InvalidReason = t.TypeOf<typeof InvalidReason>;

export { InvalidReason };
