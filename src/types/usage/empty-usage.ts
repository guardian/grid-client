import * as t from "io-ts";

const EmptyUsage = t.type({});

type EmptyUsage = t.TypeOf<typeof EmptyUsage>;

export { EmptyUsage };
