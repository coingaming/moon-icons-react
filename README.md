# Moon Design System icons

[![npm (scoped)](https://img.shields.io/npm/v/@heathmont/moon-icons-tw)](https://www.npmjs.com/package/@heathmont/moon-icons-tw)

This repository houses **SVG icons** you might need to build your application using the Moon Design System.

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/heathmont/moon-icons-react.git
   cd moon-icons-react
   ```

2. Create an `.env` file in the root directory with the following variables:

   `FIGMA_TOKEN` - Personal Figma access tokens with file content read-only permissions.<br />
   `FIGMA_FILE_ID` - The string of random alphanumeric characters found in your Figma URL after figma.com/file/.

## Build

1. Install dependencies:

   ```bash
   npm install
   ```

2. Fetch SVGs from a specific page in Figma:

   ```bash
   npm run figma:page
   ```

3. Generate React components from the fetched SVGs:

   ```bash
   npm run build
   ```

## Release

1. Manually update `version` in `package.json` file to the next patch version.

2. Install updated dependencies:

   ```bash
   npm install
   ```

3. Create a semantic PR into the `main` branch.

A version of the npm package `@heathmont/moon-icons-tw` will be automatically published in approximately 5 minutes after your changes are merged to the `main` branch.

## Usage

1. Install the icons' package in your project

```bash
pnpm install @heathmont/moon-icons-tw
# or
npm install @heathmont/moon-icons-tw
# or
yarn @heathmont/moon-icons-tw
```

2. Import and use an icon in your application. Add an optional `className` for modifying size and color of the icon.

```tsx
import { OtherFrame } from "@heathmont/moon-icons-tw";

const MyComponent = () => (
  <>
    // with Moon text sizes and colors
    <OtherFrame className="text-moon-20 text-chichi" />
    // or with Tailwind text sizes and colors
    <OtherFrame className="text-xl text-red-500" />
  </>
);
```
