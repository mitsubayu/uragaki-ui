import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiAspectRatioProps
  extends React.ComponentProps<typeof AspectRatio> {
  roughness?: number;
  seed?: number;
}

export function UragakiAspectRatio({
  className,
  roughness = 1.8,
  seed,
  children,
  ...props
}: UragakiAspectRatioProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <AspectRatio className={cn("overflow-hidden", className)} {...props}>
        {children}
      </AspectRatio>
    </UragakiBorder>
  );
}
