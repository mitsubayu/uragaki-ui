import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

export function UragakiDrawer(
  props: React.ComponentProps<typeof Drawer>
) {
  return <Drawer {...props} />;
}

export function UragakiDrawerTrigger(
  props: React.ComponentProps<typeof DrawerTrigger>
) {
  return <DrawerTrigger {...props} />;
}

export function UragakiDrawerClose(
  props: React.ComponentProps<typeof DrawerClose>
) {
  return <DrawerClose {...props} />;
}

export function UragakiDrawerContent({
  className,
  ...props
}: React.ComponentProps<typeof DrawerContent>) {
  return (
    <DrawerContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-t-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiDrawerHeader(
  props: React.ComponentProps<typeof DrawerHeader>
) {
  return <DrawerHeader {...props} />;
}

export function UragakiDrawerFooter(
  props: React.ComponentProps<typeof DrawerFooter>
) {
  return <DrawerFooter {...props} />;
}

export function UragakiDrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerTitle>) {
  return (
    <DrawerTitle
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiDrawerDescription(
  props: React.ComponentProps<typeof DrawerDescription>
) {
  return <DrawerDescription {...props} />;
}
