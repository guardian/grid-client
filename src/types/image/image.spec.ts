import { GridImage } from "./image";
import imageData from "~__fixtures__/image-data";
import { isRight } from "fp-ts/Either";

test("foo", () => {
  const parsed = GridImage.decode(imageData);
  expect(isRight(parsed)).toBe(true);
});
