module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'jsdom',
};
