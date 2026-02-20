import { Calendar } from "@/components/ui/calendar";
import { DayPicker } from "react-day-picker";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

type UragakiCalendarProps = React.ComponentProps<typeof DayPicker> & {
  roughness?: number;
  seed?: number;
  className?: string;
  buttonVariant?: React.ComponentProps<typeof Calendar>["buttonVariant"];
};

export function UragakiCalendar({
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiCalendarProps) {
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
      block
    >
      <Calendar
        className={cn("font-[var(--font-uragaki-body)]", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
