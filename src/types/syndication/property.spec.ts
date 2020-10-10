import { isLeft, isRight } from "fp-ts/Either";
import { Property } from "./property";

test("decoding payloads that use null instead of undefined should be a left", () => {
  const parsed = Property.decode({
    propertyCode: "foo",
    expiresOn: null,
    value: null,
  });
  expect(isLeft(parsed)).toBe(true);
});

test("decoding payloads that use undefined for missing values should be a right", () => {
  const parsed = Property.decode({
    propertyCode: "foo",
    expiresOn: undefined,
    value: undefined,
  });
  expect(isRight(parsed)).toBe(true);
});

test("decoding payloads that omit missing values should be a right", () => {
  const parsed = Property.decode({
    propertyCode: "foo",
  });
  expect(isRight(parsed)).toBe(true);
});
