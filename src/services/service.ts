import { Reporter } from "../utils";

abstract class Service<T> {
  abstract isValid: boolean;
  protected data?: T;
  protected reporter?: Reporter;

  protected constructor(reporter?: Reporter) {
    this.reporter = reporter;
  }
}

export default Service;
