import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

export function UragakiPopover(
  props: React.ComponentProps<typeof Popover>
) {
  return <Popover {...props} />;
}

export function UragakiPopoverTrigger(
  props: React.ComponentProps<typeof PopoverTrigger>
) {
  return <PopoverTrigger {...props} />;
}

interface UragakiPopoverContentProps
  extends React.ComponentProps<typeof PopoverContent> {
  roughness?: number;
  seed?: number;
}

export function UragakiPopoverContent({
  className,
  roughness = 3.5,
  seed,
  children,
  ...props
}: UragakiPopoverContentProps) {
  return (
    <PopoverContent
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
    </PopoverContent>
  );
}
