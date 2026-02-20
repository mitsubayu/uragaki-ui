import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

interface UragakiAlertProps extends React.ComponentProps<"div"> {
  variant?: "default" | "destructive";
  roughness?: number;
  seed?: number;
}

export function UragakiAlert({
  children,
  className,
  roughness = 3.5,
  seed,
  variant,
  ...props
}: UragakiAlertProps) {
  const strokeColor =
    variant === "destructive" ? "oklch(0.55 0.2 25)" : "oklch(0.65 0.01 70)";

  return (
    <UragakiBorder
      roughness={roughness}
      seed={seed}
      strokeWidth={2}
      stroke={strokeColor}
      block
    >
      <Alert
        variant={variant}
        className={cn(
          "uragaki-no-border bg-card font-[var(--font-uragaki-body)]",
          className
        )}
        {...props}
      >
        {children}
      </Alert>
    </UragakiBorder>
  );
}

export function UragakiAlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <AlertTitle
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiAlertDescription(
  props: React.ComponentProps<"div">
) {
  return <AlertDescription {...props} />;
}
