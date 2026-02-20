import { useRef, useEffect, useState } from "react";
import { Select as SelectPrimitive } from "radix-ui";
import rough from "roughjs";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { ChevronDownIcon as ChevronDown } from "lucide-react";
import { useUragakiColors } from "@/lib/uragaki-colors";

export function UragakiSelect(
  props: React.ComponentProps<typeof SelectPrimitive.Root>
) {
  return <SelectPrimitive.Root {...props} />;
}

export function UragakiSelectValue(
  props: React.ComponentProps<typeof SelectPrimitive.Value>
) {
  return <SelectPrimitive.Value {...props} />;
}

export function UragakiSelectGroup(
  props: React.ComponentProps<typeof SelectPrimitive.Group>
) {
  return <SelectPrimitive.Group {...props} />;
}

interface UragakiSelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  roughness?: number;
  seed?: number;
}

export function UragakiSelectTrigger({
  className,
  children,
  roughness = 1.8,
  seed,
  ...props
}: UragakiSelectTriggerProps) {
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

    const node = rc.rectangle(0, 0, dims.w, dims.h, {
      ...defaultUragakiOptions,
      roughness,
      strokeWidth: 2,
      stroke: colors.border,
      seed: stableSeed.current,
    });
    svg.appendChild(node);
  }, [dims, roughness, colors.border]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <SelectPrimitive.Trigger
        className={cn(
          "flex w-fit items-center justify-between gap-2 bg-transparent px-3 py-2 text-sm",
          "relative z-10 outline-none cursor-pointer font-[var(--font-uragaki-body)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <svg
        ref={svgRef}
        width={dims.w}
        height={dims.h}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}

interface UragakiSelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content> {
  roughness?: number;
}

export function UragakiSelectContent({
  className,
  children,
  roughness = 1.8,
  position = "popper",
  ...props
}: UragakiSelectContentProps) {
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

    const node = rc.rectangle(0, 0, dims.w, dims.h, {
      ...defaultUragakiOptions,
      roughness,
      strokeWidth: 2,
      stroke: colors.border,
      fill: colors.background,
      fillStyle: "solid",
      seed: stableSeed.current,
    });
    svg.appendChild(node);
  }, [dims, roughness, colors.border, colors.background]);

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          position === "popper" && "data-[side=bottom]:translate-y-1",
          className
        )}
        {...props}
      >
        <div ref={containerRef} className="relative">
          <SelectPrimitive.Viewport
            className={cn(
              "p-1 relative z-10 font-[var(--font-uragaki-body)]",
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <svg
            ref={svgRef}
            width={dims.w}
            height={dims.h}
            className="absolute inset-0 pointer-events-none"
            style={{ overflow: "visible" }}
          />
        </div>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function UragakiSelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none",
        "focus:bg-accent/50 focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "font-[var(--font-uragaki-body)]",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              d="M 2 7 L 5.5 10.5 L 12 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export function UragakiSelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "text-muted-foreground px-2 py-1.5 text-xs font-[var(--font-uragaki-accent)]",
        className
      )}
      {...props}
    />
  );
}
