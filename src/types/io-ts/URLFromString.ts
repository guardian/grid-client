import * as t from "io-ts";
import { either } from "fp-ts/Either";

const URLFromString = new t.Type<URL, string, unknown>(
  "URLFromString",
  (u): u is URL => u instanceof URL,
  (u, c) =>
    either.chain(t.string.validate(u, c), (s) => {
      try {
        return t.success(new URL(s));
      } catch {
        return t.failure(u, c, `Cannot parse ${s} as URL.`);
      }
    }),
  (a) => a.toString()
);

type URLFromString = t.TypeOf<typeof URLFromString>;

export default URLFromString;
