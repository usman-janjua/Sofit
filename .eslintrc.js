module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  globals: {
    window: true,
    document: true,
    require: true,
    module: true,
    console: true,
    Promise: true,
    __dirname: true,
    __webpack_public_path__: true,
    process: true,
  },
  rules: {
	"no-undef": "off", 
    "no-console": "off",
    "react/display-name": "off",
	"react/prop-types": "off"
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn", // <--- THIS IS THE NEW RULE
  },
  env: {
    jest: true,
    mocha: true,
  },
};
