import rough from "roughjs";
import type { Options } from "roughjs/bin/core";

export const defaultUragakiOptions: Options = {
  roughness: 3.5,
  bowing: 2.5,
  strokeWidth: 2.5,
  fillStyle: "hachure",
  hachureAngle: -41,
  hachureGap: 5,
};

export function drawRoughRect(
  svg: SVGSVGElement,
  width: number,
  height: number,
  options?: Partial<Options>
) {
  clearSvg(svg);
  const rc = rough.svg(svg);
  const node = rc.rectangle(0, 0, width, height, {
    ...defaultUragakiOptions,
    ...options,
  });
  svg.appendChild(node);
}

export function drawRoughLine(
  svg: SVGSVGElement,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options?: Partial<Options>
) {
  const rc = rough.svg(svg);
  const node = rc.line(x1, y1, x2, y2, {
    ...defaultUragakiOptions,
    ...options,
  });
  svg.appendChild(node);
}

export function drawRoughEllipse(
  svg: SVGSVGElement,
  cx: number,
  cy: number,
  width: number,
  height: number,
  options?: Partial<Options>
) {
  const rc = rough.svg(svg);
  const node = rc.ellipse(cx, cy, width, height, {
    ...defaultUragakiOptions,
    ...options,
  });
  svg.appendChild(node);
}

export function drawRoughPath(
  svg: SVGSVGElement,
  path: string,
  options?: Partial<Options>
) {
  const rc = rough.svg(svg);
  const node = rc.path(path, {
    ...defaultUragakiOptions,
    ...options,
  });
  svg.appendChild(node);
}

export function clearSvg(svg: SVGSVGElement) {
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
}

export function seedFromString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}
