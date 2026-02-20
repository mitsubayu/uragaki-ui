import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function UragakiTooltipProvider(
  props: React.ComponentProps<typeof TooltipProvider>
) {
  return <TooltipProvider {...props} />;
}

export function UragakiTooltip(
  props: React.ComponentProps<typeof Tooltip>
) {
  return <Tooltip {...props} />;
}

export function UragakiTooltipTrigger(
  props: React.ComponentProps<typeof TooltipTrigger>
) {
  return <TooltipTrigger {...props} />;
}

export function UragakiTooltipContent({
  className,
  ...props
}: React.ComponentProps<typeof TooltipContent>) {
  return (
    <TooltipContent
      className={cn(
        "font-[var(--font-uragaki-body)] border border-foreground/20",
        className
      )}
      {...props}
    />
  );
}
