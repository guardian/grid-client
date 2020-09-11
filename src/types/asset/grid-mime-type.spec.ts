import { GridMimeType } from "./grid-mime-type";
import { isLeft, isRight } from "fp-ts/Either";

test("valid input", () => {
  ["image/jpeg", "image/png", "image/tiff"].forEach((mime) => {
    expect(isRight(GridMimeType.decode(mime)));
  });
});

test("invalid input", () => {
  expect(isLeft(GridMimeType.decode("pineapple cake")));
});
