module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['html', 'text'],
};