import * as t from "io-ts";
import { ActionData } from "./action-data";

const Collection = t.type({
  path: t.array(t.string),
  pathId: t.string,
  actionData: ActionData,
  description: t.string,
});

type Collection = t.TypeOf<typeof Collection>;

export { Collection };
