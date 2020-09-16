import { Left, Right } from "fp-ts/Either";
import { Errors } from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { Logger } from "./logger";

class Reporter {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  log(parsed: Left<Errors> | Right<unknown>): void {
    this.logger.log(PathReporter.report(parsed));
  }

  static get default(): Reporter {
    return new Reporter(console);
  }
}

export { Reporter };
