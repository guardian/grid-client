import { either, isLeft, isRight } from "fp-ts/Either";
import { Collection } from "./collection";

test("valid input", () => {
  const data = Collection.decode({
    path: ["one", "two", "three"],
    pathId: "one",
    actionData: {
      author: "foo.bar@example.com",
      date: "2020-12-25T00:00:00.000+00:00",
    },
    description: "this is a collection",
  });

  expect(isRight(data));

  either.map(data, (collection) => {
    expect(collection.actionData.date).toEqual(new Date("2020-12-25T00:00:00.000+00:00"));
  });
});

test("invalid input", () => {
  const data = Collection.decode({
    path: "not-an-array",
    pathId: "one",
    actionData: {
      author: "foo.bar@example.com",
      date: "2020-12-25T00:00:00.000+00:00",
    },
    description: "this is a collection",
  });

  expect(isLeft(data));
});
