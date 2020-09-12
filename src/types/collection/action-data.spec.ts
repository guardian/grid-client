import { ActionData } from "./action-data";
import { either, isLeft, isRight } from "fp-ts/Either";

test("valid input", () => {
  const data = ActionData.decode({
    author: "foo.bar@example.com",
    date: "2020-12-25T00:00:00.000+00:00",
  });

  expect(isRight(data));

  either.map(data, (actionData) => {
    expect(actionData.author).toEqual("foo.bar@example.com");
    expect(actionData.date).toEqual(new Date("2020-12-25T00:00:00.000+00:00"));
  });
});

test("invalid input of the correct shape", () => {
  const data = ActionData.decode({
    author: "rhubarb and custard",
    date: "invalid-date",
  });

  expect(isLeft(data));
});

test("invalid input of the incorrect shape", () => {
  const data = ActionData.decode({
    name: "strawberries and cream",
  });

  expect(isLeft(data));
});
