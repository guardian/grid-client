import { either, isLeft, isRight } from "fp-ts/Either";
import URLFromString from "./URLFromString";

test("valid input", () => {
  const value = URLFromString.decode("https://a.domain.com/path/to/resource");

  expect(isRight(value)).toBe(true);

  either.map(value, (url) => {
    expect(url.toString()).toEqual("https://a.domain.com/path/to/resource");
  });
});

test("invalid input", () => {
  const value = URLFromString.decode("invalid-url");
  expect(isLeft(value)).toBe(true);
});
