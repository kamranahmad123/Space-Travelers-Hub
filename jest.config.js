module.exports = {
    preset: '@babel/preset-env',
    testMatch: ['**/__tests__/**/*.test.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    collectCoverage: true,
    coverageDirectory: './coverage',
  };
  