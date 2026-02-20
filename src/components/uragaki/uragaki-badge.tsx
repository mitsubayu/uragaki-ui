import type { VariantProps } from "class-variance-authority";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors, type UragakiColors } from "@/lib/uragaki-colors";

interface UragakiBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  roughness?: number;
  seed?: number;
}

function getUragakiStyle(variant: string | null | undefined, colors: UragakiColors) {
  switch (variant) {
    case "default":
      return { stroke: colors.primary, fill: colors.primary, fillStyle: "solid" as const };
    case "destructive":
      return { stroke: colors.destructive, fill: colors.destructive, fillStyle: "solid" as const };
    case "secondary":
      return { stroke: colors.secondaryBorder, fill: colors.secondaryFill, fillStyle: "solid" as const };
    case "outline":
      return { stroke: colors.border, fill: undefined, fillStyle: "hachure" as const };
    default:
      return { stroke: colors.border, fill: undefined, fillStyle: "hachure" as const };
  }
}

export function UragakiBadge({
  children,
  className,
  roughness = 3.5,
  seed,
  variant = "default",
  asChild,
  ...props
}: UragakiBadgeProps) {
  const colors = useUragakiColors();
  const style = getUragakiStyle(variant, colors);

  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      stroke={style.stroke}
      fill={style.fill}
      fillStyle={style.fillStyle}
      strokeWidth={1.5}
      shape="ellipse"
    >
      <Badge
        variant={variant}
        asChild={asChild}
        className={cn(
          "uragaki-no-border bg-transparent relative z-10 font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      >
        {children}
      </Badge>
    </UragakiBorder>
  );
}
