function blobUrlFromSvg(svg: string) {
  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
}

export async function drawSvgFrame(ctx: CanvasRenderingContext2D, svg: string, x: number, y: number, w: number, h: number) {
  const imgMatch = svg.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to render PNG frame"));
      image.src = imgMatch[1];
    });
    ctx.drawImage(img, x, y, w, h);
    return;
  }
  const url = blobUrlFromSvg(svg);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to render SVG frame"));
      image.src = url;
    });
    ctx.drawImage(img, x, y, w, h);
  } finally {
    URL.revokeObjectURL(url);
  }
}
