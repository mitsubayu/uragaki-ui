import { useRef, useEffect, useState, useCallback } from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import rough from "roughjs";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

export function UragakiTabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

export function UragakiTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const colors = useUragakiColors();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(Math.floor(Math.random() * 2 ** 31));
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

    // Draw bottom line
    const node = rc.line(0, dims.h - 1, dims.w, dims.h - 1, {
      ...defaultUragakiOptions,
      roughness: 1,
      strokeWidth: 2,
      stroke: colors.border,
      seed: stableSeed.current,
    });
    svg.appendChild(node);
  }, [dims, colors.border]);

  return (
    <div ref={containerRef} className="relative">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "inline-flex items-center gap-1 relative z-10 font-[var(--font-uragaki-body)]",
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

interface UragakiTabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  roughness?: number;
}

export function UragakiTabsTrigger({
  className,
  roughness = 2.6,
  ...props
}: UragakiTabsTriggerProps) {
  const colors = useUragakiColors();
  const ref = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(Math.floor(Math.random() * 2 ** 31));
  const [isActive, setIsActive] = useState(false);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: width, h: height });
    });
    obs.observe(el);

    // Monitor data-state attribute
    const mutationObs = new MutationObserver(() => {
      setIsActive(el.getAttribute("data-state") === "active");
    });
    mutationObs.observe(el, { attributes: true, attributeFilter: ["data-state"] });

    // Initial check
    setIsActive(el.getAttribute("data-state") === "active");

    return () => {
      obs.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  const draw = useCallback(() => {
    if (!svgRef.current || dims.w === 0) return;
    const svg = svgRef.current;
    clearSvg(svg);

    if (isActive) {
      const rc = rough.svg(svg);
      const node = rc.rectangle(0, 0, dims.w, dims.h, {
        ...defaultUragakiOptions,
        roughness,
        strokeWidth: 2,
        stroke: colors.primary,
        fill: colors.background,
        fillStyle: "solid",
        seed: stableSeed.current,
      });
      svg.appendChild(node);
    }
  }, [dims, isActive, roughness, colors.primary, colors.background]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className="relative inline-flex">
      <TabsPrimitive.Trigger
        ref={ref}
        data-slot="tabs-trigger"
        className={cn(
          "relative z-10 px-3 py-1.5 text-sm font-medium cursor-pointer outline-none",
          "text-muted-foreground data-[state=active]:text-foreground",
          "font-[var(--font-uragaki-body)]",
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

export function UragakiTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
