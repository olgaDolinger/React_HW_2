module.exports = {
  bail: 1,
  verbose: true,

  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],

  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
