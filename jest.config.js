module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleNameMapper: {
    // Add any module name mappings you need
  },
  testEnvironment: 'jest-environment-jsdom', // Use jest-environment-jsdom as the test environment
};