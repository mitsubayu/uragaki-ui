import { useRef, useEffect, useState } from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import rough from "roughjs";
import { clearSvg, defaultUragakiOptions } from "@/lib/rough-helpers";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiCheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  roughness?: number;
  seed?: number;
}

export function UragakiCheckbox({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiCheckboxProps) {
  const colors = useUragakiColors();
  const svgRef = useRef<SVGSVGElement>(null);
  const stableSeed = useRef(seed ?? Math.floor(Math.random() * 2 ** 31));
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    clearSvg(svg);
    const rc = rough.svg(svg);

    // Draw the box
    const box = rc.rectangle(2, 2, 16, 16, {
      ...defaultUragakiOptions,
      roughness,
      strokeWidth: 2,
      stroke: colors.border,
      seed: stableSeed.current,
    });
    svg.appendChild(box);

    // Draw checkmark when checked
    if (checked) {
      const check = rc.path("M 5 10 L 9 15 L 16 5", {
        ...defaultUragakiOptions,
        roughness: roughness * 0.8,
        strokeWidth: 2.5,
        stroke: colors.primary,
        seed: stableSeed.current + 1,
      });
      svg.appendChild(check);
    }
  }, [checked, roughness, colors.border, colors.primary]);

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "relative inline-flex items-center justify-center size-5 cursor-pointer outline-none",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onCheckedChange={(c) => {
        setChecked(c === true);
        props.onCheckedChange?.(c);
      }}
      {...props}
    >
      <svg
        ref={svgRef}
        width={20}
        height={20}
        className="absolute inset-0"
        style={{ overflow: "visible" }}
      />
    </CheckboxPrimitive.Root>
  );
}
