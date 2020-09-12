import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";

const ActionData = t.type({
  author: t.string, // TODO make this type stricter, should be email
  date: DateFromISOString,
});

type ActionData = t.TypeOf<typeof ActionData>;

export { ActionData };
