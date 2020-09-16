import { either, isRight } from "fp-ts/Either";
import { IframePostMessage } from "../types";
import Service from "./service";
import { CropService } from "./crop";
import { Reporter } from "../utils";

class IframePostMessageService extends Service<IframePostMessage> {
  isValid: boolean;
  protected data?: IframePostMessage;
  protected reporter?: Reporter;
  private readonly cropService?: CropService;

  constructor(payload: MessageEvent, reporter: Reporter | undefined = undefined) {
    super(reporter);
    const parsed = IframePostMessage.decode(payload.data);

    this.isValid = isRight(parsed);

    if (this.isValid) {
      either.map(parsed, (data: IframePostMessage) => (this.data = data));
      this.cropService = new CropService(this.data?.crop.data, reporter);
    } else {
      this.reporter?.log(parsed);
    }
  }

  get imageId(): string | null {
    return this.isValid ? this.data!.image.data.id : null;
  }

  get highestQualityImageURL(): URL | null {
    if (!this.cropService) return null;

    const highestQualityAsset = this.cropService.highestQualityAsset;

    if (!highestQualityAsset) return null;

    return highestQualityAsset.secureUrl || highestQualityAsset.file;
  }
}

export { IframePostMessageService };
