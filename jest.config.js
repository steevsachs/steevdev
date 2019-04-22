module.exports = {
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test-utils/',
  ],
  moduleNameMapper: {
    '^~test-utils/(.*)$': '<rootDir>/test-utils/$1.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.js'],
  snapshotSerializers: ['<rootDir>/node_modules/snapshot-diff/serializer.js'],
  testEnvironment: 'jsdom-global',
  testPathIgnorePatterns: ['/utils/'],
  testRegex: 'src/.*(/__tests__/[^.]+.(?!integration)|\\.(test|spec))\\.tsx?$',
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
}
