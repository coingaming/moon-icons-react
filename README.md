# Moon Design System icons

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-icons-tw)](https://www.npmjs.com/package/@heathmont/moon-icons-tw)

## Introduction

This repository houses **SVG icons** you might need to build your application.

## Installing

0. Set proper environment variables:

   `FIGMA_TOKEN` - Personal Figma access tokens with file content read-only activated.
   `FIGMA_FILE_ID` - The Figma file ID is the string of random alphanumeric characters found in the section of the URL after \_figma.com/file/\*.

1. Install dependencies and link local packages together:

   ```bash
   npm install
   ```

2. Fetch and save SVGs from particular page in Figma:

   ```bash
   npm run figma:page
   ```

3. Generate `tsx` icon files out of the fetched SVGs:

   ```bash
   npm run build
   ```

## Releasing

1. Manually update `version` in `package.json` file to the next patch version.

2. Install updated dependencies:

   ```bash
   npm install
   ```

3. Create a semantic PR into a `main` branch.

New version of npm package `@heathmont/moon-icons-tw` will be automatically published in approximately 5 minutes, when your changes will be merged to the `main` branch.

## Consuming

```bash
pnpm install --save @heathmont/moon-icons-tw
```

```tsx
import { ArrowsRight, ControlsPlus } from "@heathmont/moon-icons-tw";
```
