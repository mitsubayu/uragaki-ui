import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  roughness?: number;
  seed?: number;
}

function getUragakiStyle(variant: string | null | undefined) {
  switch (variant) {
    case "default":
      return { stroke: "oklch(0.45 0.15 250)", fill: "oklch(0.45 0.15 250)", fillStyle: "solid" as const };
    case "destructive":
      return { stroke: "oklch(0.55 0.2 25)", fill: "oklch(0.55 0.2 25)", fillStyle: "solid" as const };
    case "outline":
      return { stroke: "oklch(0.65 0.01 70)", fill: undefined, fillStyle: "hachure" as const };
    case "secondary":
      return { stroke: "oklch(0.65 0.01 70)", fill: "oklch(0.88 0.01 80)", fillStyle: "solid" as const };
    case "ghost":
      return { stroke: "transparent", fill: undefined, fillStyle: "hachure" as const };
    case "link":
      return { stroke: "transparent", fill: undefined, fillStyle: "hachure" as const };
    default:
      return { stroke: "oklch(0.65 0.01 70)", fill: undefined, fillStyle: "hachure" as const };
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
  const style = getUragakiStyle(variant);

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
