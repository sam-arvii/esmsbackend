import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 1. Remove the standalone 'eslintPluginPrettier' from line 10

  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
      "no-var": "error",

      // 2. Add the actual prettier rule execution here
      "prettier/prettier": "error",
    },
  },

  // 3. Append the prettier config at the end to turn off conflicting ESLint rules
  eslintConfigPrettier,

  {
    ignores: ["dist/", "node_modules/", "coverage/"],
  },
];
