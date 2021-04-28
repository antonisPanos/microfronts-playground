module.exports = {
  rootDir: '../../',
  roots: ['<rootDir>/src/'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/__test__/**',
    '!**/(enums|models|types).ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
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
  testMatch: ['<rootDir>/src/**/*.(spec|int).(ts|tsx)'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  moduleDirectories: ['node_modules', 'libs'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
