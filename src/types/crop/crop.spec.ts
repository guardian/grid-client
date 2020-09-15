import { isRight } from "fp-ts/Either";
import { Crop } from "./crop";
import { standardCrop } from "./__fixtures__/crop";

test("decoding a crop", () => {
  const parsed = Crop.decode(standardCrop);
  expect(isRight(parsed)).toBe(true);
});
