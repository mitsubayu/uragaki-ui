import { Switch } from "@/components/ui/switch";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiSwitchProps extends React.ComponentProps<typeof Switch> {
  roughness?: number;
  seed?: number;
}

export function UragakiSwitch({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiSwitchProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      shape="ellipse"
    >
      <Switch
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
