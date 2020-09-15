import { isRight } from "fp-ts/Either";
import { Specification } from "./specification";
import { standardCrop } from "./__fixtures__/crop";

test("decoding a crop specification", () => {
  const parsed = Specification.decode(standardCrop.specification);
  expect(isRight(parsed)).toBe(true);
});
