import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

type UragakiToggleGroupProps = React.ComponentProps<typeof ToggleGroup> & {
  roughness?: number;
  seed?: number;
}

export function UragakiToggleGroup({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiToggleGroupProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
    >
      <ToggleGroup
        className={cn(
          "uragaki-no-border font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      />
    </UragakiBorder>
  );
}

export function UragakiToggleGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupItem>) {
  return (
    <ToggleGroupItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
