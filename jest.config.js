/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testPathIgnorePatterns: ["./node_modules/", "./tests/", "./build/"],
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.ts", "**/*.test.js"],
  coveragePathIgnorePatterns: ["./tests/"],
};