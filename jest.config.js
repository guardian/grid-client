module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testMatch: [
    "<rootDir>/src/**/*.spec.+(ts|tsx|js)"
  ],
  moduleFileExtensions: [
    "ts", 
    "tsx", 
    "js"
  ]
};