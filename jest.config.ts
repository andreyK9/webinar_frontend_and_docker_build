module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules.*'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true,
      },
    },
  },
};
