# Gorest Agent Workflow Guide

Use this guide for larger end-to-end scene workflows. For routine edits, `AGENTS.md` is enough; for character spritesheets, also read `SPRITESHEET_GENERATION_POLICY.md`.

Gorest uses a no-UI workflow: the user describes the result, and the agent creates assets, updates metadata, and verifies the browser-visible output.

## Standard Flow

1. Understand the requested scene, asset, spritesheet, or editor behavior.
2. Create or import finished visual assets.
3. Save project assets under `public/generated/`.
4. Add reusable assets, animation clips, and scenes to `public/generated/game_asset_library.json`.
5. Configure layer order, scale, opacity, lighting, animation IDs, trigger metadata, and preview behavior.
6. Keep one-frame sprites static.
7. Run verification and report the changed files/assets.

## Output Contract

A complete workflow may produce:

- background image
- foreground props, characters, effects, or UI elements
- spritesheet and preview when animated
- scene metadata with layers wired to asset IDs
- reusable animation clip metadata
- short notes only when they help future agents repeat the workflow

## Prompt Shape

The user can stay natural. A useful full-scene prompt usually contains:

```text
Scene mood:
[genre, lighting, cultural setting, camera framing]

Background:
[environment, aspect ratio, side-scroller/close-up/long horizontal]

Foreground props:
[objects and placement]

Spritesheets:
[animated assets, frame count, grid, frame size, fps, loop behavior]

Scene wiring:
[layer order, static vs animated assets, game state, preview behavior]
```

## Authoring Notes

- If generated text may be inaccurate, render exact text with code after image generation.
- Chroma-key generation is useful for props: generate on a flat key color, remove it locally, then crop transparent PNG.
- Character spritesheets must use drawn bitmap art first; scripts only clean, crop, anchor, pack, preview, and wire metadata.
- Use spritesheet SVG frame wrappers only to slice the finished PNG sheet for playback; wrappers are not the artwork.
