import { Skeleton } from "@/components/ui/skeleton";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

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
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={1.5}
      stroke={colors.border.replace(")", " / 0.3)")}
      block
    >
      <Skeleton
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
