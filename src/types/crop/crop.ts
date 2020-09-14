import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types";
import { Specification } from "./specification";
import { Asset } from "../asset";

const Crop = t.intersection([
  t.type({
    specification: Specification,
    assets: t.readonlyArray(Asset),
  }),
  t.partial({
    id: t.string,
    author: t.string,
    date: DateFromISOString,
    master: Asset,
  }),
]);

type Crop = t.TypeOf<typeof Crop>;

export { Crop };
