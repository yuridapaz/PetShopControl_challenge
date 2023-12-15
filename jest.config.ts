export default {
  // preset: 'ts-jest',
  // testEnvironment: 'jest-environment-jsdom',
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  //   // process `*.tsx` files with `ts-jest`
  // },
  // moduleNameMapper: {
  //   '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  // },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '^@app/(.*)$': '<rootDir>/$1',
  },
};
