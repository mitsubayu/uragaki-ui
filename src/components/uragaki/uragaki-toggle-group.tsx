import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

type UragakiToggleGroupProps = React.ComponentProps<typeof ToggleGroup> & {
  roughness?: number;
  seed?: number;
}

export function UragakiToggleGroup({
  className,
  roughness = 1.8,
  seed,
  ...props
}: UragakiToggleGroupProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
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
