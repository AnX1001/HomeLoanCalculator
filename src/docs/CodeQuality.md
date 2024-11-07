# Pre-Commit Error Detection and Style Enforcement

- **Husky Integration**: Triggers a pre-commit hook during Git commits.  
- **Lint-Staged**: Runs specific scripts on staged files before committing.  
- **Scripts Executed**:  
  - `npm run lint` (ESLint for JavaScript/TypeScript).  
  - `npm lint:css` (Stylelint for CSS).  
- **Purpose**: Ensures error detection and adherence to coding standards before committing code.  