# Gorest Agent Workflow Guide

Gorest combines dynamic software with a no-UI workflow: the user describes the result they want, and the agent updates the tool, generated assets, scene data, and metadata directly.

The browser should show the result. The user should not need to click through fixed UI steps to build the result by hand.

## Recommended Model

Use GPT-5.5 (`gpt-5.5`) for this workflow. It is recommended for coding-heavy, tool-heavy, long-context tasks such as reading the app structure, generating assets, wiring scene metadata, editing spritesheet clips, and verifying the final result.

Start with balanced reasoning for normal scene and documentation edits. Use higher reasoning for full asset-library rewrites, multi-file architecture changes, or complex debugging.

## How To Handle A User Prompt

When the user describes a new scene or asset, treat it as an end-to-end production request.

1. Create or import the required visual assets.
2. Put finished assets in `public/generated/`.
3. Add reusable assets to `public/generated/game_asset_library.json`.
4. Add or update the scene in the same asset library.
5. Configure layer order, scale, opacity, lighting, and animation metadata.
6. Keep one-frame sprites static.
7. Run verification and report what changed.

## Output Contract

A complete workflow usually produces:

- A background image.
- One or more props, characters, effects, or UI elements.
- A spritesheet when the asset is animated.
- Scene metadata with layers wired to the right asset IDs.
- Clip metadata for each reusable animation.
- Short documentation when the workflow teaches future agents how to repeat it.

## Prompt Template

```text
Create a new scene in the asset library.

Scene mood:
[Describe genre, lighting, cultural setting, camera framing, and background elements.]

Background:
[Describe the environment. Include whether it should be 16:9, side-scroller, close-up, or long horizontal.]

Foreground props:
[List props and where they should sit.]

Spritesheets:
[Describe each animated asset, frame count, grid, frame size, fps, title text if any, and loop behavior.]

Scene wiring:
[Describe layer order, static vs animated assets, metadata, trigger type, game state, and any preview behavior.]

Do not rely on manual UI operation. Generate the assets, wire the scene into the local asset library, and keep one-frame assets static.
```

## Example: The Horror Note

This is the kind of prompt a user may give while completing a full Gorest workflow:

```text
Create a new Chinese-horror scene.

Background:
Make a dark East Asian shrine courtyard with a weathered torii gate, old temple, ritual fire, moonlight, smoke, and a clear central ground area for foreground objects.

Foreground props:
Place a thick horror notebook / novel in front of the scene. The cover title should read `惊魂笔记` with `The Horror Note` underneath. Add a brush pen, ink bottle, ink stone, and ink marks around the book.

Spritesheet:
Create a dynamic title UI spritesheet with `惊魂笔记` on the top line and `The Horror Note` on the bottom line. Use a subtle red glow and scratch flicker. Make it a 16-frame 4 x 4 sheet, looped at 8 fps.

Scene wiring:
Add the new background as a locked background layer. Add the title UI as an animated effect layer. Add the notebook, pen, and ink as a static foreground prop layer. Save everything into public/generated/game_asset_library.json so the scene appears in the app.
```

## Authoring Notes

- If generated text may be inaccurate, render the exact text with code after image generation.
- Chroma-key generation is useful for props: generate on a flat green background, remove the green, then crop the transparent PNG.
- Use static sprite metadata for one-frame props, even if the image is stored in the same sprite structure as animated assets.
- Use spritesheet SVG frame wrappers that reference the full PNG sheet for consistent playback.
- Keep the user's prompt style natural. The user should describe the desired game result, not low-level editor operations.
