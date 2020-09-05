import validate from "./iframe-post-message";
import postMessageData from "~__fixtures__/post-message";

test("validation of bad data", () => {
  const input = new MessageEvent("*", {
    data: {
      country: "UK",
      continent: "Europe",
    },
  });
  expect(validate(input)).toBeUndefined();
});

test("validation of nonsense data", () => {
  const input = new MessageEvent("*", { data: 123 });
  expect(validate(input)).toBeUndefined();
});

test("can extract image id and url to master crop from real postMessage data", () => {
  const validated = validate(postMessageData);

  expect(validated).toBeDefined();

  expect(validated?.image.data.id).toEqual("a820ad09876754cae2b1d44da01d0d9f8a83749d");

  expect(validated?.crop.data.master?.secureUrl?.toString()).toEqual(
    "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/master/1315.jpg"
  );
});

test("validation of close data", () => {
  const input = new MessageEvent("*", {
    data: {
      image: {},
      crop: {},
    },
  });

  expect(validate(input)).toBeUndefined();
});
