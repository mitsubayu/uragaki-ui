import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors, type UragakiColors } from "@/lib/uragaki-colors";

interface UragakiButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
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
    case "outline":
      return { stroke: colors.border, fill: undefined, fillStyle: "hachure" as const };
    case "secondary":
      return { stroke: colors.secondaryBorder, fill: colors.secondaryFill, fillStyle: "solid" as const };
    case "ghost":
      return { stroke: "transparent", fill: undefined, fillStyle: "hachure" as const };
    case "link":
      return { stroke: "transparent", fill: undefined, fillStyle: "hachure" as const };
    default:
      return { stroke: colors.border, fill: undefined, fillStyle: "hachure" as const };
  }
}

export function UragakiButton({
  children,
  className,
  roughness = 3.5,
  seed,
  variant = "default",
  size,
  asChild,
  ...props
}: UragakiButtonProps) {
  const colors = useUragakiColors();
  const style = getUragakiStyle(variant, colors);

  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      stroke={style.stroke}
      fill={style.fill}
      fillStyle={style.fillStyle}
      strokeWidth={2.5}
      className="uragaki-hover"
    >
      <Button
        variant={variant}
        size={size}
        asChild={asChild}
        className={cn(
          "uragaki-no-border bg-transparent relative z-10 font-[var(--font-uragaki-body)]",
          variant === "default" && "text-primary-foreground",
          variant === "destructive" && "text-white",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </UragakiBorder>
  );
}
