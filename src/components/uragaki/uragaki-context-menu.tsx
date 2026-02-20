import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

export function UragakiContextMenu(
  props: React.ComponentProps<typeof ContextMenu>
) {
  return <ContextMenu {...props} />;
}

export function UragakiContextMenuTrigger(
  props: React.ComponentProps<typeof ContextMenuTrigger>
) {
  return <ContextMenuTrigger {...props} />;
}

export function UragakiContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiContextMenuGroup(
  props: React.ComponentProps<typeof ContextMenuGroup>
) {
  return <ContextMenuGroup {...props} />;
}

export function UragakiContextMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuItem>) {
  return (
    <ContextMenuItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiContextMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuLabel>) {
  return (
    <ContextMenuLabel
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiContextMenuSeparator(
  props: React.ComponentProps<typeof ContextMenuSeparator>
) {
  return <ContextMenuSeparator {...props} />;
}

export function UragakiContextMenuShortcut(
  props: React.ComponentProps<typeof ContextMenuShortcut>
) {
  return <ContextMenuShortcut {...props} />;
}

export function UragakiContextMenuCheckboxItem(
  props: React.ComponentProps<typeof ContextMenuCheckboxItem>
) {
  return <ContextMenuCheckboxItem {...props} />;
}

export function UragakiContextMenuRadioGroup(
  props: React.ComponentProps<typeof ContextMenuRadioGroup>
) {
  return <ContextMenuRadioGroup {...props} />;
}

export function UragakiContextMenuRadioItem(
  props: React.ComponentProps<typeof ContextMenuRadioItem>
) {
  return <ContextMenuRadioItem {...props} />;
}

export function UragakiContextMenuSub(
  props: React.ComponentProps<typeof ContextMenuSub>
) {
  return <ContextMenuSub {...props} />;
}

export function UragakiContextMenuSubTrigger(
  props: React.ComponentProps<typeof ContextMenuSubTrigger>
) {
  return <ContextMenuSubTrigger {...props} />;
}

export function UragakiContextMenuSubContent(
  props: React.ComponentProps<typeof ContextMenuSubContent>
) {
  return <ContextMenuSubContent {...props} />;
}
