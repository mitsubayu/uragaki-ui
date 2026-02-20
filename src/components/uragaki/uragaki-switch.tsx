import { Switch } from "@/components/ui/switch";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiSwitchProps extends React.ComponentProps<typeof Switch> {
  roughness?: number;
  seed?: number;
}

export function UragakiSwitch({
  className,
  roughness = 1.8,
  seed,
  ...props
}: UragakiSwitchProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
      shape="ellipse"
    >
      <Switch
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
