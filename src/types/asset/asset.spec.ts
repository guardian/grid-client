import { Asset } from "./asset";
import { isRight } from "fp-ts/Either";

test("foo", () => {
  const data = {
    file: "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1315.jpg",
    size: 351690,
    mimeType: "image/jpeg",
    dimensions: {
      width: 1315,
      height: 1314,
    },
    secureUrl: "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1315.jpg",
  };

  const decoded = Asset.decode(data);

  expect(isRight(decoded)).toBe(true);
});
