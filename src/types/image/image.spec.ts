import { isRight } from "fp-ts/Either";
import { GridImage } from "./image";
import { image } from "./__fixtures__/image";

test("decoding standard image response", () => {
  const parsed = GridImage.decode(image);
  expect(isRight(parsed)).toBe(true);
});
