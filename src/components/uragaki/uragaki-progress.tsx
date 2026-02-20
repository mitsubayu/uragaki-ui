import { Progress } from "@/components/ui/progress";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

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
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <Progress
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
