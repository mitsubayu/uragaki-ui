import { useRef, useEffect, useState } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import rough from "roughjs";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

export function UragakiDialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root {...props} />;
}

export function UragakiDialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />;
}

function UragakiDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40",
        className
      )}
      {...props}
    />
  );
}

interface UragakiDialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  roughness?: number;
  seed?: number;
}

export function UragakiDialogContent({
  className,
  children,
  roughness = 3.5,
  seed,
  ...props
}: UragakiDialogContentProps) {
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

  // Draw a rough X for close button
  const closeSvgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!closeSvgRef.current) return;
    const svg = closeSvgRef.current;
    clearSvg(svg);
    const rc = rough.svg(svg);

    const line1 = rc.line(3, 3, 13, 13, {
      roughness: 1,
      strokeWidth: 2,
      stroke: colors.muted,
      seed: stableSeed.current + 100,
    });
    const line2 = rc.line(13, 3, 3, 13, {
      roughness: 1,
      strokeWidth: 2,
      stroke: colors.muted,
      seed: stableSeed.current + 200,
    });
    svg.appendChild(line1);
    svg.appendChild(line2);
  }, [colors.muted]);

  return (
    <DialogPrimitive.Portal>
      <UragakiDialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200",
          className
        )}
        {...props}
      >
        <div ref={containerRef} className="relative bg-card p-6 grid gap-4">
          <div className="relative z-10 font-[var(--font-uragaki-body)]">
            {children}
          </div>
          <svg
            ref={svgRef}
            width={dims.w}
            height={dims.h}
            className="absolute inset-0 pointer-events-none"
            style={{ overflow: "visible" }}
          />
          <DialogPrimitive.Close className="absolute top-4 right-4 z-20 cursor-pointer opacity-70 hover:opacity-100 outline-none">
            <svg ref={closeSvgRef} width={16} height={16} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function UragakiDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

export function UragakiDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

export function UragakiDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "text-lg leading-none font-semibold font-[var(--font-uragaki-heading)]",
        className
      )}
      {...props}
    />
  );
}

export function UragakiDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
