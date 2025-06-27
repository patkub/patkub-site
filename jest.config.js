/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/test/jest.setup.js"
  ]
};

export default config;