import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiRadioGroupProps
  extends React.ComponentProps<typeof RadioGroup> {
  roughness?: number;
  seed?: number;
}

export function UragakiRadioGroup({
  className,
  ...props
}: UragakiRadioGroupProps) {
  return (
    <RadioGroup
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

interface UragakiRadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupItem> {
  roughness?: number;
  seed?: number;
}

export function UragakiRadioGroupItem({
  className,
  roughness = 2.6,
  seed,
  ...props
}: UragakiRadioGroupItemProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
      shape="ellipse"
    >
      <RadioGroupItem
        className={cn("uragaki-no-border", className)}
        {...props}
      />
    </UragakiBorder>
  );
}
