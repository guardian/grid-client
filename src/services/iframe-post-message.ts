import { PathReporter } from "io-ts/PathReporter";
import { either, isRight } from "fp-ts/Either";
import { IframePostMessage } from "../types";
import Service from "./service";
import { CropService } from "./crop";
import { Logger } from "../utils";

class IframePostMessageService extends Service<IframePostMessage> {
  isValid: boolean;
  protected data?: IframePostMessage;
  protected logger?: Logger;
  private readonly cropService?: CropService;

  constructor(payload: MessageEvent, logger: Logger | undefined = undefined) {
    super(logger);
    const parsed = IframePostMessage.decode(payload.data);

    this.isValid = isRight(parsed);

    if (this.isValid) {
      either.map(parsed, (data: IframePostMessage) => (this.data = data));
      this.cropService = new CropService(this.data?.crop.data, logger);
    } else {
      this.logger?.log(PathReporter.report(parsed));
    }
  }

  static withConsoleLogger(payload: MessageEvent): IframePostMessageService {
    return new IframePostMessageService(payload, console);
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
