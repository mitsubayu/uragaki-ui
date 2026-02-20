import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

export function UragakiHoverCard(
  props: React.ComponentProps<typeof HoverCard>
) {
  return <HoverCard {...props} />;
}

export function UragakiHoverCardTrigger(
  props: React.ComponentProps<typeof HoverCardTrigger>
) {
  return <HoverCardTrigger {...props} />;
}

interface UragakiHoverCardContentProps
  extends React.ComponentProps<typeof HoverCardContent> {
  roughness?: number;
  seed?: number;
}

export function UragakiHoverCardContent({
  className,
  roughness = 3.5,
  seed,
  children,
  ...props
}: UragakiHoverCardContentProps) {
  return (
    <HoverCardContent
      className={cn(
        "uragaki-no-border bg-popover font-[var(--font-uragaki-body)] p-0 overflow-visible",
        className
      )}
      {...props}
    >
      <UragakiBorder
        roughness={roughness}
        seed={seed}
        strokeWidth={2}
        stroke="oklch(0.65 0.01 70)"
        block
      >
        <div className="p-4">{children}</div>
      </UragakiBorder>
    </HoverCardContent>
  );
}
