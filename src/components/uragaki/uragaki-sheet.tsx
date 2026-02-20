import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function UragakiSheet(
  props: React.ComponentProps<typeof Sheet>
) {
  return <Sheet {...props} />;
}

export function UragakiSheetTrigger(
  props: React.ComponentProps<typeof SheetTrigger>
) {
  return <SheetTrigger {...props} />;
}

export function UragakiSheetContent({
  className,
  ...props
}: React.ComponentProps<typeof SheetContent>) {
  return (
    <SheetContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-l-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiSheetHeader(
  props: React.ComponentProps<typeof SheetHeader>
) {
  return <SheetHeader {...props} />;
}

export function UragakiSheetFooter(
  props: React.ComponentProps<typeof SheetFooter>
) {
  return <SheetFooter {...props} />;
}

export function UragakiSheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetTitle>) {
  return (
    <SheetTitle
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiSheetDescription(
  props: React.ComponentProps<typeof SheetDescription>
) {
  return <SheetDescription {...props} />;
}

export function UragakiSheetClose(
  props: React.ComponentProps<typeof SheetClose>
) {
  return <SheetClose {...props} />;
}
