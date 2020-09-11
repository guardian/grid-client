import * as t from "io-ts";
import { Property } from "./property";

const Right = t.intersection([
  t.type({
    rightCode: t.string,
    properties: t.readonlyArray(Property),
  }),
  t.partial({
    acquired: t.boolean,
  }),
]);

type Right = t.TypeOf<typeof Right>;

export { Right };
