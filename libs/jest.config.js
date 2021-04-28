module.exports = {
  rootDir: '.',
  roots: ['<rootDir>/models/', '<rootDir>/services/'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/services/**/*.{ts,tsx}',
    '!**/__test__/**',
    '!**/(enums|models|types).ts'
  ],
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: '<rootDir>/tsconfig.json',
      babelConfig: '<rootDir>/babel.config.js'
    },
    'babel-jest': {
      babelrcFile: '<rootDir>/babel.config.js'
    }
  },
  testMatch: ['<rootDir>/services/**/*.spec.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
