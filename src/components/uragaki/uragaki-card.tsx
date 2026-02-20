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
  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke="oklch(0.65 0.01 70)"
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
