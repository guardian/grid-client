import { IframePostMessageService } from "./iframe-post-message";
import iframePostMessageData from "~__fixtures__/iframe-post-message-data";

test("validation of bad data", () => {
  const input = new MessageEvent("*", {
    data: {
      country: "UK",
      continent: "Europe",
    },
  });

  expect(new IframePostMessageService(input).isValid).toBe(false);
});

test("validation of nonsense data", () => {
  const input = new MessageEvent("*", { data: 123 });
  expect(new IframePostMessageService(input).isValid).toBe(false);
});

test("validation of close data", () => {
  const input = new MessageEvent("*", {
    data: {
      image: {},
      crop: {},
    },
  });

  expect(new IframePostMessageService(input).isValid).toBe(false);
});

test("can extract image id and url to master crop from real postMessage data", () => {
  const iframeService = new IframePostMessageService(iframePostMessageData);
  expect(iframeService.isValid).toBe(true);
  expect(iframeService.imageId).toEqual("a820ad09876754cae2b1d44da01d0d9f8a83749d");

  // expect(validated?.crop.data.master?.secureUrl?.toString()).toEqual(
  //   "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/master/1315.jpg"
  // );
});
