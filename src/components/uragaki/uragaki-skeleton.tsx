import { Skeleton } from "@/components/ui/skeleton";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiSkeletonProps extends React.ComponentProps<"div"> {
  roughness?: number;
  seed?: number;
}

export function UragakiSkeleton({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiSkeletonProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={1.5}
      stroke="oklch(0.65 0.01 70 / 0.3)"
      block
    >
      <Skeleton
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
