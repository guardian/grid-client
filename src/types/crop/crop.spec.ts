import { isRight } from "fp-ts/Either";
import { Crop } from "./crop";
import cropData from "../../__fixtures__/crop-data";

test("decoding a crop", () => {
  const parsed = Crop.decode(cropData);
  expect(isRight(parsed)).toBe(true);
});
