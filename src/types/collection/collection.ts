import * as t from "io-ts";
import { ActionData } from "./action-data";

// TODO correct this after https://github.com/guardian/grid/issues/3005 is resolved
const BrokenCollection = t.type({});
type BrokenCollection = t.TypeOf<typeof BrokenCollection>;

const Collection = t.type({
  path: t.array(t.string),
  pathId: t.string,
  actionData: ActionData,
  description: t.string,
});

type Collection = t.TypeOf<typeof Collection>;

export { Collection, BrokenCollection };
