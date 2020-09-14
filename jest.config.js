module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  testMatch: ["<rootDir>/src/**/*.spec.+(ts|tsx|js)"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  reporters: ["default", "jest-github-actions-reporter"],
  testLocationInResults: true,
};
