interface Logger {
  log: (message?: unknown, ...optionalParams: unknown[]) => void;
}

export default Logger;
