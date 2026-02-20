import { useRef, useEffect, useState } from "react";
import rough from "roughjs";
import { Textarea } from "@/components/ui/textarea";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";

interface UragakiTextareaProps extends React.ComponentProps<"textarea"> {
  roughness?: number;
  seed?: number;
}

export function UragakiTextarea({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiTextareaProps) {
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

    const node = rc.rectangle(0, 0, dims.w, dims.h, {
      ...defaultUragakiOptions,
      roughness,
      strokeWidth: 2,
      stroke: "oklch(0.65 0.01 70)",
      seed: stableSeed.current,
    });
    svg.appendChild(node);
  }, [dims, roughness]);

  return (
    <div ref={containerRef} className="relative w-full">
      <Textarea
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
