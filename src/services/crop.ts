import { either, isRight } from "fp-ts/Either";
import Service from "./service";
import { Asset } from "../types/asset";
import { Crop } from "../types/crop";
import { Reporter } from "../utils";

class CropService extends Service<Crop> {
  isValid: boolean;
  protected data?: Crop;
  protected reporter?: Reporter;

  constructor(payload: unknown, reporter: Reporter | undefined = undefined) {
    super(reporter);

    if (Crop.is(payload)) {
      this.isValid = true;
      this.data = payload;
    } else {
      const parsed = Crop.decode(payload);

      this.isValid = isRight(parsed);

      if (this.isValid) {
        either.map(parsed, (data: Crop) => (this.data = data));
      } else {
        this.reporter?.log(parsed);
      }
    }
  }

  get highestQualityAsset(): Asset | null {
    if (!this.isValid) return null;

    const { assets, master } = this.data!;

    if (master) {
      return master;
    }

    const assetsWithSize = assets.filter((asset) => !!asset.size);

    if (assetsWithSize.length === 0) {
      // if there are no assets with a `size` property,
      // just return the first as there's no way to determine highest quality
      return assets[0];
    }

    return assetsWithSize.sort((a, b) => b.size! - a.size!)[0];
  }
}

export { CropService };
