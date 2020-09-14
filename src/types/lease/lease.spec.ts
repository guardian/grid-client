import { isRight } from "fp-ts/Either";
import { Lease } from "./lease";

test("blah", () => {
  const parsed = Lease.decode({});
  expect(isRight(parsed)).toBe(true);
});
