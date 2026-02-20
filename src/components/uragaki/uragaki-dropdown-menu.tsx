import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function UragakiDropdownMenu(
  props: React.ComponentProps<typeof DropdownMenu>
) {
  return <DropdownMenu {...props} />;
}

export function UragakiDropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownMenuTrigger>
) {
  return <DropdownMenuTrigger {...props} />;
}

export function UragakiDropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export function UragakiDropdownMenuGroup(
  props: React.ComponentProps<typeof DropdownMenuGroup>
) {
  return <DropdownMenuGroup {...props} />;
}

export function UragakiDropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiDropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel>) {
  return (
    <DropdownMenuLabel
      className={cn("font-[var(--font-uragaki-heading)]", className)}
      {...props}
    />
  );
}

export function UragakiDropdownMenuSeparator(
  props: React.ComponentProps<typeof DropdownMenuSeparator>
) {
  return <DropdownMenuSeparator {...props} />;
}

export function UragakiDropdownMenuShortcut(
  props: React.ComponentProps<typeof DropdownMenuShortcut>
) {
  return <DropdownMenuShortcut {...props} />;
}

export function UragakiDropdownMenuCheckboxItem(
  props: React.ComponentProps<typeof DropdownMenuCheckboxItem>
) {
  return <DropdownMenuCheckboxItem {...props} />;
}

export function UragakiDropdownMenuRadioGroup(
  props: React.ComponentProps<typeof DropdownMenuRadioGroup>
) {
  return <DropdownMenuRadioGroup {...props} />;
}

export function UragakiDropdownMenuRadioItem(
  props: React.ComponentProps<typeof DropdownMenuRadioItem>
) {
  return <DropdownMenuRadioItem {...props} />;
}

export function UragakiDropdownMenuSub(
  props: React.ComponentProps<typeof DropdownMenuSub>
) {
  return <DropdownMenuSub {...props} />;
}

export function UragakiDropdownMenuSubTrigger(
  props: React.ComponentProps<typeof DropdownMenuSubTrigger>
) {
  return <DropdownMenuSubTrigger {...props} />;
}

export function UragakiDropdownMenuSubContent(
  props: React.ComponentProps<typeof DropdownMenuSubContent>
) {
  return <DropdownMenuSubContent {...props} />;
}
