import { Specification } from "./specification";
import { isRight } from "fp-ts/Either";
import cropData from "~__fixtures__/crop-data";

test("decoding a crop specification", () => {
  const parsed = Specification.decode(cropData.specification);
  expect(isRight(parsed)).toBe(true);
});
