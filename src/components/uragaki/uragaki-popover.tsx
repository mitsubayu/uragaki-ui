import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

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
  roughness = 1.8,
  seed,
  children,
  ...props
}: UragakiPopoverContentProps) {
  const colors = useUragakiColors();
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
        stroke={colors.border}
        block
      >
        <div className="p-4">{children}</div>
      </UragakiBorder>
    </PopoverContent>
  );
}
