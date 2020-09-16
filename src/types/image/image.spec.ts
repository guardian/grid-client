import { isLeft, isRight } from "fp-ts/Either";
import { GridImage } from "./image";
import { image } from "./__fixtures__/image";

test("decoding standard image response", () => {
  const parsed = GridImage.decode(image);
  expect(isRight(parsed)).toBe(true);
});

test("decoding invalid input", () => {
  const data = {
    foo: "bar",
  };

  const parsed = GridImage.decode(data);
  expect(isLeft(parsed)).toBe(true);
});
