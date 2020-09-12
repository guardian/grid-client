import * as t from "io-ts";
import { PersistedReason } from "./persisted-reason";

const Persisted = t.type({
  value: t.boolean,
  reasons: t.readonlyArray(PersistedReason),
});

type Persisted = t.TypeOf<typeof Persisted>;

export { Persisted };
