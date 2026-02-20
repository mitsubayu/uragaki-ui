import type { VariantProps } from "class-variance-authority";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiToggleProps
  extends React.ComponentProps<typeof Toggle>,
    VariantProps<typeof toggleVariants> {
  roughness?: number;
  seed?: number;
}

export function UragakiToggle({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiToggleProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
    >
      <Toggle
        className={cn(
          "uragaki-no-border font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      />
    </UragakiBorder>
  );
}
