import validate from "./iframe-post-message";
import { postMessageData } from "../__fixtures__/post-message";

test("validation of bad data", () => {
  const input = {
    country: "UK",
    continent: "Europe",
  };
  expect(validate(input)).toBeUndefined();
});

test("validation of nonsense data", () => {
  expect(validate(123)).toBeUndefined();
});

test("validation of real data", () => {
  expect(validate(postMessageData)).toBeDefined();
});

test("validation of close data", () => {
  const input = {
    image: {},
    crop: {},
  };

  expect(validate(input)).toBeUndefined();
});
