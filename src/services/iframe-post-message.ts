import { IframePostMessage } from "~types";
import { either, isRight } from "fp-ts/Either";

class IframePostMessageService {
  payload: MessageEvent;
  isValid: boolean;
  data?: IframePostMessage;

  constructor(payload: MessageEvent) {
    this.payload = payload;

    const parsed = IframePostMessage.decode(payload.data);

    this.isValid = isRight(parsed);

    if (this.isValid) {
      either.map(parsed, (data: IframePostMessage) => {
        this.data = data;
      });
    }
  }

  get imageId(): string | undefined {
    return this.data?.image.data.id;
  }
}

export { IframePostMessageService };
