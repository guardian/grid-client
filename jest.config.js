const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  testMatch: ["<rootDir>/src/**/*.spec.+(ts|tsx|js)"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src/" }),
};
