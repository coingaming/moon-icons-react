# Moon Design System icons

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-icons-tw)](https://www.npmjs.com/package/@heathmont/moon-icons-tw)

## Introduction

This repository houses **SVG icons** you might need to build an application.

## Installing

1. Install dependencies and link local packages together:

   ```sh
   npm install
   ```

2. Run to fetch and save SVGs from particular page in Figma (optional):

   ```sh
   npm run figma:page
   ```

3. Run:

   ```sh
   npm run build
   ```

   **Note:** To update the icons directly from Figma, please set the proper environment variables:<br />
   FIGMA_TOKEN - Personal access tokens allow you to access your own data via the Figma API.<br />
   FIGMA_FILE_ID - The file ID is the string of random alphanumeric characters found in the section of the URL after _figma.com/file/_.

## Consuming

```bash
pnpm install --save @heathmont/moon-icons-tw
```

```javascript
import { ArrowsRight, ControlsPlus } from "@heathmont/moon-icons-tw";
```

## Release notes

**Please, don't forget manually update the release version in package.json to the new one. <br />**
New version of npm package @heathmont/moon-icons-tw will be automatically published when changes will be merged to the master branch.
