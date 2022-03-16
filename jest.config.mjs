const defaultConfig = {
  converageDirectory: "coverage",
  converageProvider: "v8",
  converageReporters: ["text", "lcov"],
  converageThreshold: {
    global: {
      brach: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"]
};
export default {
  projects: [
    {
      ...defaultConfig,
      testEnvironment: "node",
      displayName: "backend",
      collectCoverageFrom: ["server/", "!server/index.js"],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "public"
      ],
      testMatch: ["**/tests/**/server/**/*.test.js"]
    }
  ]
};
