import { CropService } from "./crop";
import {
  standardCrop,
  legacyFormat__missingMaster,
  legacyFormat__missingMasterAndAssetSize,
} from "./__fixtures__/crop";

test("extraction of highest quality asset", () => {
  const cropService = new CropService(standardCrop);
  expect(cropService.isValid).toBe(true);

  const highestQualityAsset = cropService.highestQualityAsset!;

  expect(highestQualityAsset).toEqual({
    file: new URL(
      "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/master/1315.jpg"
    ),
    size: 951019,
    mimeType: "image/jpeg",
    dimensions: {
      width: 1315,
      height: 1314,
    },
    secureUrl: new URL(
      "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/master/1315.jpg"
    ),
  });
});

test("extraction of highest quality asset when no master", () => {
  const cropService = CropService.withConsoleLogger(legacyFormat__missingMaster);

  expect(cropService.isValid).toBe(true);

  const highestQualityAsset = cropService.highestQualityAsset!;

  expect(highestQualityAsset).toEqual({
    file: new URL("https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1315.jpg"),
    size: 351690,
    mimeType: "image/jpeg",
    dimensions: {
      width: 1315,
      height: 1314,
    },
    secureUrl: new URL(
      "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1315.jpg"
    ),
  });
});

test("extraction of highest quality asset when no master or sizes", () => {
  const cropService = CropService.withConsoleLogger(legacyFormat__missingMasterAndAssetSize);

  expect(cropService.isValid).toBe(true);

  const highestQualityAsset = cropService.highestQualityAsset!;

  expect(highestQualityAsset).toEqual({
    file: new URL("https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1000.jpg"),
    mimeType: "image/jpeg",
    dimensions: {
      width: 1000,
      height: 1000,
    },
    secureUrl: new URL(
      "https://media-origin.grid.local/a820ad09876754cae2b1d44da01d0d9f8a83749d/233_0_1315_1314/1000.jpg"
    ),
  });
});
