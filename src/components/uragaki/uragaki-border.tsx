import React, { useRef, useEffect, useState, useCallback } from "react";
import rough from "roughjs";
import type { Options } from "roughjs/bin/core";
import { defaultUragakiOptions, clearSvg } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";

interface UragakiBorderProps {
  children: React.ReactNode;
  roughness?: number;
  bowing?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  fillStyle?: Options["fillStyle"];
  seed?: number;
  padding?: number;
  shape?: "rectangle" | "ellipse";
  className?: string;
  block?: boolean;
}

export function UragakiBorder({
  children,
  roughness = 2.6,
  bowing = 1.8,
  strokeWidth = 2,
  stroke = "currentColor",
  fill,
  fillStyle = "hachure",
  seed,
  padding = 0,
  shape = "rectangle",
  className,
  block = false,
}: UragakiBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(seed ?? Math.floor(Math.random() * 2 ** 31));
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (seed !== undefined) {
      stableSeed.current = seed;
    }
  }, [seed]);

  useEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const draw = useCallback(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return;
    const svg = svgRef.current;
    clearSvg(svg);

    const rc = rough.svg(svg);
    const options: Options = {
      ...defaultUragakiOptions,
      roughness,
      bowing,
      strokeWidth,
      stroke,
      fill,
      fillStyle,
      seed: stableSeed.current,
    };

    const p = padding;
    let node: SVGGElement;

    if (shape === "ellipse") {
      node = rc.ellipse(
        dimensions.width / 2,
        dimensions.height / 2,
        dimensions.width - 2 * p,
        dimensions.height - 2 * p,
        options
      );
    } else {
      node = rc.rectangle(
        p,
        p,
        dimensions.width - 2 * p,
        dimensions.height - 2 * p,
        options
      );
    }

    svg.appendChild(node);
  }, [dimensions, roughness, bowing, strokeWidth, stroke, fill, fillStyle, padding, shape]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div
      ref={containerRef}
      className={cn(block ? "relative block" : "relative inline-block", className)}
    >
      {children}
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "visible" }}
      />
    </div>
  );
}
