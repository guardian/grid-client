import { isRight } from "fp-ts/Either";
import { GridImage } from "./image";
import imageData from "../../__fixtures__/image-data";

test("foo", () => {
  const parsed = GridImage.decode(imageData);
  expect(isRight(parsed)).toBe(true);
});
