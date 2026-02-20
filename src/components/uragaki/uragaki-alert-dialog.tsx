import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { UragakiBorder } from "./uragaki-border";
import { cn } from "@/lib/utils";

export function UragakiAlertDialog(
  props: React.ComponentProps<typeof AlertDialog>
) {
  return <AlertDialog {...props} />;
}

export function UragakiAlertDialogTrigger(
  props: React.ComponentProps<typeof AlertDialogTrigger>
) {
  return <AlertDialogTrigger {...props} />;
}

interface UragakiAlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogContent> {
  roughness?: number;
  seed?: number;
}

export function UragakiAlertDialogContent({
  className,
  roughness = 3.5,
  seed,
  children,
  ...props
}: UragakiAlertDialogContentProps) {
  return (
    <AlertDialogContent
      className={cn(
        "uragaki-no-border bg-background font-[var(--font-uragaki-body)] p-0 overflow-visible",
        className
      )}
      {...props}
    >
      <UragakiBorder
        roughness={roughness}
        seed={seed}
        strokeWidth={2.5}
        stroke="oklch(0.65 0.01 70)"
        block
      >
        <div className="p-6 grid gap-4">{children}</div>
      </UragakiBorder>
    </AlertDialogContent>
  );
}

export function UragakiAlertDialogHeader(
  props: React.ComponentProps<typeof AlertDialogHeader>
) {
  return <AlertDialogHeader {...props} />;
}

export function UragakiAlertDialogFooter(
  props: React.ComponentProps<typeof AlertDialogFooter>
) {
  return <AlertDialogFooter {...props} />;
}

export function UragakiAlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogTitle>) {
  return (
    <AlertDialogTitle
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiAlertDialogDescription(
  props: React.ComponentProps<typeof AlertDialogDescription>
) {
  return <AlertDialogDescription {...props} />;
}

export function UragakiAlertDialogAction(
  props: React.ComponentProps<typeof AlertDialogAction>
) {
  return <AlertDialogAction {...props} />;
}

export function UragakiAlertDialogCancel(
  props: React.ComponentProps<typeof AlertDialogCancel>
) {
  return <AlertDialogCancel {...props} />;
}
