import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
 

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
      semi: ["error", "always"],
    },
  },
];
