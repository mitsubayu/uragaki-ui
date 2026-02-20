import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";
import { useUragakiColors } from "@/lib/uragaki-colors";

interface UragakiAlertProps extends React.ComponentProps<"div"> {
  variant?: "default" | "destructive";
  roughness?: number;
  seed?: number;
}

export function UragakiAlert({
  children,
  className,
  roughness = 1.8,
  seed,
  variant,
  ...props
}: UragakiAlertProps) {
  const colors = useUragakiColors();
  const strokeColor =
    variant === "destructive" ? colors.destructive : colors.border;

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
