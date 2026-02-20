import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiScrollAreaProps
  extends React.ComponentProps<typeof ScrollArea> {
  roughness?: number;
  seed?: number;
}

export function UragakiScrollArea({
  className,
  roughness = 3.5,
  seed,
  children,
  ...props
}: UragakiScrollAreaProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <ScrollArea
        className={cn("font-[var(--font-uragaki-body)]", className)}
        {...props}
      >
        {children}
      </ScrollArea>
    </UragakiBorder>
  );
}

export function UragakiScrollBar(
  props: React.ComponentProps<typeof ScrollBar>
) {
  return <ScrollBar {...props} />;
}
