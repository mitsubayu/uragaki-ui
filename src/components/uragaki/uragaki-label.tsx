import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function UragakiLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
