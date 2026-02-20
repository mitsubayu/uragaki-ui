import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiCollapsibleProps
  extends React.ComponentProps<typeof Collapsible> {
  roughness?: number;
  seed?: number;
}

export function UragakiCollapsible({
  className,
  roughness = 1.8,
  seed,
  children,
  ...props
}: UragakiCollapsibleProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <Collapsible
        className={cn("font-[var(--font-uragaki-body)] p-4", className)}
        {...props}
      >
        {children}
      </Collapsible>
    </UragakiBorder>
  );
}

export function UragakiCollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
  return (
    <CollapsibleTrigger
      className={cn("font-[var(--font-uragaki-body)] cursor-pointer", className)}
      {...props}
    />
  );
}

export function UragakiCollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsibleContent>) {
  return (
    <CollapsibleContent
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
