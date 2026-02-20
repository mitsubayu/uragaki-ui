import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export function UragakiCommand({
  className,
  ...props
}: React.ComponentProps<typeof Command>) {
  return (
    <Command
      className={cn(
        "font-[var(--font-uragaki-body)] border-2 border-foreground/20 rounded-none",
        className
      )}
      {...props}
    />
  );
}

export function UragakiCommandDialog(
  props: React.ComponentProps<typeof CommandDialog>
) {
  return <CommandDialog {...props} />;
}

export function UragakiCommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandInput>) {
  return (
    <CommandInput
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiCommandList(
  props: React.ComponentProps<typeof CommandList>
) {
  return <CommandList {...props} />;
}

export function UragakiCommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandEmpty>) {
  return (
    <CommandEmpty
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiCommandGroup(
  props: React.ComponentProps<typeof CommandGroup>
) {
  return <CommandGroup {...props} />;
}

export function UragakiCommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandItem>) {
  return (
    <CommandItem
      className={cn("font-[var(--font-uragaki-body)]", className)}
      {...props}
    />
  );
}

export function UragakiCommandShortcut({
  className,
  ...props
}: React.ComponentProps<typeof CommandShortcut>) {
  return (
    <CommandShortcut
      className={cn("font-[var(--font-uragaki-accent)]", className)}
      {...props}
    />
  );
}

export function UragakiCommandSeparator(
  props: React.ComponentProps<typeof CommandSeparator>
) {
  return <CommandSeparator {...props} />;
}
