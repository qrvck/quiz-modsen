/** @type {import('jest').Config} */

const config = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest/setup/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup/jest.setupAfterEnv.ts'],
  rootDir: '../',
  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/jest/mock/fileMock.js',
    '\\.(svg)$': '<rootDir>/jest/mock/SVGMock.tsx',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  verbose: true,
};

export default config;
