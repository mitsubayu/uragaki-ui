import type { VariantProps } from "class-variance-authority";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiToggleProps
  extends React.ComponentProps<typeof Toggle>,
    VariantProps<typeof toggleVariants> {
  roughness?: number;
  seed?: number;
}

export function UragakiToggle({
  className,
  roughness = 2.6,
  seed,
  ...props
}: UragakiToggleProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
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
