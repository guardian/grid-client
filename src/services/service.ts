import Logger from "~utils/logger";

abstract class Service<T> {
  abstract isValid: boolean;
  protected data?: T;
  protected logger?: Logger;

  protected constructor(logger?: Logger) {
    this.logger = logger;
  }
}

export default Service;
