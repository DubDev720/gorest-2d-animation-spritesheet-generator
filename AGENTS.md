# Gorest Agent Instructions

This repo is a no-UI 2D game and animation generative platform. The user should be able to describe a scene, asset, spritesheet, or editor workflow in natural language, and the agent should update the project files directly instead of asking the user to operate UI controls manually.

## Start Here

- Read `README.md` and `docs/AGENT_WORKFLOW.md` before making product or asset changes.
- Recommended model: GPT-5.5 (`gpt-5.5`) for coding-heavy, tool-heavy, long-context workflows in this repo.
- Keep work aligned with the existing React feature structure and the asset library in `public/generated/game_asset_library.json`.
- Store generated app assets under `public/generated/` unless the asset is a brand/logo asset.
- App logo usage should stay black in the application. The colored Gorest logo is for README/community presentation.

## Asset Library Rules

- Add reusable visual assets to `public/generated/game_asset_library.json`.
- Add scenes to the same file under `scenes`.
- Use deterministic, descriptive IDs for generated assets and scenes.
- A one-frame sprite is a static image. Do not configure it as an auto-playing animation unless the user explicitly asks for that behavior.
- Multi-frame spritesheets should include consistent `frameSize`, `sheetSize`, `gridColumns`, `fps`, `frames`, and a reusable animation clip.
- For exact visible text, prefer code-assisted rendering over pure image generation so the final asset uses the requested wording.

## Product Rules

- Favor no-UI flows: the browser is the visual result surface, while Codex handles asset creation, JSON wiring, metadata, and code changes.
- Keep controls and layout restrained, readable, and practical. Avoid marketing-heavy language in app UI.
- Maintain right-click and keyboard workflows on the 2D Canvas.
- Keep `Spritesheet Only` detail back navigation returning to the `Spritesheet Only` gallery, not the home page.

## License Boundary

- Source code is MIT unless otherwise stated.
- Media under `public/` and `docs/` is example/demo material and is not CC0 or MIT unless a file explicitly says so.
- Do not add language that lets users treat Gorest IP, generated examples, or demo images as freely reusable assets.

## Verification

- Run `npm.cmd run lint` and `npm.cmd run build` after code or asset-library changes.
- Visually inspect newly generated image assets when possible.
- Do not commit or push unless the user explicitly asks.
