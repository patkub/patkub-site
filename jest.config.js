/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/test/jest.polyfills.js",
    "<rootDir>/test/jest.setup.js"
  ],
  transform: {
    "^.+\\.(js|mjs)$": "babel-jest"
  },
  transformIgnorePatterns: []
};

export default config;