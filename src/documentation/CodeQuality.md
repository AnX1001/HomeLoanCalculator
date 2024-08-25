# Pre-Commit Error Detection and Style Enforcement

This project uses Husky to trigger a pre-commit hook, which, in conjunction with the lint-staged library, runs the scripts `npm run lint` and `npm lint:css` when you start a Git commit. These scripts are configured to lint the codebase using ESLint for JavaScript/TypeScript files and Stylelint for CSS files, ensuring both error detection and adherence to coding standards before code is committed.
