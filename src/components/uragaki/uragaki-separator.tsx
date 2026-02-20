import React, { useRef, useEffect, useState, useCallback } from "react";
import rough from "roughjs";
import { defaultUragakiOptions, clearSvg } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiSeparatorProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  roughness?: number;
  seed?: number;
}

export function UragakiSeparator({
  orientation = "horizontal",
  roughness = 1.8,
  seed,
  className,
  ...props
}: UragakiSeparatorProps) {
  const colors = useUragakiColors();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(seed ?? Math.floor(Math.random() * 2 ** 31));
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const draw = useCallback(() => {
    if (!svgRef.current || dimensions.width === 0) return;
    const svg = svgRef.current;
    clearSvg(svg);

    const rc = rough.svg(svg);
    const node =
      orientation === "horizontal"
        ? rc.line(0, 1, dimensions.width, 1, {
            ...defaultUragakiOptions,
            roughness,
            strokeWidth: 1.5,
            stroke: colors.border,
            seed: stableSeed.current,
          })
        : rc.line(1, 0, 1, dimensions.height, {
            ...defaultUragakiOptions,
            roughness,
            strokeWidth: 1.5,
            stroke: colors.border,
            seed: stableSeed.current,
          });

    svg.appendChild(node);
  }, [dimensions, roughness, orientation, colors.border]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div
      ref={containerRef}
      role="separator"
      className={cn(
        orientation === "horizontal" ? "h-[2px] w-full my-2" : "w-[2px] h-full mx-2",
        className
      )}
      {...props}
    >
      <svg
        ref={svgRef}
        width={dimensions.width || "100%"}
        height={dimensions.height || "100%"}
        className="pointer-events-none"
        style={{ overflow: "visible" }}
      />
    </div>
  );
}
