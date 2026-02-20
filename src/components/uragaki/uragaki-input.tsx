import { useRef, useEffect, useState } from "react";
import rough from "roughjs";
import { Input } from "@/components/ui/input";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiInputProps extends React.ComponentProps<"input"> {
  roughness?: number;
  seed?: number;
  borderStyle?: "underline" | "box";
}

export function UragakiInput({
  className,
  roughness = 2.6,
  seed,
  borderStyle = "underline",
  ...props
}: UragakiInputProps) {
  const colors = useUragakiColors();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(seed ?? Math.floor(Math.random() * 2 ** 31));
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const obs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dims.w === 0) return;
    const svg = svgRef.current;
    clearSvg(svg);
    const rc = rough.svg(svg);

    if (borderStyle === "underline") {
      const node = rc.line(0, dims.h - 1, dims.w, dims.h - 1, {
        ...defaultUragakiOptions,
        roughness,
        bowing: 0.5,
        strokeWidth: 2,
        stroke: colors.border,
        seed: stableSeed.current,
      });
      svg.appendChild(node);
    } else {
      const node = rc.rectangle(0, 0, dims.w, dims.h, {
        ...defaultUragakiOptions,
        roughness,
        strokeWidth: 2,
        stroke: colors.border,
        seed: stableSeed.current,
      });
      svg.appendChild(node);
    }
  }, [dims, roughness, borderStyle, colors.border]);

  return (
    <div ref={containerRef} className="relative w-full">
      <Input
        className={cn(
          "uragaki-no-border bg-transparent relative z-10 font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      />
      <svg
        ref={svgRef}
        width={dims.w}
        height={dims.h}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
