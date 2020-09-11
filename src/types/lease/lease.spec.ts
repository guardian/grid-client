import { Lease } from "./lease";
import { isRight } from "fp-ts/Either";

test("blah", () => {
  const parsed = Lease.decode({});
  expect(isRight(parsed)).toBe(true);
});
