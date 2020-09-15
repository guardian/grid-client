import { isRight } from "fp-ts/Either";
import { Lease } from "./lease";

test("decoding an empty lease", () => {
  const parsed = Lease.decode({});
  expect(isRight(parsed)).toBe(true);
});
