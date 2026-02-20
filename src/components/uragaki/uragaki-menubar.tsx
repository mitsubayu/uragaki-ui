import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarGroup,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";

export function UragakiMenubar({
  className,
  ...props
}: React.ComponentProps<typeof Menubar>) {
  return (
    <Menubar
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiMenubarMenu(
  props: React.ComponentProps<typeof MenubarMenu>
) {
  return <MenubarMenu {...props} />;
}

export function UragakiMenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarTrigger>) {
  return (
    <MenubarTrigger
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiMenubarContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarContent>) {
  return (
    <MenubarContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiMenubarItem({
  className,
  ...props
}: React.ComponentProps<typeof MenubarItem>) {
  return (
    <MenubarItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiMenubarSeparator(
  props: React.ComponentProps<typeof MenubarSeparator>
) {
  return <MenubarSeparator {...props} />;
}

export function UragakiMenubarLabel({
  className,
  ...props
}: React.ComponentProps<typeof MenubarLabel>) {
  return (
    <MenubarLabel
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiMenubarCheckboxItem(
  props: React.ComponentProps<typeof MenubarCheckboxItem>
) {
  return <MenubarCheckboxItem {...props} />;
}

export function UragakiMenubarRadioGroup(
  props: React.ComponentProps<typeof MenubarRadioGroup>
) {
  return <MenubarRadioGroup {...props} />;
}

export function UragakiMenubarRadioItem(
  props: React.ComponentProps<typeof MenubarRadioItem>
) {
  return <MenubarRadioItem {...props} />;
}

export function UragakiMenubarGroup(
  props: React.ComponentProps<typeof MenubarGroup>
) {
  return <MenubarGroup {...props} />;
}

export function UragakiMenubarSub(
  props: React.ComponentProps<typeof MenubarSub>
) {
  return <MenubarSub {...props} />;
}

export function UragakiMenubarSubContent(
  props: React.ComponentProps<typeof MenubarSubContent>
) {
  return <MenubarSubContent {...props} />;
}

export function UragakiMenubarSubTrigger(
  props: React.ComponentProps<typeof MenubarSubTrigger>
) {
  return <MenubarSubTrigger {...props} />;
}

export function UragakiMenubarShortcut(
  props: React.ComponentProps<typeof MenubarShortcut>
) {
  return <MenubarShortcut {...props} />;
}
