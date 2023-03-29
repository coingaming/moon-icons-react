# Introduction

This repository houses **SVG icons** you might need to build an application.

## Installing

1. Install dependencies and link local packages together:

   ```sh
   pnpm install
   ```

2. Run to fetch and save SVGs from particular page in Figma (optional):

   ```sh
   pnpm run figma --page=PageName
   ```

3. Run:

   ```sh
   pnpm run build
   ```

## Consuming

```bash
pnpm install --save @heathmont/moon-icons-tw
```

```javascript
import { ArrowsRight, ControlsPlus } from '@heathmont/moon-icons-tw';
```