# Spritesheet Generation Policy

Use this file only when creating, editing, or debugging character/creature/mascot spritesheets. The browser is a result viewer; final character animation should come from drawn bitmap art plus deterministic post-processing.

## Non-Negotiables

- Visible character art must come from a finely drawn image-generation/redraw process.
- Do not use SVG, Canvas, PIL, CSS, procedural lines, local warps, puppet rigs, bobbing, rotation, or overlays as final character art.
- Code is allowed only after the art is drawn: chroma removal, alpha cleanup, grid/cell detection, uniform scaling, anchor normalization, packing, preview generation, and JSON wiring.
- Require extremely high clarity: sharp anime line work, eyes, tears, hair strands, mouth shapes, hands, accessories, fabric texture, and clean edges.
- Prefer downsampling from high-detail source art. Do not upscale blurry low-resolution frames and call them production-ready.
- Preserve identity, outfit, palette, silhouette, and proportions across all frames.

## Prompt Requirements

For redraw spritesheets, include:

- same character identity, outfit, palette, proportions, camera, framing, and scale across all cells
- extremely high clarity and crisp face/eye/hair/clothing details
- no simple/vector/flat/sketch/low-detail style unless requested
- no squashing, stretching, or chibi conversion unless requested
- stable frame registration: no random position jumps, camera shifts, or scale changes

For walk/run cycles, request actual key poses:

- 16-frame loop when possible
- contact, down, passing, up, opposite contact, opposite down, opposite passing, opposite up
- frame 16 should be the in-between before frame 1, not a duplicate held frame
- feet/hips should form a coherent gait; reject random pose variants

## Reference-Image Protocol

- Use the reference as identity/style anchor.
- Establish or preserve a canonical frame before generating motion.
- Do not turn a front-facing reference into side-view motion unless asked.
- A side-view walk from a front-only reference requires a separate turnaround/redesign step.

## Normalization Rules

Always normalize redrawn sheets before final display:

1. Remove chroma/background first when needed.
2. Detect real source cells before splitting; do not assume a perfect equal grid unless detection fails.
3. Measure alpha or foreground clusters for every cell.
4. Use one global uniform scale unless fixing a known source-generation error with documented metadata.
5. Use a stable root/face/head anchor appropriate to the asset:
   - full-body walk/run: root or upper-torso anchor, usually with bottom/feet kept inside frame
   - portrait/facial expression: face/head anchor and fixed head size
   - prop/static sprite: visible bbox centering is acceptable
6. Keep the requested final frame size, commonly 512x512 for high-detail portraits or 256x256 for compact game sprites.
7. Store useful metadata: `generationMode`, `sourceCells`/`gridDetection`, `frameSize`, `sheetSize`, `qualityPolicy`, `proportionPolicy`, `rootAnchorPolicy` or face/head-anchor policy, and raw sheet path.

## Auto Grid Detection

Before reading generated sheets:

- Analyze source geometry after background removal.
- Compute foreground projections or connected components.
- Derive row/column boundaries from real sprite clusters and gaps.
- Fall back to proportional splitting only when cluster detection fails.
- This prevents uneven generated spacing from causing cropped limbs, white/green edges, or animation jumps.

## Forbidden Final Outputs

- Whole-image drifting, floating, bobbing, scaling, or rotation as a character motion cycle.
- Fake expression changes drawn with code over one still image.
- Per-frame bbox centering for walk cycles; moving limbs must not drag the whole character.
- Non-uniform character scaling (`scaleX`/`scaleY`) that changes proportions.
- Low-detail or smeared faces, tears, hair, hands, or fabric.

## Acceptance Checks

- Inspect the final sheet at 100% scale, preferably on a dark background for transparency.
- Check hair edges, eyes, tears, mouth, hands, accessories, clothing, and alpha cleanup.
- Scrub/preview the animation for root drift, Y bounce, head-size pops, loop seams, and camera jumps.
- Keep raw and normalized sheets for debugging.
