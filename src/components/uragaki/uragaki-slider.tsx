import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface UragakiSliderProps extends React.ComponentProps<typeof Slider> {
  roughness?: number;
  seed?: number;
}

export function UragakiSlider({
  className,
  ...props
}: UragakiSliderProps) {
  return (
    <Slider
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}
