# 2D Animation Spritesheet Generator

A local browser workspace for building side-scrolling 2D game scenes, importing or generating spritesheets, previewing animation clips, and organizing reusable scene assets.

The app is designed for fast visual iteration: open a scene, place the character and props, inspect every spritesheet used in that scene, tune metadata, preview movement, and save the finished setup.

## What You Can Do

- Create and save multiple scenes.
- Place backgrounds, characters, props, UI elements, and animated sprites as editable layers.
- Drag, resize, scale, reorder, hide, and show scene layers.
- Preview a playable side-scroller scene with character movement.
- Import or generate 12-frame and 16-frame spritesheets.
- Open the `Spritesheets` page to see every animation clip used by the current scene.
- Edit spritesheet metadata such as asset role, clip name, trigger type, game state, direction, loop mode, and tags.
- Save reusable assets and scenes into the local game asset library.

## Quick Start

### 1. Install Node.js

Install Node.js 20 or newer from [nodejs.org](https://nodejs.org/).

### 2. Clone the Repository

```bash
git clone https://github.com/NO6KIKO/2d-animation-spritesheet-generator.git
cd 2d-animation-spritesheet-generator
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Optional Environment File

The current local workflow does not require an API key. If you later enable cloud image generation, copy the example env file and add your own key:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Never commit `.env.local`. It is ignored by Git.

### 5. Run the App

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is already in use, run it on another port:

```bash
PORT=3001 npm run dev
```

On Windows PowerShell:

```powershell
$env:PORT=3001
npm run dev
```

Then open `http://localhost:3001`.

## Main Workflow

1. Open the `Scenes` tab to choose, save, create, or delete scenes.
2. Open the `Scene` tab to arrange backgrounds, characters, props, and animation layers.
3. Use the layer list to control which object is above or below another object.
4. Open the `Spritesheets` tab to inspect every spritesheet animation used in the current scene.
5. Expand a spritesheet card with `Edit` to tune clip metadata, trigger settings, tags, loop mode, and direction.
6. Use the `Action` tab to preview the scene and character movement.
7. Save the scene when the composition feels ready.

## Spritesheet Page

The `Spritesheets` page is a scene-level animation library. It lists each spritesheet clip currently attached to scene layers, including character animations, animated props, UI animations, and imported assets.

Each card supports:

- `Preview`: play that clip in the frame preview.
- `Locate Layer`: jump back to the scene editor with the matching layer selected.
- `PNG`: download the underlying spritesheet image when available.
- `Edit`: change metadata for reusable confirmed assets.

Built-in scene kit assets can be previewed and layered. Persistent metadata editing is available for confirmed user assets.

## Game Asset Library

Saved assets and scenes are stored locally under:

```text
public/generated/game_asset_library.json
```

Generated or imported PNG files are also stored in:

```text
public/generated/
```

This makes the project easy to keep as a self-contained prototype. If you add large generated assets, review them before committing.

## Available Scripts

```bash
npm run dev
```

Starts the local Express and Vite development server.

```bash
npm run build
```

Builds the frontend and bundles the server into `dist/`.

```bash
npm run start
```

Runs the production build from `dist/`.

```bash
npm run lint
```

Runs TypeScript checks without emitting files.

## Project Structure

```text
src/
  App.tsx          Main editor UI and scene/spritesheet workflow
  types.ts        Shared scene, asset, animation, and interaction types
  index.css       App styling

server.ts         Express API, Vite middleware, local spritesheet endpoints
public/generated/ Generated PNG assets and local game library data
```

## Notes

- The app is local-first. Most editing and preview work happens without a cloud API.
- `.env.local` is ignored so private keys are not pushed to GitHub.
- The scene editor is built for side-scrolling 2D game prototyping, with reusable layers, spritesheets, and scene states as the core model.
