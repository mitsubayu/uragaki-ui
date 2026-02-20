import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiCardProps extends React.ComponentProps<"div"> {
  roughness?: number;
  seed?: number;
}

export function UragakiCard({
  children,
  className,
  roughness = 3.5,
  seed,
  ...props
}: UragakiCardProps) {
  const colors = useUragakiColors();
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={colors.border}
      block
    >
      <Card
        className={cn(
          "uragaki-no-border bg-card font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </UragakiBorder>
  );
}

export function UragakiCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <CardHeader className={className} {...props} />;
}

export function UragakiCardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <CardTitle
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiCardDescription(
  props: React.ComponentProps<"div">
) {
  return <CardDescription {...props} />;
}

export function UragakiCardContent(
  props: React.ComponentProps<"div">
) {
  return <CardContent {...props} />;
}

export function UragakiCardFooter(
  props: React.ComponentProps<"div">
) {
  return <CardFooter {...props} />;
}

export function UragakiCardAction(
  props: React.ComponentProps<"div">
) {
  return <CardAction {...props} />;
}
