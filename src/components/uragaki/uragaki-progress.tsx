import { Progress } from "@/components/ui/progress";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiProgressProps extends React.ComponentProps<typeof Progress> {
  roughness?: number;
  seed?: number;
}

export function UragakiProgress({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiProgressProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
      block
    >
      <Progress
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
